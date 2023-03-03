import express from "express";
import { deleteMovies, getMoviesbyParams, getMoviesbyQuery, postMoviesMany, postMoviesOne, putMovies } from "../controllers/movieControllers.js";
const router = express.Router();
  
//GET using query
router.get('/', async (req, res) => {
    try {
      const movies = await getMoviesbyQuery(req)
      if(movies.length===0) return res.status(404).send("No Content")
      res.status(200).send(movies)
    } catch (error) {
      console.log(error)
      res.status(500).send("Internal Server Error")
    }
  })

//GET using params
router.get('/:id', async (req,res)=>{
    const {id} = req.params;
    try {
      const movies = await getMoviesbyParams(id)
      if(!movies) return res.status(400).send("User not found")
      res.status(200).send(movies)
    } catch (error) {
      console.log(error)
      res.status(500).send("Internal Server Error")
    }
   
})

//POST method(add many):
router.post('/many', async (req, res) => {
    const newData = req.body;
    try {
      const newmovie = await postMoviesMany(newData)
      if(!newmovie) return res.status(400).send("content not available")
      res.status(200).send(newmovie)
    } catch (error) {
      console.log(error)
      res.status(500).send("Internal Server Error")
    }

  }) 

//POST method(add one):
router.post('/', async (req, res) => {
    const newData = req.body;
    try {
      const newmovie = await postMoviesOne(newData)
      if(!newmovie) return res.status(400).send("content not available")
      res.status(200).send(newmovie)
    } catch (error) {
      console.log(error)
      res.status(500).send("Internal Server Error")
    }
  }) 

//PUT method(update):
router.put('/:id', async (req,res)=>{
    const {id} = req.params;
    const updateData = req.body;
    try {
      const resultUpdate = await putMovies(id,updateData)
      if(!updateData) return res.status(400).send("content cannot be updated")
      res.status(200).send(resultUpdate)
    } catch (error) {
      console.log(error)
      res.status(500).send("Internal Server Error")
    }
})

//DELETE method(delete):
router.delete('/:id', async (req,res)=>{
  try {
    const {id} = req.params;
    const resultDelete = await deleteMovies(id)
    res.status(200).send(resultDelete)
  } catch (error) {
    console.log(error)
    res.status(500).send("Internal Server Error") 
  }

})

export const studentsRouter = router