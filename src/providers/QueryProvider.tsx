import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

export const QueryProvider: React.FC = ({ children }) => (
  <QueryClientProvider client={client}>{children}</QueryClientProvider>
);
