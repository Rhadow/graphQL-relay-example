// GraphQL
import {
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLInt,
	GraphQLString,
	GraphQLList,
	GraphQLNonNull
} from 'graphql';

// Custom Types
import UserType from './UserType.js';

// Mongoose schema
import User from './UserModel.js';

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'RootQueryType',
		fields: {
			users: {
				type: new GraphQLList(UserType),
				descriptions: 'All users info',
				resolve: () => {
					return User.find();
				}
			},
			user: {
				type: UserType,
				descriptions: 'User info by name',
				args: {
					name: {
						type: new GraphQLNonNull(GraphQLString)
					}
				},
				resolve: (root, { name }) => {
					return User.findOne({
						'name': name
					});
				}
			}
		}
	}),
	mutation: new GraphQLObjectType({
		name: 'RootMutationType',
		fields: {
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
					friends: {
						type: new GraphQLNonNull(new GraphQLList(GraphQLInt)),
						description: 'New user\s age'
					}
				},
				resolve: (root, { name, age, friends }) => {
					let newUser = new User();
					newUser.name = name;
					newUser.age = age;
					newUser.friends = friends;
					return newUser.save();
				}
			}
		}
	})
});

export default schema;
