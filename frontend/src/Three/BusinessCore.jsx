import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const Core = () => {
    const coreRef = useRef();

    useFrame((state, delta) => {
        if (!coreRef.current) return;

        coreRef.current.rotation.x += delta * 0.15;
        coreRef.current.rotation.y += delta * 0.25;

        coreRef.current.position.y =
            Math.sin(state.clock.elapsedTime * 1.2) * 0.08;
    });

    return (
        <mesh ref={coreRef}>
            <icosahedronGeometry args={[1.2, 2]} />
            <meshStandardMaterial
                color="#38bdf8"
                wireframe
                transparent
                opacity={0.8}
            />
        </mesh>
    );
};

const Node = ({ position, label }) => {
    const ref = useRef();

    useFrame((state) => {
        if (!ref.current) return;

        ref.current.position.y =
            position[1] +
            Math.sin(
                state.clock.elapsedTime * 1.5 +
                position[0]
            ) * 0.08;
    });

    return (
        <group ref={ref} position={position}>
            <mesh>
                <sphereGeometry args={[0.22, 24, 24]} />
                <meshStandardMaterial
                    color="#ffffff"
                    emissive="#38bdf8"
                    emissiveIntensity={2}
                />
            </mesh>

            <Text
                position={[0, -0.45, 0]}
                fontSize={0.18}
                color="white"
                anchorX="center"
                anchorY="middle"
            >
                {label}
            </Text>
        </group>
    );
};

const Connection = ({ start, end }) => {
    const points = [
        new THREE.Vector3(...start),
        new THREE.Vector3(...end)
    ];

    const geometry =
        new THREE.BufferGeometry().setFromPoints(points);

    return (
        <line geometry={geometry}>
            <lineBasicMaterial
                color="#38bdf8"
                transparent
                opacity={0.35}
            />
        </line>
    );
};

const BusinessScene = () => {
    return (
        <>
            <pointLight
                position={[3, 3, 3]}
                intensity={20}
                distance={10}
            />

            <pointLight
                position={[-3, -2, -3]}
                intensity={10}
                distance={10}
            />

            <Core />

            <Node
                position={[0, 2, 0]}
                label="CLIENTS"
            />

            <Node
                position={[2, 0, 0]}
                label="PROJECTS"
            />

            <Node
                position={[0, -2, 0]}
                label="TASKS"
            />

            <Node
                position={[-2, 0, 0]}
                label="INVOICES"
            />

            <Connection
                start={[0, 1.7, 0]}
                end={[0, 1, 0]}
            />

            <Connection
                start={[1.7, 0, 0]}
                end={[1, 0, 0]}
            />

            <Connection
                start={[0, -1.7, 0]}
                end={[0, -1, 0]}
            />

            <Connection
                start={[-1.7, 0, 0]}
                end={[-1, 0, 0]}
            />
        </>
    );
};

const BusinessCore = () => {
    return (
        <div className="w-full h-[420px]">
            <Canvas
                camera={{
                    position: [0, 0, 6],
                    fov: 45
                }}
            >
                <BusinessScene />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.3}
                />
            </Canvas>
        </div>
    );
};

export default BusinessCore;