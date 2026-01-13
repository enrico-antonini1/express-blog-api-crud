import express from "express";
import postRouter from "./routers/post.js";

const app = express();
const port = 3000;

// rotta di prova
app.get("/", (req, res) => {
  res.send("Questa è una prova");
});

app.use(express.static("public"));
app.use("/post", postRouter);

app.listen(port, () => {
  console.log(`In ascolto alla porta ${port}`);
});
