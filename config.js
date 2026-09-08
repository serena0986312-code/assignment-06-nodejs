// Server Configuration
module.exports = {
  PORT: 5000,
  HOST: 'localhost',
  
  pages: {
    home: {
      title: 'Home',
      route: '/home',
      heading: 'Welcome to Home Page',
      description: 'Welcome to our website! This is the home page where you can find the latest updates and information about our services.'
    },
    blog: {
      title: 'Blog',
      route: '/blog',
      heading: 'Our Blog',
      description: 'Explore our latest blog posts and articles on various topics including technology, lifestyle, and business.'
    },
    about: {
      title: 'About',
      route: '/about',
      heading: 'About Us',
      description: 'Learn more about who we are and what we do. Our company is dedicated to providing quality services and solutions to our valued clients.'
    },
    contact: {
      title: 'Contact',
      route: '/contact',
      heading: 'Contact Us',
      description: 'Get in touch with us! We\'d love to hear from you and answer any questions you may have.'
    }
  }
};
