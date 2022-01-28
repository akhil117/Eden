const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const publicPath = path.resolve(__dirname,'../../dist/');
const port = process.env.PORT || 9002;

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(express.static(publicPath));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'));
});

const server = app.listen(port, () => {
  console.log(`running in port ${port}`);
});

module.exports = server;

