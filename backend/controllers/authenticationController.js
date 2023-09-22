import { StatusCodes } from 'http-status-codes'
import User from '../databaseModels/user.js'
import {BadRequestError, UnAuthenticationError} from '../errors/index.js'
import attachCookie from '../utilities/attachCookie.js'

const register = async (req,res)=>{
    const {name,email,password} = req.body
    if(!name || !email || !password){
        throw new BadRequestError('Please provide all values')
    }
    const userExists = await User.findOne({email})
    if(userExists){
        throw new BadRequestError('Email already in use')
    }
    const user = await User.create({name,email,password})
    const token = user.createJWT()
    attachCookie({res,token})
    res.status(StatusCodes.CREATED).json({user})
}

const login = async(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        throw new BadRequestError('Please provide all values')
    }
    const user = await User.findOne({email}).select('+password')
    if(!user){
        throw new UnAuthenticationError("User doesn't exist")
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect){
        throw new UnAuthenticationError('Incorrect Password')
    }
    const token = user.createJWT()
    attachCookie({res,token})
    user.password = undefined
    res.status(StatusCodes.OK).json({user})
}

export {register,login}