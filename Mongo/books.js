const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
  },
  discount: {
    type: Number,
    default: 0,
  },
});

const book = mongoose.model("book", bookSchema);

book
  .findByIdAndUpdate("670e012d035b5a99ca5a254d", { price: 560 })
  .then((res) => {
    console.log(res);
  });

// let book1 = new book({
//   title: "Gone Girl",
//   price: 399,
// });

// book1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
