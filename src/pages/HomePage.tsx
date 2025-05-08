import React, { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Avatar3D } from '../components/Avatar3D';
import ThemeToggle from '../components/ThemeToggle';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const buttonStyle: CSSProperties = {
    padding: '1.2rem',
    fontSize: '1.2rem',
    background: 'var(--color-primary)',
    color: 'var(--color-text)',
    border: 'none',
    borderRadius: 'var(--radius-medium)',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-medium)'
  };

  return (
    <div className="home-container" style={{
      minHeight: '100vh',
      padding: '1.5rem',
      background: 'var(--color-background)',
      color: 'var(--color-text)',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative'
    }}>
      <ThemeToggle />
      
      {/* Left side - 3D Avatar */}
      <div style={{ flex: 1, height: '80vh' }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <Avatar3D />
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
          <Environment preset="city" />
        </Canvas>
      </div>

      {/* Right side - Navigation */}
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1.5rem',
        padding: '2rem',
        background: 'var(--color-surface)',
        borderRadius: 'var(--radius-large)',
        boxShadow: 'var(--shadow-medium)'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          color: 'var(--color-primary)',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          Welcome to POP!
        </h1>
        
        <button
          onClick={() => navigate('/store')}
          style={{
            ...buttonStyle,
            background: 'var(--color-primary)',
            transform: 'perspective(1000px) rotateX(0deg)',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(5deg) translateY(-5px)';
            e.currentTarget.style.boxShadow = 'var(--shadow-large)';
            e.currentTarget.style.background = 'var(--color-primary-dark)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) translateY(0)';
            e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
            e.currentTarget.style.background = 'var(--color-primary)';
          }}
        >
          My Store
        </button>

        <button
          onClick={() => navigate('/popup')}
          style={{
            ...buttonStyle,
            background: 'var(--color-primary)',
            transform: 'perspective(1000px) rotateX(0deg)',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(5deg) translateY(-5px)';
            e.currentTarget.style.boxShadow = 'var(--shadow-large)';
            e.currentTarget.style.background = 'var(--color-primary-dark)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) translateY(0)';
            e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
            e.currentTarget.style.background = 'var(--color-primary)';
          }}
        >
          Virtual Store
        </button>

        <button
          onClick={() => navigate('/join')}
          style={{
            ...buttonStyle,
            background: 'var(--color-primary)',
            transform: 'perspective(1000px) rotateX(0deg)',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(5deg) translateY(-5px)';
            e.currentTarget.style.boxShadow = 'var(--shadow-large)';
            e.currentTarget.style.background = 'var(--color-primary-dark)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) translateY(0)';
            e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
            e.currentTarget.style.background = 'var(--color-primary)';
          }}
        >
          Join POP
        </button>

        <button
          onClick={() => navigate('/customize')}
          style={{
            ...buttonStyle,
            background: 'var(--color-primary)',
            transform: 'perspective(1000px) rotateX(0deg)',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(5deg) translateY(-5px)';
            e.currentTarget.style.boxShadow = 'var(--shadow-large)';
            e.currentTarget.style.background = 'var(--color-primary-dark)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) translateY(0)';
            e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
            e.currentTarget.style.background = 'var(--color-primary)';
          }}
        >
          Customize Avatar
        </button>
      </div>
    </div>
  );
};

export default HomePage; 