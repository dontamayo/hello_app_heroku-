const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello DOn');
});

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});

// eslint-disable-next-line no-console
