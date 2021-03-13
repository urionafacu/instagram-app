import React, { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ThemeProvider from 'theme/ThemeProvider';

const queryClient = new QueryClient();

const Providers: FC = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Providers;