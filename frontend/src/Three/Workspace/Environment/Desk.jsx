const Desk = () => {
    return (
        <group>
            {/* MAIN DESKTOP */}

            <mesh
                position={[0, 1.05, -1.1]}
                castShadow
                receiveShadow
            >
                <boxGeometry args={[5.6, 0.28, 2.35]} />
                <meshStandardMaterial
                    color="#8b6245"
                    roughness={0.72}
                />
            </mesh>

            {/* DESKTOP SURFACE */}

            <mesh
                position={[0, 1.2, -1.1]}
                receiveShadow
            >
                <boxGeometry args={[5.45, 0.035, 2.2]} />
                <meshStandardMaterial
                    color="#a87854"
                    roughness={0.62}
                />
            </mesh>

            {/* FRONT WOODEN EDGE */}

            <mesh
                position={[0, 0.92, -0.05]}
                castShadow
            >
                <boxGeometry args={[5.55, 0.16, 0.12]} />
                <meshStandardMaterial
                    color="#704b35"
                    roughness={0.75}
                />
            </mesh>

            {/* LEFT FRONT LEG */}

            <mesh
                position={[-2.45, 0.48, -1.1]}
                castShadow
            >
                <boxGeometry args={[0.3, 1, 0.3]} />
                <meshStandardMaterial
                    color="#704b35"
                    roughness={0.8}
                />
            </mesh>

            {/* RIGHT FRONT LEG */}

            <mesh
                position={[2.45, 0.48, -1.1]}
                castShadow
            >
                <boxGeometry args={[0.3, 1, 0.3]} />
                <meshStandardMaterial
                    color="#704b35"
                    roughness={0.8}
                />
            </mesh>

            {/* LEFT REAR LEG */}

            <mesh
                position={[-2.45, 0.48, -2]}
                castShadow
            >
                <boxGeometry args={[0.3, 1, 0.3]} />
                <meshStandardMaterial
                    color="#704b35"
                    roughness={0.8}
                />
            </mesh>

            {/* RIGHT REAR LEG */}

            <mesh
                position={[2.45, 0.48, -2]}
                castShadow
            >
                <boxGeometry args={[0.3, 1, 0.3]} />
                <meshStandardMaterial
                    color="#704b35"
                    roughness={0.8}
                />
            </mesh>
        </group>
    );
};

export default Desk;