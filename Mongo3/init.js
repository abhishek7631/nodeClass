const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "neha",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date(),
  },
  {
    from: "neha",
    to: "anjali",
    msg: "hey how are you",
    created_at: new Date(),
  },
  {
    from: "pranav",
    to: "abhishek",
    msg: "hello abhishek",
    created_at: new Date(),
  },
  {
    from: "ayush",
    to: "abhishek",
    msg: "what are you doing bro",
    created_at: new Date(),
  },
  {
    from: "abhishek",
    to: "yogesh",
    msg: "how are your yogesh",
    created_at: new Date(),
  },
  {
    from: "yogesh",
    to: "pranav",
    msg: "when will be conduct our exam?",
    created_at: new Date(),
  },
  {
    from: "himani",
    to: "arya",
    msg: "where are you bro",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
