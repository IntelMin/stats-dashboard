import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from './ApolloProvider';
import { QueryProvider } from './QueryProvider';
import { SnackbarProvider } from 'notistack';
import { ModalPresenter } from './ModalPresenter';
export const Providers: React.FC = ({ children }) => {
  return (
    <BrowserRouter>
      <SnackbarProvider
        maxSnack={2}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        hideIconVariant
      >
        {/* <AccountProvider> */}
          <ApolloProvider>
            <QueryProvider>
              {/* <Web3APIProvider>
                <TransactionProvider> */}
                  <ModalPresenter>{children}</ModalPresenter>
                {/* </TransactionProvider>
              </Web3APIProvider> */}
            </QueryProvider>
          </ApolloProvider>
        {/* </AccountProvider> */}
      </SnackbarProvider>
    </BrowserRouter>
  );
};
