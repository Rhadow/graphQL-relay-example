import {
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLInt,
	GraphQLString,
	GraphQLList,
	GraphQLNonNull
} from 'graphql';

import PokemonType from './pokemonType.js';

import PokemonList from '../FakeData/pokemon.js';

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
			},
			pokemonList: {
				type: new GraphQLList(PokemonType),
				description: 'Pokemon list',
				resolve: () => PokemonList
			},
			pokemon: {
				type: PokemonType,
				description: 'A pokemon',
				args: {
					name: {
						type: new GraphQLNonNull(GraphQLString)
					}
				},
				resolve: (root, { name }) => {
					return PokemonList.filter((pokemon) => pokemon.name === name)[0];
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
			},
			addPokemon: {
				type: PokemonType,
				description: 'Add a new pokemon to list',
				args: {
					name: {
						type: new GraphQLNonNull(GraphQLString),
						description: 'New pokemon\'s name'
					},
					stage: {
						type: new GraphQLNonNull(GraphQLInt),
						description: 'New pokemon\s level'
					}
				},
				resolve: (root, args) => {
					PokemonList.push(args);
					return args;
				}
			},
			removePokemon: {
				type: new GraphQLList(PokemonType),
				description: 'Remove a pokemon by name',
				args: {
					name: {
						type: new GraphQLNonNull(GraphQLString)
					}
				},
				resolve: (root, { name }) => {
					return PokemonList.filter((pokemon) => pokemon.name !== name);
				}
			}
		}
	})
});

export default schema;
