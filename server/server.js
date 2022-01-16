const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Yo');
});

const PORT = 3000;
app.listen(PORT, console.log(`Express on ${PORT}`));
