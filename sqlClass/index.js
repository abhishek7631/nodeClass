const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "abhi7631@@",
});

let q = "INSERT INTO user (id,username,email,password) VALUES (?,?,?,?)";

try {
  connection.query(q, (err, result) => {
    if (err) throw err;
    console.log(result);
    console.log(result.length);
  });
} catch (err) {
  console.log(err);
}

connection.end();

let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};
