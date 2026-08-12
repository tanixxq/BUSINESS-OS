import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import Particles from "./Particles";

const Core = () => {
    const coreRef = useRef();
    const ringRef = useRef();
    const ringRef2 = useRef();

    useFrame((state, delta) => {
        if (!coreRef.current) return;

        const time = state.clock.elapsedTime;

        coreRef.current.rotation.x += delta * 0.15;
        coreRef.current.rotation.y += delta * 0.25;

        coreRef.current.position.y =
            Math.sin(time * 1.2) * 0.08;

        if (ringRef.current) {
            ringRef.current.rotation.x += delta * 0.35;
            ringRef.current.rotation.y += delta * 0.2;
        }

        if (ringRef2.current) {
            ringRef2.current.rotation.x -= delta * 0.25;
            ringRef2.current.rotation.z += delta * 0.3;
        }
    });

    return (
        <group ref={coreRef}>
            <mesh>
                <icosahedronGeometry args={[1.05, 2]} />

                <meshStandardMaterial
                    color="#0ea5e9"
                    emissive="#0284c7"
                    emissiveIntensity={1.5}
                    transparent
                    opacity={0.35}
                />
            </mesh>

            <mesh>
                <icosahedronGeometry args={[1.2, 2]} />

                <meshStandardMaterial
                    color="#38bdf8"
                    wireframe
                    transparent
                    opacity={0.75}
                />
            </mesh>

            <mesh ref={ringRef}>
                <torusGeometry args={[1.55, 0.025, 16, 100]} />

                <meshBasicMaterial
                    color="#38bdf8"
                    transparent
                    opacity={0.7}
                />
            </mesh>

            <mesh
                ref={ringRef2}
                rotation={[Math.PI / 2, 0, 0]}
            >
                <torusGeometry args={[1.75, 0.015, 16, 100]} />

                <meshBasicMaterial
                    color="#7dd3fc"
                    transparent
                    opacity={0.45}
                />
            </mesh>
        </group>
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
    const ref = useRef();

    const startVector = new THREE.Vector3(...start);
    const endVector = new THREE.Vector3(...end);

    const direction = new THREE.Vector3()
        .subVectors(endVector, startVector);

    useFrame((state) => {
        if (!ref.current) return;

        const time =
            (state.clock.elapsedTime * 0.4) % 1;

        ref.current.position.x =
            startVector.x +
            direction.x * time;

        ref.current.position.y =
            startVector.y +
            direction.y * time;

        ref.current.position.z =
            startVector.z +
            direction.z * time;
    });

    return (
        <group>
            <line>
                <bufferGeometry
                    attach="geometry"
                    onUpdate={(geometry) => {
                        geometry.setFromPoints([
                            startVector,
                            endVector
                        ]);
                    }}
                />

                <lineBasicMaterial
                    color="#38bdf8"
                    transparent
                    opacity={0.25}
                />
            </line>

            <mesh ref={ref}>
                <sphereGeometry
                    args={[0.055, 12, 12]}
                />

                <meshBasicMaterial
                    color="#7dd3fc"
                />
            </mesh>
        </group>
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
        <div className="h-[500px] w-full">
            <Canvas
                camera={{
                    position: [0, 0, 6],
                    fov: 45
                }}
            >
                <Particles />

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