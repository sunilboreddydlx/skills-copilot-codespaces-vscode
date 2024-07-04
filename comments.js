// create web server
// npm install express
// npm install body-parser
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

// get all comments
app.get('/comments', (req, res) => {
  fs.readFile('comments.json', (err, data) => {
    if (err) {
      res.status(500).send('Error reading comments.json');
    } else {
      res.send(data);
    }
  });
});

// add a comment
app.post('/comments', (req, res) => {
  fs.readFile('comments.json', (err, data) => {
    if (err) {
      res.status(500).send('Error reading comments.json');
    } else {
      const comments = JSON.parse(data);
      comments.push(req.body);
      fs.writeFile('comments.json', JSON.stringify(comments), (err) => {
        if (err) {
          res.status(500).send('Error writing comments.json');
        } else {
          res.send('Comment added!');
        }
      });
    }
  });
});

// start web server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
