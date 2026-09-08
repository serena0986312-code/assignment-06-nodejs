# Assignment 06 - Node.js HTTP Server

A simple HTTP server built with Node.js that serves multiple routes with HTML responses.

## Features

- HTTP Server running on Port 5000
- Multiple routes: Home, Blog, About, Contact
- 404 error handling for invalid routes
- Responsive HTML pages with navigation

## Routes

- `/` or `/home` - Home Page
- `/blog` - Blog Page
- `/about` - About Us Page
- `/contact` - Contact Page
- Any other route returns 404 - Page Not Found

## Installation

```bash
npm install
```

## Running the Server

```bash
npm start
```

The server will start on `http://localhost:5000`

## File Structure

```
assignment-06-nodejs/
├── server.js       # Main server file
├── package.json    # Node.js project configuration
├── .gitignore      # Git ignore file
└── README.md       # This file
```

## Technologies Used

- Node.js
- HTTP Module
- HTML/CSS

## Author

Developer

## License

ISC
