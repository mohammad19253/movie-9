const express = require('express');
const { where } = require('sequelize');
const db = require('../../models/index')
const Movies =db.movies
const router = express.Router();
router.get('/', (req, res)  =>{  
  
   Movies.findAll().then(movies=>{
    res.send({data:movies})
   });
 })
 router.post('/', (req, res)  =>{  
  const {isArchive, id} = req.body
  Movies.update({isArchive:isArchive},{where:{movie_id:id}})
      .then(result=>{
        res.send({message:"movie status updated"})
      })
      .catch((e)=>{
        console.log('error',e)
        res.send({message:"movie status updating failed"})
      })
})
module.exports =  router