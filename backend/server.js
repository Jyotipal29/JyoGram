const express = require("express");
const app = express();

const PORT = 5000;

app.use("/", (req, res) => {
  res.send({ message: "im working" });
});
app.listen(PORT, () => console.log(`listening on ${PORT} port`));
