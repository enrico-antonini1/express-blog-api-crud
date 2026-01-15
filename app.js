import express from "express";
import postRouter from "./routers/post.js";
import routeNotFound from "./middlewares/routeNotFound.js";
import handleError from "./middlewares/handleError.js";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json())

// rotta di prova
app.get("/", (req, res) => {
  res.send("Questa è una prova");
});


app.use("/post", postRouter);

app.use(routeNotFound)

app.use(handleError)

app.listen(port, () => {
  console.log(`In ascolto alla porta ${port}`);
});
