const Chair = () => {
    return (
        <group>
            {/* SEAT */}

            <mesh
                position={[0, 0.85, 1.25]}
                castShadow
            >
                <boxGeometry args={[1.5, 0.2, 1.5]} />
                <meshStandardMaterial color="#46566b" />
            </mesh>

            {/* BACK */}

            <mesh
                position={[0, 1.6, 1.9]}
                castShadow
            >
                <boxGeometry args={[1.5, 1.5, 0.2]} />
                <meshStandardMaterial color="#46566b" />
            </mesh>
        </group>
    );
};

export default Chair;