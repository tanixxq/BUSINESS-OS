import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import Particles from "./Particles";

const Core = () => {
    const coreRef = useRef();
    const ringRef = useRef();
    const ringRef2 = useRef();
    const ringRef3 = useRef();
    const shardRef = useRef();
    const innerRef = useRef();

    useFrame((state, delta) => {
        if (!coreRef.current) return;

        const time = state.clock.elapsedTime;

        coreRef.current.rotation.x += delta * 0.12;
        coreRef.current.rotation.y += delta * 0.22;
        coreRef.current.position.y = Math.sin(time * 1.2) * 0.08;

        if (innerRef.current) {
            const pulse = 1 + Math.sin(time * 3) * 0.04;
            innerRef.current.scale.set(pulse, pulse, pulse);
        }

        if (ringRef.current) {
            ringRef.current.rotation.x += delta * 0.35;
            ringRef.current.rotation.y += delta * 0.2;
        }

        if (ringRef2.current) {
            ringRef2.current.rotation.x -= delta * 0.25;
            ringRef2.current.rotation.z += delta * 0.3;
        }

        if (ringRef3.current) {
            ringRef3.current.rotation.y += delta * 0.5;
            ringRef3.current.rotation.z -= delta * 0.2;
        }

        if (shardRef.current) {
            shardRef.current.rotation.x += delta * 0.7;
            shardRef.current.rotation.y -= delta * 0.45;
        }
    });

    return (
        <group ref={coreRef}>
            <mesh ref={innerRef}>
                <sphereGeometry args={[0.65, 32, 32]} />
                <meshBasicMaterial
                    color="#38bdf8"
                    transparent
                    opacity={0.22}
                />
            </mesh>

            <mesh>
                <icosahedronGeometry args={[0.85, 2]} />
                <meshBasicMaterial
                    color="#7dd3fc"
                    wireframe
                    transparent
                    opacity={0.45}
                />
            </mesh>

            <mesh>
                <icosahedronGeometry args={[1.05, 2]} />
                <meshStandardMaterial
                    color="#0ea5e9"
                    emissive="#0284c7"
                    emissiveIntensity={1.8}
                    transparent
                    opacity={0.3}
                />
            </mesh>

            <mesh>
                <icosahedronGeometry args={[1.2, 2]} />
                <meshBasicMaterial
                    color="#38bdf8"
                    wireframe
                    transparent
                    opacity={0.7}
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

            <mesh ref={ringRef2} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1.75, 0.015, 16, 100]} />
                <meshBasicMaterial
                    color="#7dd3fc"
                    transparent
                    opacity={0.45}
                />
            </mesh>

            <mesh
                ref={ringRef3}
                rotation={[Math.PI / 3, Math.PI / 5, 0]}
            >
                <torusGeometry args={[1.9, 0.01, 12, 100]} />
                <meshBasicMaterial
                    color="#0ea5e9"
                    transparent
                    opacity={0.35}
                />
            </mesh>

            <group ref={shardRef}>
                <mesh position={[0, 1.45, 0]}>
                    <octahedronGeometry args={[0.08, 0]} />
                    <meshBasicMaterial color="#7dd3fc" />
                </mesh>

                <mesh position={[1.45, 0, 0]}>
                    <octahedronGeometry args={[0.06, 0]} />
                    <meshBasicMaterial color="#38bdf8" />
                </mesh>

                <mesh position={[0, -1.45, 0]}>
                    <octahedronGeometry args={[0.07, 0]} />
                    <meshBasicMaterial color="#7dd3fc" />
                </mesh>

                <mesh position={[-1.45, 0, 0]}>
                    <octahedronGeometry args={[0.06, 0]} />
                    <meshBasicMaterial color="#38bdf8" />
                </mesh>
            </group>
        </group>
    );
};

const Node = ({ position, label, value }) => {
    const ref = useRef();
    const meshRef = useRef();
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        if (!ref.current || !meshRef.current) return;

        const time = state.clock.elapsedTime;
        const targetScale = hovered ? 1.35 : 1;

        meshRef.current.scale.lerp(
            new THREE.Vector3(
                targetScale,
                targetScale,
                targetScale
            ),
            0.08
        );

        ref.current.position.y =
            position[1] +
            Math.sin(
                time * 1.5 +
                position[0]
            ) * 0.08;
    });

    return (
        <group ref={ref} position={position}>
            <mesh
                ref={meshRef}
                onPointerOver={(event) => {
                    event.stopPropagation();
                    setHovered(true);
                    document.body.style.cursor = "pointer";
                }}
                onPointerOut={() => {
                    setHovered(false);
                    document.body.style.cursor = "default";
                }}
            >
                <sphereGeometry args={[0.22, 32, 32]} />

                <meshStandardMaterial
                    color={
                        hovered
                            ? "#7dd3fc"
                            : "#ffffff"
                    }
                    emissive="#38bdf8"
                    emissiveIntensity={
                        hovered ? 5 : 2
                    }
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

            {hovered && (
                <Text
                    position={[0, 0.55, 0]}
                    fontSize={0.16}
                    color="#7dd3fc"
                    anchorX="center"
                    anchorY="middle"
                >
                    {value}
                </Text>
            )}
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

            <Particles />

            <Core />

            <Node
                position={[0, 2, 0]}
                label="CLIENTS"
                value="128 ACTIVE"
            />

            <Node
                position={[2, 0, 0]}
                label="PROJECTS"
                value="24 ACTIVE"
            />

            <Node
                position={[0, -2, 0]}
                label="TASKS"
                value="87% COMPLETE"
            />

            <Node
                position={[-2, 0, 0]}
                label="INVOICES"
                value="₹1.24L PENDING"
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