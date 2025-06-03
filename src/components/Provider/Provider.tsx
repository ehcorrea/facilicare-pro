import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@emotion/react';

import { THEME } from '@/constants/theme';

type ProviderProps = {
  children: React.ReactElement;
  customQueryClient?: QueryClient;
};

const queryClient = new QueryClient();

export function Provider({
  children,
  customQueryClient = queryClient,
}: ProviderProps) {
  return (
    <QueryClientProvider client={customQueryClient}>
      <ThemeProvider theme={THEME}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
}
