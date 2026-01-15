 import post from "../assets/post.js"

 export default function checkPostExist(req, res, next) {
     const id = parseInt(req.params.id);
     const actualPost = post.find((p) => p.id === id);

     if (!actualPost) {
         res.status(404);
         return res.json({
             error: 404,
             message: "post not found"
         })
     }
     next()
 }