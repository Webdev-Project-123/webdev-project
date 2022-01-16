const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('common'));

app.get('/', (req, res) => {
  res.send('Yo');
});

const PORT = 3000;
app.listen(PORT, console.log(`Express on ${PORT}`));
