import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, PresentationControls } from '@react-three/drei';
import { Avatar3D } from '../components/Avatar3D';
import { BackButton } from '../components/BackButton';

// 3D Store Counter Component
const StoreCounter = () => {
  return (
    <group>
      {/* Main counter top */}
      <mesh position={[0, -0.5, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[6, 0.5, 1.2]} />
        <meshStandardMaterial color="#FF6B6B" />
      </mesh>
      
      {/* Counter front panel */}
      <mesh position={[0, -1.25, 0.6]} rotation={[0, 0, 0]}>
        <boxGeometry args={[6, 1.5, 0.1]} />
        <meshStandardMaterial color="#FF5252" />
      </mesh>
      
      {/* Counter back panel */}
      <mesh position={[0, -1.25, -0.6]} rotation={[0, 0, 0]}>
        <boxGeometry args={[6, 1.5, 0.1]} />
        <meshStandardMaterial color="#FF5252" />
      </mesh>
    </group>
  );
};

// 3D Display Shelves Component
const DisplayShelves = () => {
  return (
    <group position={[0, 0, -2]}>
      {/* Back wall shelves */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[6, 0.2, 0.5]} />
        <meshStandardMaterial color="#4ECDC4" />
      </mesh>
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[6, 0.2, 0.5]} />
        <meshStandardMaterial color="#4ECDC4" />
      </mesh>
      <mesh position={[0, 3, 0]}>
        <boxGeometry args={[6, 0.2, 0.5]} />
        <meshStandardMaterial color="#4ECDC4" />
      </mesh>
    </group>
  );
};

// 3D Product Display Area
const ProductDisplayArea = () => {
  return (
    <group position={[0, 0, -1]}>
      {/* Display platforms */}
      <mesh position={[-2, 0, 0]}>
        <boxGeometry args={[1, 0.1, 1]} />
        <meshStandardMaterial color="#FFE66D" />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 0.1, 1]} />
        <meshStandardMaterial color="#FFE66D" />
      </mesh>
      <mesh position={[2, 0, 0]}>
        <boxGeometry args={[1, 0.1, 1]} />
        <meshStandardMaterial color="#FFE66D" />
      </mesh>
    </group>
  );
};

const MyStore: React.FC = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <BackButton />
      
      {/* 3D Store Scene */}
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <PresentationControls
            global
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            
            {/* Store Elements */}
            <StoreCounter />
            <DisplayShelves />
            <ProductDisplayArea />
            
            {/* Store Owner Avatar - positioned behind counter */}
            <group position={[0, 0, -1]}>
              <Avatar3D />
            </group>
          </PresentationControls>
        </Suspense>
        
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
        <Environment preset="city" />
      </Canvas>

      {/* Store Info Button and Overlay */}
      <div style={{
        position: 'absolute',
        top: '80px',
        left: '20px',
        zIndex: 1000
      }}>
        <button
          onClick={() => setShowInfo(!showInfo)}
          style={{
            background: '#FF6B6B',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.background = '#FF5252'}
          onMouseOut={(e) => e.currentTarget.style.background = '#FF6B6B'}
        >
          My Store Info
        </button>

        {showInfo && (
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            marginTop: '10px',
            maxWidth: '300px',
            animation: 'slideDown 0.3s ease-out'
          }}>
            <h2 style={{ color: '#FF6B6B', marginBottom: '10px' }}>My Store</h2>
            <p style={{ color: '#333', marginBottom: '15px' }}>Welcome to your personalized store!</p>
            <p style={{ color: '#666', fontSize: '0.9em' }}>
              Use the mouse to navigate around your store:
              <br />• Left click + drag to rotate
              <br />• Right click + drag to pan
              <br />• Scroll to zoom
            </p>
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default MyStore; 