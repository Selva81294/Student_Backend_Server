import { client } from "../db.js"
import { ObjectId } from "../db.js";
import jwt from 'jsonwebtoken'

export const addUsers = (userData) => {
    return client.db('IMDB')
    .collection('users')
    .insertOne(userData)
}

export const getUser = (userEmail) =>{
    return client
    .db('IMDB')
    .collection('users')
    .findOne({email: userEmail})
}

export const getAllUsers = () =>{
    return client
    .db('IMDB')
    .collection('users')
    .find()
    .toArray()
}

export const generateToken = (id) =>{
    return jwt.sign({id},process.env.SECERT_KEY,{expiresIn: "30d"})
}