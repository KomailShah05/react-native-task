import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";
import { useState } from "react";

const AppQueryProvider = ({ children }: PropsWithChildren) => {
  const [clientQuery] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 2,
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={clientQuery}>{children}</QueryClientProvider>
  );
};

export default AppQueryProvider;
