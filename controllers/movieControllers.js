import { client } from "../db.js"
import { ObjectId } from "../db.js";

export const getMoviesbyQuery = (req) => {
    return client.db('IMDB')
    .collection('Students')
    .find(req.query)
    .toArray()
}
export const getMoviesbyParams = (id) => {
    return client.db('IMDB')
    .collection('Students')
    .findOne({_id : new ObjectId(id)})
}
export const postMoviesMany = (newData) => {
    return client.db('IMDB')
    .collection('Students')
    .insertMany(newData)
}
export const postMoviesOne = (newData) => {
    return client.db('IMDB')
    .collection('Students')
    .insertOne(newData)
}
export const putMovies = (id,updateData) => {
    return client.db('IMDB')
    .collection('Students')
    .updateOne({_id: new ObjectId(id)},{$set : updateData})
}
export const deleteMovies = (id) => {
    return client.db('IMDB')
    .collection('Students')
    .deleteOne({_id: new ObjectId(id)})
}


