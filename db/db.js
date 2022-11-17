// connect to database
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Sequelize } = require('sequelize');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(
  `${process.env.DB_NAME}`,
  `${process.env.DB_USER}`,
  `${process.env.DB_PASSWORD}`,
  {
    host: '192.168.0.111',
    dialect: 'mysql',
    pool: { max: 5, min: 0, idle: 10000 },
    logging: false,
    timezone: '+06:00',
  //    host: "localhost",
  //   dialect: "mysql",
  //   pool: { max: 5, min: 0, idle: 10000 },
  //   logging: false,
  //   timezone: "+06:00",
  },
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.log('Error:', error.message);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;