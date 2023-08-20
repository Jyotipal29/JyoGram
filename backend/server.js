const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");
// connectDB();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
// app.use("/posts", postRoutes);
// app.use("/users", userRoutes);

const PORT = 5500;

app.get("/", (req, res) => {
  res.send({ message: "im working" });
});

app.post('/token', (req, res)=>{
  const name = "jyotipaljyotipal";
  const token = Array.from({ length: 5 }, () => name[Math.floor(Math.random() * name.length)]).join("");
  
    res.status(200).send(token);
})

app.listen(PORT, () => console.log(`listening on ${PORT} port`));
