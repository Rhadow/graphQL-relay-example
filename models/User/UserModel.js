import mongoose, { Schema } from 'mongoose';
import Product from '../Product/ProductModel.js';
import GraphQLError from 'graphql';

let userSchema = new Schema({
	name: String,
	age: Number,
	shoppingList: []
});

function denormalizeUser(user) {
	let resultUser = JSON.parse(JSON.stringify(user));
	let detailedShoppingList = resultUser.shoppingList.map(async (productId) => {
		try {
			return await Product.findById(productId);
		} catch(err) {
			return err;
		}
	});
	resultUser.shoppingList = detailedShoppingList;
	return resultUser;
}

userSchema.methods.getDenormalizedUsers = async function() {
	let users;
	try {
		users = await User.find();
	} catch(err) {
		return err;
	}
	return users.map(denormalizeUser);
};

userSchema.methods.getDenormalizedUserById = async function(id) {
	let user;
	try {
		user = await User.findById(id);
	} catch(err) {
		return err;
	}
	return denormalizeUser(user);
};

let User = mongoose.model('User', userSchema);

export default User;
