import fs from 'fs';
import path from 'path';
/* //Day 39

const sum = (num1,num2)=>{
    return num1 +num2
}
//for run in cmd line (node index.js)
// console.log(sum(5,10))

//1. process
//console.log(process)
// console.log(process.argv)

//usage of process.argv
// you can assign values through cmd line
const [, , num1,num2,msg,configPath,content] = process.argv
const add = (n1,n2)=>{
    return n1 +n2
}
console.log(add(+num1,+num2))

const welcome = (message) =>{
    console.log(`Hi ${message} welocome to Node JS`)
}
welcome(msg)

//2. fs
const fs = require("fs")
console.log(fs)
//to read a content from another path
//configPath from process.argv
fs.readFile(configPath,"utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
        console.log("file read successfully")
    }
})

//to write a content to another path
//content from process.argv
fs.writeFile("./writeText.txt", content, (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("File written successfully")
    }
})

//to update a content to another path
const newContent = "\nNew Content Added from index"
fs.appendFile("./writeText.txt", newContent, (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("File updated successfully")
    }
})

//to delete 
fs.unlink("./deleteFile.txt", (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("File deleted successfully")
    }
})

//whenever rquired only use; to synchronous process
// read=> fs.readFileSync
// write=> fs.writeFileSync
// update=> fs.appendFileSync
// delete => fs.unlinkSync

//to find how many directory there;
fs.readdir("./",(err,data)=>{
    console.log("Directory ", data)
})
//--------------------------------------------------------------------------------------
//for date,time
const time = Date.now()
console.log(time)
let date = new Date();
let utcDate = date.toUTCString()
console.log("Date ",date)
console.log("utcDate ",utcDate)
let today = date.getDate()
let month = date.getMonth()
let year = date.getFullYear()
console.log("today", today)
console.log("month", month)
console.log("year", year)
//--------------------------------------------------------------------------------------
//os functions
const os = require("os")
console.log("OS Version: ", os.version());
console.log("Free Memory: ", os.freemem());
console.log("Total Memory: ", os.totalmem());
console.log("CPU Details: ", os.cpus()); */

//----------------------------------------------------------------------------------------------
//Express JS:

// const app = express()
// const PORT = process.env.PORT
// app.listen(PORT,()=>console.log(`server started localhost:${PORT}`))

// const express = require('express')


// const fs = require("fs");
// const path = require('path')

/* const currentDir = path.join(__dirname,"express")
//console.log(currentDir)

const secret = "Hey I'm a new express file"

fs.writeFile(`${currentDir}/express.txt`,secret,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file created")
    }
})

app.use(express.static("express")) //midlleware to load this file
app.get("/express",(req,res)=>{
    res.sendFile(`${currentDir}/express.txt`)
}) */

/* const students = [
    {
     "id": "1",
     "name": "Arun",
     "batch": "B42WD",
     "gender": "Male",
     "experience": "2"
    },
    {
     "id": "2",
     "name": "Jayavel",
     "batch": "B42WD",
     "gender": "Male",
     "experience": "3"
    },
    {
     "id": "3",
     "name": "Selva",
     "batch": "B42WD",
     "gender": "Male",
     "experience": "6"
    },
    {
     "id": "4",
     "name": "Priya",
     "batch": "B42WD",
     "gender": "Female",
     "experience": "4"
    },
    {
     "id": "5",
     "name": "Kumaran",
     "batch": "B42WD",
     "gender": "Male",
     "experience": "8"
    },
    {
     "id": "6",
     "name": "Karthika",
     "batch": "B42WD",
     "gender": "Female",
     "experience": "7"
    },
    {
     "id": "7",
     "name": "Vijay",
     "batch": "B42WD",
     "gender": "Male",
     "experience": "4"
    },
    {
     "id": "8",
     "name": "Muthu",
     "batch": "B42WD",
     "gender": "Male",
     "experience": "3"
    }
   ]

app.get('/all/students',  (req, res) => {
  res.send(students)
})

//parameters:
app.get('/students/:id',(req,res)=>{
    const {id} = req.params;
    // console.log(id)
    // console.log(req.params)
    const student = students.find((stud)=>stud.id === id)
    res.send(student)
})

//query params
app.get('/students',(req,res)=>{
    const {gender} = req.query
    console.log(req.query)
    const genderStudents = students.filter((stud)=>stud.gender===gender)
    res.send(genderStudents)
})

//post new data:
app.use(express.json()) //middleware tells to use JSON file

app.post('/students',(req,res)=>{
    const data = {
     id: req.body.id,
     name: req.body.name,
     batch:req.body.batch,
     gender: req.body.gender,
     experience: req.body.experience
    }
    students.push(data)
    res.send(students)
})

//update data(PUT):
app.put('/students/:id',(req,res)=>{
    const {id} = req.params;
    const updateStudents = students.find((stud)=>stud.id===id)
    updateStudents.id= req.body.id,
    updateStudents.name= req.body.name,
    updateStudents.batch=req.body.batch,
    updateStudents.gender= req.body.gender,
    updateStudents.experience= req.body.experience
    res.send(students)
})

//delete data(DELETE):
app.delete('/students/:id',(req,res)=>{
    const {id} = req.params;
    const deleteStudents = students.filter((stud)=>stud.id != id)
    res.send(deleteStudents)
}) */


// ------------------------------------------------------------------------------------

//Connection to MongoDB with NodeJS(local & atlas)
import express from 'express';
import dotenv from 'dotenv'
import { studentsRouter } from './routes/moviesRouter.js';
import cors from 'cors'

//env configuration
dotenv.config()

//for commonjs setup
// import Obj from "mongodb";
// export var ObjectId = Obj.ObjectId

//middlewares
const app = express()
app.use(express.json())
app.use(cors())
// app.use('/movies', movieRouter)
app.use('/students', studentsRouter)

const PORT = process.env.PORT
app.listen(PORT,()=>console.log(`server started localhost:${PORT}`))







