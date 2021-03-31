const mongoose = require('mongoose');
const { Schema } = require('mongoose')

//Building Mongoose models
const HotelSchema = new Schema({
    name: String,
    room: { type: Schema.Types.ObjectId, ref: 'room'}
})
mongoose.model("hotel", HotelSchema)

const RoomSchema = new Schema({
    number: Number,
    available: Boolean,
    roomtype: String, //enum: standard, standard plus, suite,  junior, loft
    extras: String, //enum: baby crip, early check-in, late departure
    user: { type: Schema.Types.ObjectId, ref: 'user' }
})
mongoose.model("room", RoomSchema)

const UserSchema = new Schema({
    email: String,
    password: String,
    firstname: String,
    lastname: String,
    role: String
})
mongoose.model("user", UserSchema)