import express from 'express';
const cors = require('cors'); 
const app = express();
app.use(express.json());
app.use(cors());
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

app.post('/post', (req, res) => {
  res.send("o seu email e a sua senha senhor são:" + JSON.stringify(req.body));
});

app.get('/getHelloWorld', (req, res) => {
  res.send('Hello World!');
});