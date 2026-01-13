import express, { Router } from "express";
import postData from "../data/data.js";

const router = express.Router();

// INDEX
router.get("/", (req, res) => {
    res.json(postData);
})
// SHOW
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    // per trovare l'oggetto con id specifico
    const actualPost = postData.find((p) => p.id === id);
    // rispondo con l'oggetto trovato
    res.json(actualPost);
})
// STORE
router.post("/", (req, res) => {
    res.json("aggiungo nuovo post")
})
// UPDATE
router.put("/:id", (req, res) => {
    const id = req.params.id;
    res.json("Ho modificato il post n " + id)
})

// MODIFY
router.patch("/:id", (req, res) => {
    const id = req.params.id;
    res.json("Ho modificato parz. il post n " + id)
})

// DESTROY
router.delete("/:id", (req, res) => {
    const id = req.params.id;
      // per trovare l'oggetto con id specifico
    const actualPost = postData.find((p) => p.id === id);
    
    // rimuovo l'oggetto dall'array
    postData.splice(postData.indexOf(actualPost), 1);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    // rispondo con l'oggetto trovato
    res.json(actualPost)
})

export default router