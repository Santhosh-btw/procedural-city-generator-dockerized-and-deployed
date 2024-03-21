const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve index.html as the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve three.js library
app.get('/js/three.min.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'three.min.js'));
});

// Serve OrbitControls.js
app.get('/js/OrbitControls.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'OrbitControls.js'));
});

// Serve perlin.js
app.get('/js/perlin.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'perlin.js'));
});

// Serve procedural.city.generator.js
app.get('/js/procedural.city.generator.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js', 'procedural.city.generator.js'));
});

// Serve style.css
app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'style.css'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
