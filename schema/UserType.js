import {
	GraphQLObjectType,
	GraphQLList,
	GraphQLString,
	GraphQLInt
} from 'graphql';

let UserType = new GraphQLObjectType({
	name: 'User',
	description: 'A user',
	fields: () => ({
		name: {
			type: GraphQLString,
			description: 'user name'
		},
		age: {
			type: GraphQLInt,
			description: 'user age'
		},
		friends: {
			type: new GraphQLList(UserType),
			description: 'Lists of user\'s friend'
		}
	})
});

export default UserType;
