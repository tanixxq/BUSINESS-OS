const Room = () => {
    return (
        <>
            {/* LIGHTING */}
            <ambientLight intensity={1.2} />

            <directionalLight
                position={[4, 7, 4]}
                intensity={2}
            />

            {/* FLOOR */}
            <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, 0, 0]}
                receiveShadow
            >
                <planeGeometry args={[14, 12]} />
                <meshStandardMaterial
                    color="#d8c7ad"
                    roughness={0.9}
                />
            </mesh>

            {/* BACK WALL */}
            <mesh
                position={[0, 3, -3]}
                receiveShadow
            >
                <boxGeometry args={[14, 6, 0.2]} />
                <meshStandardMaterial
                    color="#e8e2d8"
                    roughness={0.9}
                />
            </mesh>

            {/* LEFT WALL */}
            <mesh
                position={[-7, 3, 0]}
                rotation={[0, Math.PI / 2, 0]}
                receiveShadow
            >
                <planeGeometry args={[6, 6]} />
                <meshStandardMaterial
                    color="#eee9df"
                    roughness={0.9}
                />
            </mesh>
        </>
    );
};

export default Room;