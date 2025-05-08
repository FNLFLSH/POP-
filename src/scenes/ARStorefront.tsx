import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

interface Store {
  name: string;
  products: Array<{
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
  }>;
}

interface ARStorefrontProps {
  store: Store;
}

const ARStorefront: React.FC<ARStorefrontProps> = ({ store }) => {
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
          {store.name}
        </h1>
        
        <div style={{ height: '70vh' }}>
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            <Environment preset="city" />
            {/* 3D store content will go here */}
          </Canvas>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '2rem',
          padding: '2rem 0'
        }}>
          {store.products.map(product => (
            <div key={product.id} style={{
              background: 'var(--color-surface)',
              borderRadius: 'var(--radius-medium)',
              padding: '1.5rem',
              boxShadow: 'var(--shadow-medium)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-large)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
            }}>
              <img 
                src={product.image} 
                alt={product.name}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-small)',
                  marginBottom: '1rem'
                }}
              />
              <h3 style={{
                fontSize: '1.2rem',
                color: 'var(--color-text)',
                marginBottom: '0.5rem'
              }}>{product.name}</h3>
              <p style={{
                color: 'var(--color-text-secondary)',
                marginBottom: '1rem'
              }}>{product.description}</p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{
                  fontSize: '1.2rem',
                  color: 'var(--color-primary)',
                  fontWeight: 'bold'
                }}>${product.price}</span>
                <button style={{
                  background: 'var(--color-primary)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-small)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default ARStorefront; 