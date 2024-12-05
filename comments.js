// create web server

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// run the server
// node comments.js

// open the browser and navigate to the URL
// http://localhost:3000
// You should see the message "Hello World" displayed in the browser

// Now, let's add a new route to the web server
app.get('/comments', (req, res) => {
    res.send('This is the comments page');
});

// Restart the server by pressing Ctrl + C in the terminal to stop the server and run the server again
// Now, navigate to the URL http://localhost:3000/comments
// You should see the message "This is the comments page" displayed in the browser