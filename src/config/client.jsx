import { ApolloClient, InMemoryCache } from "@apollo/client";
const backendURL = process.env.NEXT_PUBLIC_WP_BACKEND_URL
export const client = new ApolloClient({
  uri: `${backendURL}/graphql`,
  cache: new InMemoryCache(),
});