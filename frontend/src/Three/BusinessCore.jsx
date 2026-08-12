import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import Particles from "./Particles";

const Core = ({ activeNode }) => {
    const coreRef = useRef();
    const ringRef = useRef();
    const ringRef2 = useRef();
    const ringRef3 = useRef();
    const shardRef = useRef();
    const innerRef = useRef();

    useFrame((state, delta) => {
        if (!coreRef.current) return;

        const time = state.clock.elapsedTime;
        const intensity = activeNode ? 1.4 : 1;

        coreRef.current.rotation.x += delta * 0.12 * intensity;
        coreRef.current.rotation.y += delta * 0.22 * intensity;
        coreRef.current.position.y = Math.sin(time * 1.2) * 0.08;

        if (innerRef.current) {
            const pulse =
                1 +
                Math.sin(time * (activeNode ? 5 : 3)) *
                    (activeNode ? 0.08 : 0.04);

            innerRef.current.scale.set(
                pulse,
                pulse,
                pulse
            );
        }

        if (ringRef.current) {
            ringRef.current.rotation.x +=
                delta * 0.35 * intensity;
            ringRef.current.rotation.y +=
                delta * 0.2 * intensity;
        }

        if (ringRef2.current) {
            ringRef2.current.rotation.x -=
                delta * 0.25 * intensity;
            ringRef2.current.rotation.z +=
                delta * 0.3 * intensity;
        }

        if (ringRef3.current) {
            ringRef3.current.rotation.y +=
                delta * 0.5 * intensity;
            ringRef3.current.rotation.z -=
                delta * 0.2 * intensity;
        }

        if (shardRef.current) {
            shardRef.current.rotation.x +=
                delta * 0.7 * intensity;
            shardRef.current.rotation.y -=
                delta * 0.45 * intensity;
        }
    });

    return (
        <group ref={coreRef}>
            <mesh ref={innerRef}>
            <sphereGeometry args={[0.95, 32, 32]} />
                <meshBasicMaterial
                    color="#38bdf8"
                    transparent
                    opacity={activeNode ? 0.35 : 0.22}
                />
            </mesh>

            <mesh>
            <icosahedronGeometry args={[1.15, 2]} />
                <meshBasicMaterial
                    color="#7dd3fc"
                    wireframe
                    transparent
                    opacity={0.45}
                />
            </mesh>

            <mesh>
                <icosahedronGeometry args={[1.35, 2]} />
                <meshStandardMaterial
                    color="#0ea5e9"
                    emissive="#0284c7"
                    emissiveIntensity={
                        activeNode ? 3 : 1.8
                    }
                    transparent
                    opacity={0.3}
                />
            </mesh>

            <mesh>
                <icosahedronGeometry args={[1.25, 2]} />
                <meshBasicMaterial
                    color="#38bdf8"
                    wireframe
                    transparent
                    opacity={0.7}
                />
            </mesh>

            <mesh ref={ringRef}>
                <torusGeometry
                    args={[2.1, 0.01, 12, 100]}
                />
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
                <torusGeometry
                   args={[1.75, 0.025, 16, 100]}
                />
                <meshBasicMaterial
                    color="#7dd3fc"
                    transparent
                    opacity={0.45}
                />
            </mesh>

            <mesh
                ref={ringRef3}
                rotation={[
                    Math.PI / 3,
                    Math.PI / 5,
                    0
                ]}
            >
                <torusGeometry
                    args={[1.95, 0.015, 16, 100]}
                />
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

const Node = ({
    position,
    label,
    value,
    id,
    activeNode,
    setActiveNode
}) => {
    const ref = useRef();
    const meshRef = useRef();
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        if (!ref.current || !meshRef.current) return;

        const time = state.clock.elapsedTime;
        const isActive = activeNode === id;
        const targetScale = isActive ? 1.45 : 1;

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
                time * 1.5 + position[0]
            ) *
                0.08;
    });

    const isActive = activeNode === id;

    return (
        <group ref={ref} position={position}>
            <mesh
                ref={meshRef}
                onPointerOver={(event) => {
                    event.stopPropagation();
                    setHovered(true);
                    setActiveNode(id);
                    document.body.style.cursor =
                        "pointer";
                }}
                onPointerOut={() => {
                    setHovered(false);
                    setActiveNode(null);
                    document.body.style.cursor =
                        "default";
                }}
            >
                <sphereGeometry
                    args={[0.22, 32, 32]}
                />

                <meshStandardMaterial
                    color={
                        isActive
                            ? "#7dd3fc"
                            : "#ffffff"
                    }
                    emissive="#38bdf8"
                    emissiveIntensity={
                        isActive ? 6 : 2
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

            {(hovered || isActive) && (
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

const Connection = ({
    start,
    end,
    active = false
}) => {
    const pulse1Ref = useRef();
    const pulse2Ref = useRef();
    const lineRef = useRef();

    const startVector = useMemo(
        () => new THREE.Vector3(...start),
        [start]
    );

    const endVector = useMemo(
        () => new THREE.Vector3(...end),
        [end]
    );

    const direction = useMemo(
        () =>
            new THREE.Vector3().subVectors(
                endVector,
                startVector
            ),
        [startVector, endVector]
    );

    useFrame((state) => {
        const time = state.clock.elapsedTime;

        if (pulse1Ref.current) {
            const progress =
                (time * (active ? 0.65 : 0.4)) % 1;

            pulse1Ref.current.position
                .copy(startVector)
                .add(
                    direction
                        .clone()
                        .multiplyScalar(progress)
                );
        }

        if (pulse2Ref.current) {
            const progress =
                (time * (active ? 0.65 : 0.4) +
                    0.5) %
                1;

            pulse2Ref.current.position
                .copy(startVector)
                .add(
                    direction
                        .clone()
                        .multiplyScalar(progress)
                );
        }

        if (lineRef.current) {
            const pulse =
                (Math.sin(time * 3) + 1) / 2;

            lineRef.current.material.opacity =
                active
                    ? 0.45 + pulse * 0.3
                    : 0.15 + pulse * 0.08;
        }
    });

    return (
        <group>
            <line ref={lineRef}>
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
                    color={
                        active
                            ? "#7dd3fc"
                            : "#38bdf8"
                    }
                    transparent
                    opacity={0.2}
                />
            </line>

            <mesh ref={pulse1Ref}>
                <sphereGeometry
                    args={[active ? 0.07 : 0.055, 12, 12]}
                />

                <meshBasicMaterial
                    color={
                        active
                            ? "#ffffff"
                            : "#7dd3fc"
                    }
                />
            </mesh>

            <mesh ref={pulse2Ref}>
                <sphereGeometry
                    args={[0.035, 10, 10]}
                />

                <meshBasicMaterial
                    color="#38bdf8"
                />
            </mesh>
        </group>
    );
};



const BusinessScene = ({
    activeNode,
    setActiveNode
}) => {
    const nodes = {
        clients: [0, 2.8, -0.4],
        projects: [2.8, 0, 0.8],
        tasks: [0, -2.8, 0.4],
        invoices: [-2.8, 0, -0.8]
    };

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

            <Core activeNode={activeNode} />

            <Node
                position={nodes.clients}
                label="CLIENTS"
                value="128 ACTIVE"
                id="clients"
                activeNode={activeNode}
                setActiveNode={setActiveNode}
            />

            <Node
                position={nodes.projects}
                label="PROJECTS"
                value="24 ACTIVE"
                id="projects"
                activeNode={activeNode}
                setActiveNode={setActiveNode}
            />

            <Node
                position={nodes.tasks}
                label="TASKS"
                value="87% COMPLETE"
                id="tasks"
                activeNode={activeNode}
                setActiveNode={setActiveNode}
            />

            <Node
                position={nodes.invoices}
                label="INVOICES"
                value="₹1.24L PENDING"
                id="invoices"
                activeNode={activeNode}
                setActiveNode={setActiveNode}
            />

            <Connection
                start={nodes.clients}
                end={[0, 0, 0]}
                active={activeNode === "clients"}
            />

            <Connection
                start={nodes.projects}
                end={[1.8, 0, 0]}
                active={activeNode === "projects"}
            />

            <Connection
                start={nodes.tasks}
                end={[0, -1.8, 0]}
                active={activeNode === "tasks"}
            />

            <Connection
                start={nodes.invoices}
                end={[-1.8, 0, 0]}
                active={activeNode === "invoices"}
            />
        </>
    );
};

const BusinessCore = () => {
    const [activeNode, setActiveNode] = useState(null);

    return (
        <div className="relative w-full h-[750px] overflow-visible">
            <Canvas
                camera={{
                    position: [0, 0, 7],
                    fov: 55
                }}
                dpr={[1, 2]}
                gl={{
                    antialias: true,
                    alpha: true
                }}
            >
                <BusinessScene
                    activeNode={activeNode}
                    setActiveNode={setActiveNode}
                />

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

