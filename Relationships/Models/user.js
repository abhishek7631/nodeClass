const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new mongoose.Schema({
  username: String,
  address: [
    {
      _id: false,
      location: String,
      city: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const addUsers = async () => {
  let user1 = new User({
    username: "abhishek",
    address: [
      {
        location: "221B Baker street ",
        city: "London",
      },
    ],
  });
  user1.address.push({ location: "P32 DownTown", city: "London" });
  let result = await user1.save();
  console.log(result);
};

addUsers();
