import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Theme } from '../Theme/Theme';

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
      <Theme>{children}</Theme>
    </QueryClientProvider>
  );
}
