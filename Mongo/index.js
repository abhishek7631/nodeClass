const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// const User = mongoose.model("User", userSchema);

// User.insertMany([
//   { name: "tony", email: "tonay@gmail.com", age: 50 },
//   { name: "bruce", email: "bruce@gmail.com", age: 47 },
//   { name: "peter", email: "peter@gmail.com", age: 30 },
// ]).then((data) => {
//   console.log(data);
// });

// const user1 = new User({ name: "Abhishek", email: "abhi@gmail.com", age: 23 });

// user1.save();
