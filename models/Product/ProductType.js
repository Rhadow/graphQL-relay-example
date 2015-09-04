import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLList,
	GraphQLID
} from 'graphql';

let ProductType = new GraphQLObjectType({
	name: 'Product',
	description: 'A product',
	fields: () => ({
		_id: {
			type: GraphQLID,
			description: 'product id'
		},
		name: {
			type: GraphQLString,
			description: 'product name'
		},
		price: {
			type: GraphQLInt,
			description: 'product\'s price'
		},
		categories: {
			type: new GraphQLList(GraphQLString),
			description: 'Categories that product belong to'
		}
	})
});

export default ProductType;
