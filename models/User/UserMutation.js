// GraphQL
import {
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLID,
	GraphQLNonNull
} from 'graphql';

import UserType from './UserType.js';
import User from './UserModel.js';

let UserMutation = {
	addUser: {
		type: UserType,
		description: 'Add a new user to list',
		args: {
			name: {
				type: new GraphQLNonNull(GraphQLString),
				description: 'New user\'s name'
			},
			age: {
				type: new GraphQLNonNull(GraphQLInt),
				description: 'New user\s age'
			},
			shoppingList: {
				type: new GraphQLNonNull(new GraphQLList(GraphQLID)),
				description: 'New user\s shopping list'
			}
		},
		resolve: (root, { name, age, shoppingList }) => {
			let newUser = new User();
			newUser.name = name;
			newUser.age = age;
			newUser.shoppingList = shoppingList;
			return newUser.save();
		}
	},
	deleteUser: {
		type: UserType,
		description: 'Delete a user from list by id',
		args: {
			id: {
				type: GraphQLID,
				description: 'User Id to delete'
			}
		},
		resolve: (root, { id }) => {
			return User.findByIdAndRemove(id);
		}
	}
};


export default UserMutation;