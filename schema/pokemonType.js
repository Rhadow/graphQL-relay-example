import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt
} from 'graphql';

let pokemonType = new GraphQLObjectType({
	name: 'Pokemon',
	description: 'A Pokemon',
	fields: () => ({
		name: {
			type: GraphQLString,
			description: 'Name of Pokemon'
		},
		type: {
			type: GraphQLString,
			description: 'Type of Pokemon'
		},
		stage: {
			type: GraphQLInt,
			description: 'Stage of Pokemon'
		},
		caught: {
			type: GraphQLInt,
			description: 'Number of this type of Pokemon caught'
		},
		species: {
			type: GraphQLString,
			description: 'Species of Pokemon'
		}
	})
});

export default pokemonType;
