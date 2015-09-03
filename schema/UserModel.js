import mongoose, { Schema } from 'mongoose';

let userSchema = new Schema({
	name: String,
	age: Number,
	friends: []
});

export default mongoose.model('User', userSchema);
