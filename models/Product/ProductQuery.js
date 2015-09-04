// GraphQL
import {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull
} from 'graphql';

import ProductType from './ProductType.js';
import Product from './ProductModel.js';

let ProductQuery = {
	products: {
		type: new GraphQLList(ProductType),
		descriptions: 'All products info',
		resolve: () => {
			return Product.find();
		}
	},
	product: {
		type: ProductType,
		descriptions: 'Product info by id',
		args: {
			id: {
				type: new GraphQLNonNull(GraphQLString)
			}
		},
		resolve: (root, { id }) => {
			return Product.findById(id);
		}
	}
};


export default ProductQuery;