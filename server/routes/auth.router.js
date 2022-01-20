import {Router} from "express";
import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import {body, validationResult} from 'express-validator'
import config from "config";
import jwt from 'jsonwebtoken'

const router = new Router()

router.post('/register',
    [
        body('email',"Uncurrent email").isEmail(),
        body('password', "Uncurrent password").isLength({min:3,max:10})
    ],

async (req, res) => {
    try{
        const errorsValidation = validationResult(req)
        if(!errorsValidation.isEmpty()) {
            const {msg} = errorsValidation.errors[0]
            return res.status(400).json({message: `Registration not current: ${msg}`})
        }

        const {email, password} = req.body
        const userAlreadyExist = await User.findOne({email})

        if(userAlreadyExist) {
            return res.status(400).json({message: `User ${email} already exist`})
        }

        const hashPassword = await bcrypt.hash(password, 8)

        const user = new User({email, password: hashPassword})

        await user.save()

        return res.json({message: "User was created"})

    }catch (e) {
        console.log(e)
        return res.send({message: `Server error ${e}`})
    }
})

router.post('/login', async (req,res) => {
    try {
        const {email, password} = req.body
        const currentUser = await User.findOne({email})

        if(!currentUser) {
            return res.status(404).json({message: "User not found"})
        }

        const checkPassword = await bcrypt.compare(password, currentUser.password)
        if(!checkPassword) {
            return res.status(400).json({message: "Wrong password"})
        }

        const token = jwt.sign({id: currentUser.id},config.get("secret-key"), {expiresIn: "1h"})


        return res.json({
            token,
            id: currentUser.id,
            email: currentUser.email
    })



    }catch (e) {
        console.log(e)
        return res.send({message: `Server error ${e}`})
    }
})


export default router
