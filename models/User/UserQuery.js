// GraphQL
import {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull
} from 'graphql';

import UserType from './UserType.js';
import User from './UserModel.js';

let UserQuery = {
	users: {
		type: new GraphQLList(UserType),
		descriptions: 'All users info',
		resolve: () => {
			return User.find();
		}
	},
	user: {
		type: UserType,
		descriptions: 'User info by id',
		args: {
			id: {
				type: new GraphQLNonNull(GraphQLString)
			}
		},
		resolve: (root, { id }) => {
			return User.findById(id);
		}
	}
};


export default UserQuery;