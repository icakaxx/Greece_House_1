"use client";

import { ReactNode, useEffect, useState } from 'react';
import { LanguageProvider } from './LanguageProvider';

interface ClientLanguageProviderProps {
  children: ReactNode;
}

export function ClientLanguageProvider({ children }: ClientLanguageProviderProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Return children without LanguageProvider during SSR
    return <>{children}</>;
  }

  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
}