import mongoose, { Schema } from 'mongoose';

let productSchema = new Schema({
	name: String,
	price: Number,
	categories: []
});

export default mongoose.model('Product', productSchema);
