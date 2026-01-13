import post from "../assets/post.js";

function index(req, res) {
  res.json(post);
}

function show(req, res) {
  const id = parseInt(req.params.id);
  const actualPost = post.find((p) => p.id === id);
  res.json(actualPost);
}

function store(req, res) {
  const data = req.body;

  const newId = post[post.length - 1].id + 1;

  const newPost = {
    id: newId,
    ...data,
  };

  post.push(newPost);
  res.status(201);
  res.json(newPost);
}

function update(req, res) {
  const id = parseInt(req.params.id);
  const actualPost = post.find((p) => p.id === id);
  const data = req.body;

  actualPost.titolo = data.titolo;
  actualPost.contenuto = data.contenuto;
  actualPost.immagine = data.immagine;
  actualPost.tags = data.tags;

  res.json(actualPost)
}

function modify(req, res) {}

function destroy(req, res) {
  const id = parseInt(req.params.id);
  const actualPost = post.find((p) => p.id === id);
}

export default {
  index,
  show,
  store,
  update,
  modify,
  destroy,
};
