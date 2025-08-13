const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up express-ejs-layouts
app.use(expressLayouts);
app.set('layout', 'layout');
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);

// Routes
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Ana Sayfa',
        pageCSS: null 
    });
});

app.get('/about', (req, res) => {
    res.render('about', { 
        title: 'Hakkımda',
        pageCSS: 'about' 
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', { 
        title: 'İletişim',
        pageCSS: 'contact' 
    });
});



// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
}); 