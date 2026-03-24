// app/providers.tsx
'use client';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { wagmiConfig } from '@/app/lib/wagmi';
import { useRef, useEffect } from 'react';
// import { reconnect } from '@wagmi/core';

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  useEffect(() => {
    // wagmi v2 在 SSR 模式下需要在客户端水合后调用 reconnect
    // 以正确初始化 connectors 和恢复之前的连接状态
    // reconnect(wagmiConfig);
  }, []);

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClientRef.current}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}