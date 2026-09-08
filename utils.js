// HTML Utility Functions

function getStylesheet() {
  return `
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
      .error {
        color: #d32f2f;
      }
    </style>
  `;
}

function getNavigation() {
  return `
    <a href="/home">Home</a>
    <a href="/blog">Blog</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  `;
}

function renderPage(title, heading, content) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      ${getStylesheet()}
    </head>
    <body>
      <div class="container">
        <h1>${heading}</h1>
        ${content}
        <nav>
          ${getNavigation()}
        </nav>
      </div>
    </body>
    </html>
  `;
}

module.exports = {
  renderPage,
  getStylesheet,
  getNavigation
};
