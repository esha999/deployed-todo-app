const Pool = require("pg").Pool;

require("dotenv").config(); // to hold sensitive info

// console.log("Loaded DB User:", process.env.USERNAME);
// console.log("Loaded DB Password:", process.env.PASSWORD);
// console.log("Loaded DB Host:", process.env.HOST);
// console.log("Loaded DB Port:", process.env.DBPORT);
// console.log("Loaded DB Name:", process.env.DATABASE);

const pool = new Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DBPORT,
  database: process.env.DATABASE,
});

// const pool = new Pool({
//   user: "postgres",
//   password: "123456789",
//   host: "localhost",
//   port: 5432,
//   database: "todoapp",
// });

module.exports = pool;
