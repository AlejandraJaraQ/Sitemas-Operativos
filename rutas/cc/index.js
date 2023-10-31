const express = require('express'); 

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('conociendo NodeJS');
});


app.listen(port, () => {
  console.log(`Se esta ejecutando sobre el puerto${port}`);
});