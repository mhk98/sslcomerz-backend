const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');
const cookieParser = require('cookie-parser');
const { notFoundHandler, errorHandler } = require('./middlewares/error');
const bodyParser = require('body-parser');
require('./models');
require('dotenv').config();

// middlewares
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:4000'],
  }),
);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
app.use(cookieParser());
app.use('/api/v1', routes);
app.use(cors());
app.use(express.json());

// parse application/json
// app.use(bodyParser.json());

// port initializing
const port = process.env.PORT || 4000;

// main route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// error handler
app.use([notFoundHandler, errorHandler]);

// listening server
app.listen(port, () =>
  console.log(`Server is listening at http://localhost:${port}`),
);
