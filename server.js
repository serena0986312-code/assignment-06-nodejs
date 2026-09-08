const http = require('http');
const url = require('url');

const PORT = 5000;

// Helper function to render HTML pages
function renderPage(title, heading, content, navLinks) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          margin: 0;
          padding: 20px;
          background-color: #f4f4f4;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        h1 {
          color: #333;
          border-bottom: 3px solid #007bff;
          padding-bottom: 10px;
        }
        p {
          color: #666;
          font-size: 16px;
        }
        nav {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #ddd;
        }
        nav a {
          display: inline-block;
          margin-right: 15px;
          padding: 10px 15px;
          background-color: #007bff;
          color: white;
          text-decoration: none;
          border-radius: 4px;
          transition: background-color 0.3s;
        }
        nav a:hover {
          background-color: #0056b3;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>${heading}</h1>
        ${content}
        <nav>
          ${navLinks}
        </nav>
      </div>
    </body>
    </html>
  `;
}

// Create HTTP Server
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Set response headers
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  if (pathname === '/' || pathname === '/home') {
    // Home Route
    const content = `
      <p>Welcome to our website! This is the home page where you can find the latest updates and information about our services.</p>
      <p>Feel free to explore our site using the navigation links below.</p>
    `;
    const navLinks = `
      <a href="/home">Home</a>
      <a href="/blog">Blog</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    `;
    res.writeHead(200);
    res.end(renderPage('Home', 'Welcome to Home Page', content, navLinks));
  } 
  else if (pathname === '/blog') {
    // Blog Route
    const content = `
      <p>Explore our latest blog posts and articles on various topics including technology, lifestyle, and business.</p>
      <p>Check back regularly for new content and updates from our team of expert writers.</p>
    `;
    const navLinks = `
      <a href="/home">Home</a>
      <a href="/blog">Blog</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    `;
    res.writeHead(200);
    res.end(renderPage('Blog', 'Our Blog', content, navLinks));
  }
  else if (pathname === '/about') {
    // About Route
    const content = `
      <p>Learn more about who we are and what we do. Our company is dedicated to providing quality services and solutions to our valued clients.</p>
      <p>With years of experience in the industry, we pride ourselves on delivering excellence in everything we do.</p>
    `;
    const navLinks = `
      <a href="/home">Home</a>
      <a href="/blog">Blog</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    `;
    res.writeHead(200);
    res.end(renderPage('About', 'About Us', content, navLinks));
  }
  else if (pathname === '/contact') {
    // Contact Route
    const content = `
      <p>Get in touch with us! We'd love to hear from you and answer any questions you may have.</p>
      <p>Email: info@example.com<br>Phone: +1 (555) 123-4567<br>Address: 123 Main Street, City, State 12345</p>
      <h2 style="color: #007bff; margin-top: 30px;">Repository</h2>
      <p><strong>GitHub Repository:</strong></p>
      <p style="word-break: break-all;"><a href="https://github.com/serena0986312-code/assignment-06-nodejs" target="_blank" style="color: #007bff; text-decoration: none; font-weight: bold;">https://github.com/serena0986312-code/assignment-06-nodejs</a></p>
    `;
    const navLinks = `
      <a href="/home">Home</a>
      <a href="/blog">Blog</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    `;
    res.writeHead(200);
    res.end(renderPage('Contact', 'Contact Us', content, navLinks));
  }
  else {
    // 404 Page Not Found
    const content = `
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>Please check the URL or use the navigation links below to go back to our site.</p>
    `;
    const navLinks = `
      <a href="/home">Home</a>
      <a href="/blog">Blog</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    `;
    res.writeHead(404);
    res.end(renderPage('Page Not Found', '404 - Page Not Found', content, navLinks));
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Press Ctrl+C to stop the server`);
});
