const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');

// Routes
app.get('/', (req, res) => {
    res.render('construction', { layout: false });
});

app.get('/main', (req, res) => {
    res.render('index', {
        title: 'Berat Can Ulu - Software Developer',
        name: 'Berat Can Ulu',
        role: 'Software Developer',
        description: 'Computer Engineer & Full Stack Developer',


        education: {
            degree: 'Bilgisayar Mühendisliği',
            university: 'Cumhuriyet Üniversitesi',
            year: '2017-2025'
        }
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About - Berat Can Ulu',
        name: 'Berat Can Ulu'
    });
});

app.get('/projects', (req, res) => {
    res.render('projects', {
        title: 'Projects - Berat Can Ulu',
        name: 'Berat Can Ulu',
        projects: [
            {
                title: 'E-Commerce Platform',
                description: 'Full-stack e-commerce application built with Node.js and React',
                technologies: ['Node.js', 'React', 'MongoDB', 'Stripe'],
                github: 'https://github.com/beratcanulu/ecommerce',
                live: 'https://ecommerce-demo.com'
            },
            {
                title: 'Task Management App',
                description: 'Real-time task management application with collaborative features',
                technologies: ['Node.js', 'Socket.io', 'React', 'PostgreSQL'],
                github: 'https://github.com/beratcanulu/taskmanager',
                live: 'https://taskmanager-demo.com'
            },
            {
                title: 'Portfolio Website',
                description: 'Personal portfolio website built with modern web technologies',
                technologies: ['Node.js', 'EJS', 'Tailwind CSS'],
                github: 'https://github.com/beratcanulu/portfolio',
                live: 'https://beratcanulu.com'
            }
        ]
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact - Berat Can Ulu',
        name: 'Berat Can Ulu'
    });
});

// API endpoint for contact form
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    // Here you would typically save to database or send email
    console.log('Contact form submission:', { name, email, message });
    
    res.json({ 
        success: true, 
        message: 'Thank you for your message! I will get back to you soon.' 
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
}); 