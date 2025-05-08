import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface StorefrontModelProps {
  position: [number, number, number];
  scale?: [number, number, number];
  color?: string;
}

const StorefrontModel: React.FC<StorefrontModelProps> = ({
  position,
  scale = [1, 1, 1],
  color = '#FF6B6B'
}) => {
  const groupRef = useRef<THREE.Group>();

  // Basic storefront structure
  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Store base */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[4, 1, 4]} />
        <meshStandardMaterial color="#4ECDC4" />
      </mesh>

      {/* Store walls */}
      <mesh position={[0, 1, -2]}>
        <boxGeometry args={[4, 3, 0.2]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Store roof */}
      <mesh position={[0, 2.5, 0]}>
        <boxGeometry args={[4.2, 0.2, 4.2]} />
        <meshStandardMaterial color="#2C3E50" />
      </mesh>

      {/* Store sign */}
      <mesh position={[0, 2, -2]}>
        <boxGeometry args={[2, 0.5, 0.1]} />
        <meshStandardMaterial color="#F1C40F" />
      </mesh>

      {/* Display windows */}
      <mesh position={[0, 0.5, -1.9]}>
        <boxGeometry args={[3, 2, 0.1]} />
        <meshStandardMaterial color="#FFFFFF" transparent opacity={0.3} />
      </mesh>

      {/* Entrance */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 2, 0.1]} />
        <meshStandardMaterial color="#34495E" />
      </mesh>
    </group>
  );
};

export default StorefrontModel; 