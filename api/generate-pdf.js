// api/generate-pdf.js
const puppeteer = require('puppeteer');

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  let browser;
  
  try {
    console.log('Starting PDF generation...');
    
    // Launch browser with optimized settings for Vercel
    browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--no-first-run',
        '--no-zygote',
        '--single-process',
        '--disable-extensions',
        '--disable-background-timer-throttling',
        '--disable-backgrounding-occluded-windows',
        '--disable-renderer-backgrounding'
      ],
      timeout: 30000
    });

    console.log('Browser launched successfully');
    const page = await browser.newPage();

    // Set viewport for PDF generation
    await page.setViewport({
      width: 1200,
      height: 800,
      deviceScaleFactor: 2
    });

    // Get the URL from request body, construct proper URL
    const host = req.headers.host || req.headers['x-forwarded-host'];
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const targetUrl = req.body?.url || `${protocol}://${host}`;
    console.log('Navigating to:', targetUrl);

    // Navigate to the page
    await page.goto(targetUrl, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    console.log('Page loaded successfully');

    // Add styles to optimize for PDF
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
        .w-full.max-w-5xl {
          max-width: 100% !important;
          width: 100% !important;
        }
        /* Hide any download buttons */
        button[class*="download"], 
        div[class*="download"] { 
          display: none !important; 
        }
      `
    });

    // Get content height for single page PDF
    const contentHeight = await page.evaluate(() => {
      return Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
    });

    console.log('Content height:', contentHeight);

    // Generate PDF
    const pdf = await page.pdf({
      width: 1200,
      height: Math.max(contentHeight + 100, 1600), // Minimum height
      printBackground: true,
      margin: { 
        top: '20px', 
        bottom: '20px', 
        left: '20px', 
        right: '20px' 
      },
      displayHeaderFooter: false,
      preferCSSPageSize: false,
      format: undefined // Don't use standard format
    });

    console.log('PDF generated successfully, size:', pdf.length);

    // Set response headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Suraj_Singh_Resume.pdf"');
    res.setHeader('Content-Length', pdf.length);
    
    // Send PDF
    res.status(200).send(pdf);

  } catch (error) {
    console.error('PDF generation error:', error);
    
    // Send detailed error information
    res.status(500).json({ 
      message: 'PDF generation failed', 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  } finally {
    // Always close browser
    if (browser) {
      try {
        await browser.close();
        console.log('Browser closed');
      } catch (closeError) {
        console.error('Error closing browser:', closeError);
      }
    }
  }
};
