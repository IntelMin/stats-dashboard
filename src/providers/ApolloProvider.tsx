import {
  ApolloClient,
  ApolloProvider as AP,
  InMemoryCache,
} from '@apollo/client';
import { config } from '../config';

const client = new ApolloClient({
  uri: config.graphAPIUrl,
  connectToDevTools: true,
  cache: new InMemoryCache(),
});

export const ApolloProvider: React.FC = ({ children }) => {
  return <AP client={client}>{children}</AP>;
};
