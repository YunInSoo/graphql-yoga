import { getMovies, getSuggestions, getMovie, addMovie } from "./db";
const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id),
  },
  Mutation: {
    addMovies: (_, { id }) => addMovie(id),
  },
};
export { resolvers };
