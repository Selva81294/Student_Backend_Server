import express from 'express'
import bcrypt from 'bcrypt'
import { addUsers, generateToken, getAllUsers, getUser } from '../controllers/users.js';

const router = express.Router()

//Signup
router.post('/signup', async(req,res)=>{
    try {
        const userDetails = await req.body;
//encryption
        const salt = await bcrypt.genSalt(10)
        const user = await getUser(userDetails.email);
        if(!user){
            const hashedPassword = await bcrypt.hash(userDetails.password,salt)
            //console.log("hashedPassword:",hashedPassword)
            const hashedUser = {...userDetails,password:hashedPassword}
            const result = await addUsers(hashedUser);
            return res.status(200).json({message: "Successfully Signed-in"})
        }
        res.status(400).json({message: "Given Email Already Exists"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal Server Error"})
    }
})

router.get('/', async (req,res)=>{
    try {
        const result = await getAllUsers();
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal Server Error"})
    }
})

//authentication
//login
router.post('/login', async(req,res)=>{
    try {
        //email authentication
        const user = await getUser(req.body.email)
        if(!user){
            return res.status(404).json({message: "Invalid Authorization"})
        }
        //console.log(user)
        //decrypt & Compare(password authentication)
        const validatePassword = await bcrypt.compare(
            req.body.password, user.password
        )
        //console.log(validatePassword)
        if(!validatePassword){
            return res.status(400).json({message:"Invalid Authorization"})     
        }
        const token = generateToken(user._id)
         res.status(200).json({message: "Successfully logged in",token})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal Server Error"})
    }
})

export const userRouter = router;