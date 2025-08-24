// api/generate-pdf.js
const puppeteer = require('puppeteer');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--no-first-run',
        '--no-zygote',
        '--single-process'
      ]
    });

    const page = await browser.newPage();

    // Set viewport for single long page (like Figma export)
    await page.setViewport({
      width: 1200,
      height: 800, // Initial height, will expand
      deviceScaleFactor: 2
    });

    // Navigate to your resume
    const targetUrl = req.body.url || 'https://your-vercel-url.vercel.app';
    await page.goto(targetUrl, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Hide download button and any fixed elements
    await page.addStyleTag({
      content: `
        .fixed { display: none !important; }
        body { 
          margin: 0 !important; 
          padding: 20px !important; 
          background: #000 !important;
        }
        * { 
          -webkit-print-color-adjust: exact !important;
          color-adjust: exact !important;
        }
        /* Ensure single page layout */
        .w-full.max-w-5xl {
          max-width: 100% !important;
          width: 100% !important;
        }
      `
    });

    // Get the full content height to make one long page
    const contentHeight = await page.evaluate(() => {
      return Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
    });

    // Generate PDF as single long page (like Figma)
    const pdf = await page.pdf({
      width: 1200,
      height: contentHeight + 100, // Add some padding
      printBackground: true,
      margin: { top: '20px', bottom: '20px', left: '20px', right: '20px' },
      displayHeaderFooter: false,
      preferCSSPageSize: false
    });

    await browser.close();

    // Return PDF
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Suraj_Singh_Resume.pdf"');
    res.send(pdf);

  } catch (error) {
    console.error('PDF generation error:', error);
    res.status(500).json({ 
      message: 'PDF generation failed', 
      error: error.message 
    });
  }
};
