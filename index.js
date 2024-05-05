const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Succes pakai nodemon" });
});

app.get("/users", (req, res) => {
  return res.send("Daftar users");
});


app.listen(3000, () => {
	console.log("Procces running at port 3000")
})