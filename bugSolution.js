const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might reject
  new Promise((resolve, reject) => {
    // Simulate a failure condition
    if (Math.random() < 0.5) {
      reject(new Error('Something went wrong!')
    } else {
      resolve('Hello from Express!');
    }
  })
    .then((message) => {
      res.send(message);
    })
    .catch((error) => {
      console.error('Error handling request:', error);
      res.status(500).send('Internal Server Error');
    });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});