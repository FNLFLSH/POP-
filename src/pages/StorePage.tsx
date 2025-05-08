import React from 'react';
import { PageLayout } from '../components/PageLayout';

export const StorePage: React.FC = () => {
  return (
    <PageLayout>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '4rem'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          color: 'var(--color-primary)',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          My Store
        </h1>
        {/* Store content will go here */}
      </div>
    </PageLayout>
  );
}; 