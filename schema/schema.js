// GraphQL
import {
	GraphQLObjectType,
	GraphQLSchema
} from 'graphql';

// Query & Mutations
import UserQuery from '../models/User/UserQuery.js';
import UserMutation from '../models/User/UserMutation.js';
import ProductQuery from '../models/Product/ProductQuery.js';

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'RootQueryType',
		fields: {
			users: UserQuery.users,
			user: UserQuery.user,
			products: ProductQuery.products,
			product: ProductQuery.product
		}
	}),
	mutation: new GraphQLObjectType({
		name: 'RootMutationType',
		fields: {
			addUser: UserMutation.addUser,
			deleteUser: UserMutation.deleteUser
		}
	})
});

export default schema;
