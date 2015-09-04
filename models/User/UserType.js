import {
	GraphQLObjectType,
	GraphQLList,
	GraphQLString,
	GraphQLInt,
	GraphQLID
} from 'graphql';

import ProductType from '../Product/ProductType.js';

let UserType = new GraphQLObjectType({
	name: 'User',
	description: 'A user',
	fields: () => ({
		_id: {
			type: GraphQLID,
			description: 'user id'
		},
		name: {
			type: GraphQLString,
			description: 'user name'
		},
		age: {
			type: GraphQLInt,
			description: 'user age'
		},
		shoppingList: {
			type: new GraphQLList(ProductType),
			description: 'List of products that user bought'
		}
	})
});

export default UserType;
