require('@babel/register');
require('dotenv').config();

const express = require('express');

const config = require('./config/serverConfig');

const indexRouter = require('./routes/index.routes');

const app = express();

const PORT = process.env.PORT || 4000;

config(app);

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`This server is running on port ${PORT}`);
});
