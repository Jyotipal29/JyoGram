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

app.use("/", (req, res) => {
  res.send({ message: "im working" });
});

app.post('/token', (req, res)=>{
  if(req.header('MY-API-KEY') && req.header('MY-API-KEY') === "3437534sdfasfSDF"){
    const token = Math.random(999999999999);
    res.status(200).send(token);
  } else {
    res.status(400).send('no-api-key')
  }
})
app.listen(PORT, () => console.log(`listening on ${PORT} port`));
