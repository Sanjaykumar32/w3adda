import { ApolloClient, InMemoryCache } from "@apollo/client";


export const client = new ApolloClient({
  uri: `https://www.w3adda.com/graphql`,
  cache: new InMemoryCache(),
});