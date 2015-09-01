import {
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLInt
} from 'graphql';

let count = 0;

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'RootQueryType',
		fields: {
			count: {
				type: GraphQLInt,
				description: 'The count!',
				resolve: () => {
					return count;
				}
			}
		}
	}),
	mutation: new GraphQLObjectType({
		name: 'RootMutationType',
		fields: {
			updateCount: {
				type: GraphQLInt,
				description: 'Update the count',
				resolve: () => {
					return count++;
				}
			}
		}
	})
});

export default schema;
