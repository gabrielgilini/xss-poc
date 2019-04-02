const express = require('express');
const cookieParser = require('cookie-parser');
const app1 = express();
const app2 = express();

app1.use(cookieParser());

app1.get('/', (req, res, next) => {
  const nonce = Math.random() * Math.pow(10, 8);
  console.log('Setting cookie nonce %f', nonce);
  res.cookie('nonce', nonce, { httpOnly: true });
  next();
});

app1.get('/my-nonce', (req, res) => {
  console.log('req.cookies: %o', req.cookies);
  res.send(req.cookies.nonce);
});

app1.use('/', express.static('html'));
app2.use('/', express.static('js'));

app1.listen(3000, () => console.log('app1 up on port 3000'));
app2.listen(3001, () => console.log('app2 up on port 3001'));

