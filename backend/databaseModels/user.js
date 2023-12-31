import mongoose from 'mongoose'
import validator from 'validator'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const User = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Provide a name'],
        minLength: 2,
        maxLength: 30,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please Provide an email'],
        validate: {
            validator: validator.isEmail,
            message: 'Please provide a valid email'
        },
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please Provide a password'],
        select: false
    }
})

User.pre('save', async function(){
    if(!this.isModified('password')){
        return
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

User.methods.createJWT = function(){
    return jwt.sign({userID : this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME
    })
}

User.methods.comparePassword = async function(candidatePassword){
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
}

export default mongoose.model('User', User)