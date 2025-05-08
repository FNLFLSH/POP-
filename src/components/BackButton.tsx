import React from 'react';
import { useNavigate } from 'react-router-dom';

export const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        position: 'fixed',
        top: '1.5rem',
        left: '1.5rem',
        background: 'var(--color-primary)',
        color: 'white',
        padding: '0.7rem 1.2rem',
        borderRadius: 'var(--border-radius-medium)',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1rem',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        boxShadow: 'var(--shadow-medium)',
        transition: 'all 0.3s ease',
        zIndex: 1000
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateX(-3px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-large)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateX(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
      }}
    >
      ← Back
    </button>
  );
}; 