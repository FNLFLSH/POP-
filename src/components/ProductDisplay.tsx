import React, { useState } from 'react';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface Product {
  id: string;
  title: string;
  price: string;
  image?: string;
}

interface ProductDisplayProps {
  products: Product[];
  onProductSelect: (product: Product) => void;
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({ products, onProductSelect }) => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <group>
      {products.map((product, index) => (
        <group
          key={product.id}
          position={[index * 2 - (products.length - 1), 0, 0]}
          onPointerOver={() => setHoveredProduct(product.id)}
          onPointerOut={() => setHoveredProduct(null)}
          onClick={() => onProductSelect(product)}
        >
          {/* Product display stand */}
          <mesh position={[0, -0.5, 0]}>
            <cylinderGeometry args={[0.5, 0.5, 1, 32]} />
            <meshStandardMaterial color="#95A5A6" />
          </mesh>

          {/* Product box */}
          <mesh
            position={[0, 0.5, 0]}
            scale={hoveredProduct === product.id ? 1.1 : 1}
          >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color={hoveredProduct === product.id ? '#3498DB' : '#2980B9'}
            />
          </mesh>

          {/* Product title */}
          <Text
            position={[0, 1.5, 0]}
            fontSize={0.2}
            color="#2C3E50"
            anchorX="center"
            anchorY="middle"
          >
            {product.title}
          </Text>

          {/* Product price */}
          <Text
            position={[0, 1.2, 0]}
            fontSize={0.15}
            color="#27AE60"
            anchorX="center"
            anchorY="middle"
          >
            ${product.price}
          </Text>
        </group>
      ))}
    </group>
  );
};

export default ProductDisplay; 