import React from 'react';
import { BackButton } from './BackButton';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div style={{
      minHeight: '100vh',
      padding: '1.5rem',
      background: 'var(--color-background)',
      color: 'var(--color-text)',
      position: 'relative'
    }}>
      <BackButton />
      {children}
    </div>
  );
}; 