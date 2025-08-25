// api/generate-pdf.js
export default async function handler(req, res) {
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
    console.log('Environment check - VERCEL_ENV:', process.env.VERCEL_ENV);
    console.log('Environment check - NODE_ENV:', process.env.NODE_ENV);
    
    // Check if running on Vercel
    const isVercel = !!process.env.VERCEL_ENV || !!process.env.VERCEL;
    console.log('Is Vercel environment:', isVercel);
    
    let puppeteer, chromium;
    let launchOptions = {
      headless: true,
      timeout: 30000,
    };

    if (isVercel) {
      console.log('Loading Vercel-specific modules...');
      try {
        // Import modules for Vercel environment
        chromium = (await import('@sparticuz/chromium')).default;
        puppeteer = await import('puppeteer-core');
        
        console.log('Chromium args:', chromium.args);
        // Add these args to fix the libnss3.so error
const args = [
  ...chromium.args,
  '--no-sandbox',
  '--disable-setuid-sandbox',
  '--disable-dev-shm-usage',
  '--disable-extensions',
  '--disable-gpu',
  '--single-process',
  '--no-zygote',
  '--disable-features=VizDisplayCompositor'
];

launchOptions = {
  ...launchOptions,
  args: args,
  executablePath: await chromium.executablePath(),
  headless: chromium.headless,
};
        
        console.log('Vercel launch options configured');
      } catch (importError) {
        console.error('Failed to import Vercel modules:', importError);
        throw new Error(`Module import failed: ${importError.message}`);
      }
    } else {
      console.log('Loading local puppeteer...');
      try {
        puppeteer = await import('puppeteer');
        console.log('Local puppeteer loaded');
      } catch (importError) {
        console.error('Failed to import local puppeteer:', importError);
        throw new Error(`Puppeteer import failed: ${importError.message}`);
      }
    }

    console.log('Launching browser with options:', JSON.stringify(launchOptions, null, 2));

    // Launch browser
    browser = await puppeteer.launch(launchOptions);
    console.log('Browser launched successfully');
    
    const page = await browser.newPage();
    console.log('New page created');

    // Set viewport for PDF generation
    await page.setViewport({
      width: 1200,
      height: 800,
      deviceScaleFactor: 2
    });
    console.log('Viewport set');

    // Construct the target URL
    const host = req.headers.host || req.headers['x-forwarded-host'];
    const protocol = req.headers['x-forwarded-proto'] || (req.headers.host?.includes('localhost') ? 'http' : 'https');
    const targetUrl = req.body?.url || `${protocol}://${host}`;
    console.log('Navigating to:', targetUrl);

    // Navigate to the page with extended timeout
    await page.goto(targetUrl, {
      waitUntil: 'networkidle0',
      timeout: 60000
    });
    console.log('Page navigation completed');

    // Wait a bit more for any dynamic content
    await page.waitForTimeout(2000);
    console.log('Additional wait completed');

    // Add styles to optimize for PDF
    await page.addStyleTag({
      content: `
        /* Hide fixed elements like download buttons */
        .fixed, 
        button[class*="download"], 
        div[class*="download"],
        [class*="z-50"] { 
          display: none !important; 
        }
        
        /* Optimize for PDF */
        body { 
          margin: 0 !important; 
          padding: 20px !important; 
          background: #000 !important;
          overflow-x: hidden !important;
        }
        
        * { 
          -webkit-print-color-adjust: exact !important;
          color-adjust: exact !important;
        }
        
        .w-full.max-w-5xl {
          max-width: 100% !important;
          width: 100% !important;
        }
        
        /* Reset z-index for PDF */
        * {
          position: relative !important;
          z-index: auto !important;
        }
      `
    });
    console.log('PDF styles applied');

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
    console.log('Content height calculated:', contentHeight);

    // Generate PDF
    const pdf = await page.pdf({
      width: 1200,
      height: Math.max(contentHeight + 100, 1600),
      printBackground: true,
      margin: { 
        top: '20px', 
        bottom: '20px', 
        left: '20px', 
        right: '20px' 
      },
      displayHeaderFooter: false,
      preferCSSPageSize: false,
      timeout: 60000
    });

    console.log('PDF generated successfully, size:', pdf.length, 'bytes');

    // Set response headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Suraj_Singh_Resume.pdf"');
    res.setHeader('Content-Length', pdf.length);
    
    // Send PDF
    return res.status(200).send(pdf);

  } catch (error) {
    console.error('PDF generation error:', error);
    console.error('Error stack:', error.stack);
    
    return res.status(500).json({ 
      message: 'PDF generation failed', 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      timestamp: new Date().toISOString()
    });
  } finally {
    if (browser) {
      try {
        await browser.close();
        console.log('Browser closed successfully');
      } catch (closeError) {
        console.error('Error closing browser:', closeError);
      }
    }
  }
}
