import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useScroll } from 'framer-motion';
import { Text, Float } from '@react-three/drei';

function FloatingText({ position, text }) {
  const { scrollYProgress } = useScroll();
  const textRef = useRef();

  useFrame(() => {
    textRef.current.position.y = position[1] + scrollYProgress.get() * 2;
    textRef.current.rotation.x = scrollYProgress.get() * Math.PI * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text
        ref={textRef}
        position={position}
        fontSize={0.5}
        color="#646cff"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </Float>
  );
}

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <FloatingText position={[0, 0, 0]} text="" />
      </Canvas>
    </div>
  );
}