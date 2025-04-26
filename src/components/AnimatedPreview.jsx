import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { OrbitControls, Center, Text3D, Text } from '@react-three/drei';

const RunnerEmoji = ({ position, index }) => {
  const meshRef = useRef();
  const [hover, setHover] = useState(false);
  
  const springs = useSpring({
    scale: hover ? [1.4, 1.4, 1.4] : [1.2, 1.2, 1.2],
    color: hover ? '#646cff' : '#a78bfa',
    glow: hover ? 1 : 0.5,
    config: { mass: 1, tension: 280, friction: 60 }
  });

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y = Math.sin(t * 1.5 + index) * 0.15;
    meshRef.current.rotation.y = Math.sin(t + index) * 0.1;
  });

  return (
    <animated.mesh
      ref={meshRef}
      position={position}
      scale={springs.scale}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <Text
        fontSize={0.5}
        color={springs.color}
        font="/fonts/Inter-Bold.woff"
        anchorX="center"
        anchorY="middle"
        characters="🏃"
      >
        🏃
      </Text>
    </animated.mesh>
  );
};

const ProgressBar = ({ progress = 0.7 }) => {
  const barWidth = 6;
  const barHeight = 0.2;
  const progressRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (progressRef.current) {
      progressRef.current.material.emissiveIntensity = Math.sin(t * 2) * 0.3 + 0.7;
    }
  });
  
  return (
    <group position={[0, -1, 0]}>
      {/* Background bar */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[barWidth, barHeight, 0.1]} />
        <meshStandardMaterial 
          color="#2a2a4a"
          roughness={0.2}
          metalness={0.8}
          emissive="#1a1a2e"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Progress bar */}
      <mesh 
        ref={progressRef}
        position={[-barWidth/2 + (barWidth * progress)/2, 0, 0.05]}
      >
        <boxGeometry args={[barWidth * progress, barHeight, 0.1]} />
        <meshStandardMaterial
          color="#646cff"
          emissive="#646cff"
          emissiveIntensity={1.2}
          roughness={0.1}
          metalness={0.9}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
};

const AnimatedPreview = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading to ensure all 3D elements are ready
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-[400px] relative overflow-hidden rounded-xl"
         style={{
           background: 'linear-gradient(45deg, #1a1a2e 0%, #2a2a4a 100%)',
           boxShadow: '0 0 30px rgba(100, 108, 255, 0.4)'
         }}>
      {!loaded ? (
        <div className="w-full h-full flex items-center justify-center text-white">
          <p className="text-xl font-bold animate-pulse">Loading Preview...</p>
        </div>
      ) : (
        <Canvas camera={{ position: [0, 1, 6], fov: 60 }}>
          <color attach="background" args={['#1a1a2e']} />
          <fog attach="fog" args={['#1a1a2e', 5, 15]} />
          <ambientLight intensity={0.8} />
          <pointLight position={[5, 5, 5]} intensity={2} color="#646cff" />
          <pointLight position={[-5, -5, -5]} intensity={1} color="#a78bfa" />
          
          <Center>
            <RunnerEmoji position={[-2, 0, 0]} index={0} />
            <RunnerEmoji position={[0, 0, 0]} index={1} />
            <RunnerEmoji position={[2, 0, 0]} index={2} />
            <ProgressBar />
          </Center>
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 2.5}
          />
        </Canvas>
      )}
    </div>
  );
};

export default AnimatedPreview;