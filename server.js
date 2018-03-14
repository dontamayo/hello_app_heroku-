const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {res.send('hello')
});

app.listen(process.env.PORT || 5000, () => {
  //eslint-disable-next-line no-console
  console.log(`Running on ${PORT}`);
});
