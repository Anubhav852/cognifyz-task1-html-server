const express = require('express');
const app = express();
const path = require('path');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// GET - Show the form
app.get('/', (req, res) => {
  res.render('index', { title: 'User Registration Form' });
});

// POST - Handle form submission
app.post('/submit', (req, res) => {
  const { name, email, phone, message } = req.body;
  res.render('result', { name, email, phone, message });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});