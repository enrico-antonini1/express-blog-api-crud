import post from "../assets/post.js";

function index(req,res) {
  res.json(post);
}

function show(req,res) {
    const id = parseInt(req.params.id)
    const actualPost = post.find((p) => p.id === id)
    res.json(actualPost)
}

function store(req,res) {}

function update(req,res) {}

function modify(req,res) {}

function destroy(req,res) {}

export default {
  index,
  show,
  store,
  update,
  modify,
  destroy,
};
