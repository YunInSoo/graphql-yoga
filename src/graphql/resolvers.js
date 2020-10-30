import { getMovies, getMovieTest } from "./db";
const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movieTest: () => getMovieTest(),
  },
};
export { resolvers };
