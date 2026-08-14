const Pinboard = () => {
    return (
        <group position={[-0.75, 0, -0.1]}>

            {/* ========================= */}
            {/* MAIN CORK BOARD */}
            {/* ========================= */}

            <mesh
                position={[0, 2.75, -2.82]}
                castShadow
            >
                <boxGeometry args={[3.8, 2.15, 0.10]} />
                <meshStandardMaterial
                    color="#b99a72"
                    roughness={0.92}
                />
            </mesh>

            {/* ========================= */}
            {/* WOODEN FRAME */}
            {/* ========================= */}

            <mesh position={[0, 3.85, -2.89]}>
                <boxGeometry args={[3.98, 0.12, 0.16]} />
                <meshStandardMaterial
                    color="#765238"
                    roughness={0.7}
                />
            </mesh>

            <mesh position={[0, 1.65, -2.89]}>
                <boxGeometry args={[3.98, 0.12, 0.16]} />
                <meshStandardMaterial
                    color="#765238"
                    roughness={0.7}
                />
            </mesh>

            <mesh position={[-1.93, 2.75, -2.89]}>
                <boxGeometry args={[0.12, 2.3, 0.16]} />
                <meshStandardMaterial
                    color="#765238"
                    roughness={0.7}
                />
            </mesh>

            <mesh position={[1.93, 2.75, -2.89]}>
                <boxGeometry args={[0.12, 2.3, 0.16]} />
                <meshStandardMaterial
                    color="#765238"
                    roughness={0.7}
                />
            </mesh>

            {/* ========================= */}
            {/* STICKY NOTE 1 */}
            {/* ========================= */}

            <mesh position={[-1.15, 3.25, -2.90]}>
                <boxGeometry args={[0.62, 0.58, 0.035]} />
                <meshStandardMaterial
                    color="#f3d66f"
                    roughness={0.88}
                />
            </mesh>

            {/* PIN 1 */}

            <mesh position={[-1.15, 3.25, -2.94]}>
                <sphereGeometry args={[0.065, 16, 16]} />
                <meshStandardMaterial
                    color="#b33d3d"
                    roughness={0.42}
                    metalness={0.15}
                />
            </mesh>

            {/* ========================= */}
            {/* STICKY NOTE 2 */}
            {/* ========================= */}

            <mesh position={[0, 3.32, -2.90]}>
                <boxGeometry args={[0.65, 0.55, 0.035]} />
                <meshStandardMaterial
                    color="#f0b7b2"
                    roughness={0.88}
                />
            </mesh>

            {/* PIN 2 */}

            <mesh position={[0, 3.32, -2.94]}>
                <sphereGeometry args={[0.065, 16, 16]} />
                <meshStandardMaterial
                    color="#4b6380"
                    roughness={0.42}
                    metalness={0.15}
                />
            </mesh>

            {/* ========================= */}
            {/* STICKY NOTE 3 */}
            {/* ========================= */}

            <mesh position={[1.15, 3.18, -2.90]}>
                <boxGeometry args={[0.68, 0.62, 0.035]} />
                <meshStandardMaterial
                    color="#cddfae"
                    roughness={0.88}
                />
            </mesh>

            {/* PIN 3 */}

            <mesh position={[1.15, 3.18, -2.94]}>
                <sphereGeometry args={[0.065, 16, 16]} />
                <meshStandardMaterial
                    color="#557b58"
                    roughness={0.42}
                    metalness={0.15}
                />
            </mesh>

            {/* ========================= */}
            {/* STICKY NOTE 4 */}
            {/* ========================= */}

            <mesh
                position={[-1.1, 2.35, -2.90]}
                rotation={[0, 0, -0.04]}
            >
                <boxGeometry args={[0.7, 0.52, 0.035]} />
                <meshStandardMaterial
                    color="#a9d1df"
                    roughness={0.88}
                />
            </mesh>

            {/* PIN 4 */}

            <mesh position={[-1.1, 2.35, -2.94]}>
                <sphereGeometry args={[0.065, 16, 16]} />
                <meshStandardMaterial
                    color="#a44c43"
                    roughness={0.42}
                    metalness={0.15}
                />
            </mesh>

            {/* ========================= */}
            {/* STICKY NOTE 5 */}
            {/* ========================= */}

            <mesh
                position={[0.15, 2.35, -2.90]}
                rotation={[0, 0, 0.035]}
            >
                <boxGeometry args={[0.65, 0.58, 0.035]} />
                <meshStandardMaterial
                    color="#f0c49b"
                    roughness={0.88}
                />
            </mesh>

            {/* PIN 5 */}

            <mesh position={[0.15, 2.35, -2.94]}>
                <sphereGeometry args={[0.065, 16, 16]} />
                <meshStandardMaterial
                    color="#4b6380"
                    roughness={0.42}
                    metalness={0.15}
                />
            </mesh>

            {/* ========================= */}
            {/* SMALL PHOTO / PAPER */}
            {/* ========================= */}

            <mesh
                position={[1.15, 2.35, -2.90]}
                rotation={[0, 0, -0.03]}
            >
                <boxGeometry args={[0.72, 0.52, 0.025]} />
                <meshStandardMaterial
                    color="#eee9dc"
                    roughness={0.9}
                />
            </mesh>

            {/* PIN 6 */}

            <mesh position={[1.15, 2.35, -2.94]}>
                <sphereGeometry args={[0.065, 16, 16]} />
                <meshStandardMaterial
                    color="#bd7a3b"
                    roughness={0.42}
                    metalness={0.15}
                />
            </mesh>

        </group>
    );
};

export default Pinboard;