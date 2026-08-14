const DeskLamp = () => {
    return (
        <group>
            {/* LAMP BASE */}
            <mesh position={[-1.9, 1.18, -1.25]}>
                <cylinderGeometry args={[0.28, 0.34, 0.12, 32]} />
                <meshStandardMaterial
                    color="#b8b1a6"
                    roughness={0.65}
                />
            </mesh>

            {/* LAMP NECK */}
            <mesh
                position={[-1.9, 1.55, -1.25]}
                rotation={[0, 0, -0.18]}
            >
                <cylinderGeometry args={[0.055, 0.055, 0.75, 16]} />
                <meshStandardMaterial
                    color="#9f988e"
                    roughness={0.55}
                />
            </mesh>

            {/* LAMP SHADE */}
            <mesh
                position={[-1.82, 1.92, -1.25]}
                rotation={[0, 0, -0.18]}
            >
                <coneGeometry
                    args={[0.28, 0.38, 32, 1, false]}
                />
                <meshStandardMaterial
                    color="#ded8ce"
                    roughness={0.7}
                />
            </mesh>

            {/* BULB */}
            <mesh position={[-1.79, 1.76, -1.25]}>
                <sphereGeometry args={[0.09, 16, 16]} />
                <meshStandardMaterial
                    color="#fff4cf"
                    emissive="#ffd76a"
                    emissiveIntensity={2}
                />
            </mesh>

            {/* LIGHT */}
            <pointLight
                position={[-1.79, 1.72, -1.25]}
                color="#ffd98a"
                intensity={1.5}
                distance={3}
                decay={2}
            />
        </group>
    );
};

export default DeskLamp;