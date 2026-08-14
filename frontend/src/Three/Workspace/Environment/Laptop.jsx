import { useState } from "react";
import DesktopContent from "./DesktopContent";
import { Html } from "@react-three/drei";

const DesktopComputer = () => {
    const keyRows = [
        {
            y: 0,
            keys: [
                ["esc", 0.13],
                ["F1", 0.13],
                ["F2", 0.13],
                ["F3", 0.13],
                ["F4", 0.13],
                ["F5", 0.13],
                ["F6", 0.13],
                ["F7", 0.13],
                ["F8", 0.13],
                ["F9", 0.13],
                ["F10", 0.13],
                ["F11", 0.13],
                ["F12", 0.13]
            ]
        },
        {
            y: -0.15,
            keys: [
                ["~", 0.14],
                ["1", 0.14],
                ["2", 0.14],
                ["3", 0.14],
                ["4", 0.14],
                ["5", 0.14],
                ["6", 0.14],
                ["7", 0.14],
                ["8", 0.14],
                ["9", 0.14],
                ["0", 0.14],
                ["-", 0.14],
                ["=", 0.14],
                ["⌫", 0.25]
            ]
        },
        {
            y: -0.30,
            keys: [
                ["tab", 0.22],
                ["Q", 0.14],
                ["W", 0.14],
                ["E", 0.14],
                ["R", 0.14],
                ["T", 0.14],
                ["Y", 0.14],
                ["U", 0.14],
                ["I", 0.14],
                ["O", 0.14],
                ["P", 0.14],
                ["[", 0.14],
                ["]", 0.14],
                ["\\", 0.22]
            ]
        },
        {
            y: -0.45,
            keys: [
                ["caps", 0.25],
                ["A", 0.14],
                ["S", 0.14],
                ["D", 0.14],
                ["F", 0.14],
                ["G", 0.14],
                ["H", 0.14],
                ["J", 0.14],
                ["K", 0.14],
                ["L", 0.14],
                [";", 0.14],
                ["'", 0.14],
                ["enter", 0.27]
            ]
        },
        {
            y: -0.60,
            keys: [
                ["shift", 0.31],
                ["Z", 0.14],
                ["X", 0.14],
                ["C", 0.14],
                ["V", 0.14],
                ["B", 0.14],
                ["N", 0.14],
                ["M", 0.14],
                [",", 0.14],
                [".", 0.14],
                ["/", 0.14],
                ["shift", 0.31]
            ]
        }
    ];

    return (
        <group position={[0.75, 0.1, -1.9]}
        rotation = {[-0.08,-0.18,0]}
        >
            

            {/* ================================================= */}
            {/* MONITOR BODY */}
            {/* ================================================= */}

            <group position={[0, 2.2, -0.55]}>

                {/* Main warm-white monitor shell */}
                <mesh castShadow>
                    <boxGeometry args={[2.65, 1.65, 0.12]} />
                    <meshStandardMaterial
                        color="#e9e5dc"
                        metalness={0.55}
                        roughness={0.28}
                    />
                </mesh>

                {/* Front black bezel */}
                <mesh position={[0, 0, 0.067]}>
                    <boxGeometry args={[2.52, 1.52, 0.035]} />
                    <meshStandardMaterial
                        color="#101316"
                        roughness={0.28}
                        metalness={0.25}
                    />
                </mesh>

                {/* Actual display */}
                <Html
    transform
    position={[0, 0, 0.13]}
    scale={0.085}
    center
>
    <div
        style={{
            width: "1180px",
            height: "710px",
            background: "#f5f3ef",
            overflow: "hidden"
        }}
    >
        <DesktopContent />
    </div>
</Html>

                {/* Subtle glass layer */}
                

                {/* Webcam */}
                <mesh position={[0, 0.705, 0.11]}>
                    <sphereGeometry args={[0.025, 16, 16]} />
                    <meshStandardMaterial
                        color="#050607"
                        roughness={0.15}
                    />
                </mesh>

                {/* Webcam indicator */}
                <mesh position={[0.045, 0.705, 0.112]}>
                    <sphereGeometry args={[0.006, 8, 8]} />
                    <meshBasicMaterial color="#73b8d2" />
                </mesh>

                {/* Small lower monitor indicator */}
                <mesh position={[0, -0.755, 0.11]}>
                    <boxGeometry args={[0.16, 0.018, 0.012]} />
                    <meshBasicMaterial color="#8f989d" />
                </mesh>

                {/* Monitor neck */}
                <mesh position={[0, -1.0, -0.03]}>
                    <boxGeometry args={[0.24, 0.55, 0.24]} />
                    <meshStandardMaterial
                        color="#d7d3ca"
                        metalness={0.5}
                        roughness={0.32}
                    />
                </mesh>

                {/* Neck hinge */}
                <mesh position={[0, -0.77, -0.02]}>
                    <cylinderGeometry args={[0.12, 0.12, 0.2, 24]} />
                    <meshStandardMaterial
                        color="#bdb8ae"
                        metalness={0.65}
                        roughness={0.25}
                    />
                </mesh>

                {/* Monitor stand */}
                <mesh position={[0, -1.28, 0]}>
                    <boxGeometry args={[0.95, 0.08, 0.58]} />
                    <meshStandardMaterial
                        color="#d8d4cb"
                        metalness={0.48}
                        roughness={0.3}
                    />
                </mesh>

                {/* Stand front accent */}
                <mesh position={[0, -1.235, 0.3]}>
                    <boxGeometry args={[0.72, 0.025, 0.035]} />
                    <meshStandardMaterial
                        color="#bcb7ad"
                        metalness={0.55}
                        roughness={0.25}
                    />
                </mesh>

            </group>

            {/* ================================================= */}
            {/* KEYBOARD */}
            {/* ================================================= */}

            <group
                position={[0, 1.08, 0.15]}
                rotation={[-0.025, 0, 0]}
            >

                {/* Keyboard body */}
                <mesh castShadow>
                    <boxGeometry args={[2.55, 0.09, 1.15]} />
                    <meshStandardMaterial
                        color="#e6e2d9"
                        metalness={0.42}
                        roughness={0.36}
                    />
                </mesh>

                {/* Keyboard recessed area */}
                <mesh position={[0, 0.05, -0.08]}>
                    <boxGeometry args={[2.4, 0.025, 0.82]} />
                    <meshStandardMaterial
                        color="#d5d1c8"
                        roughness={0.5}
                    />
                </mesh>

                {/* Keys */}
                <group position={[0, 0.075, 0.24]}>
                    {keyRows.map((row, rowIndex) => {
                        let totalWidth =
                            row.keys.reduce(
                                (sum, key) => sum + key[1],
                                0
                            ) +
                            (row.keys.length - 1) * 0.025;

                        let currentX =
                            -totalWidth / 2;

                        return row.keys.map(
                            ([label, width], keyIndex) => {
                                const x =
                                    currentX +
                                    width / 2;

                                currentX +=
                                    width + 0.025;

                                return (
                                    <mesh
                                        key={`${rowIndex}-${keyIndex}`}
                                        position={[
                                            x,
                                            0,
                                            row.y
                                        ]}
                                        castShadow
                                    >
                                        <boxGeometry
                                            args={[
                                                width,
                                                0.035,
                                                0.105
                                            ]}
                                        />

                                        <meshStandardMaterial
                                            color="#202326"
                                            roughness={0.48}
                                            metalness={0.12}
                                        />
                                    </mesh>
                                );
                            }
                        );
                    })}
                </group>

                {/* Space bar */}
                <mesh position={[0, 0.08, -0.43]}>
                    <boxGeometry args={[0.72, 0.035, 0.11]} />
                    <meshStandardMaterial
                        color="#202326"
                        roughness={0.48}
                    />
                </mesh>

                {/* Bottom modifier keys */}
                <mesh position={[-0.63, 0.08, -0.43]}>
                    <boxGeometry args={[0.2, 0.035, 0.11]} />
                    <meshStandardMaterial color="#202326" />
                </mesh>

                <mesh position={[0.63, 0.08, -0.43]}>
                    <boxGeometry args={[0.2, 0.035, 0.11]} />
                    <meshStandardMaterial color="#202326" />
                </mesh>

            </group>

            {/* ================================================= */}
            {/* MOUSE */}
            {/* ================================================= */}

            <group position={[1.55, 1.12, 0.12]}>

                {/* Mouse body */}
                <mesh scale={[1, 0.65, 1.35]} castShadow>
                    <sphereGeometry args={[0.22, 24, 16]} />
                    <meshStandardMaterial
                        color="#e8e4db"
                        metalness={0.35}
                        roughness={0.3}
                    />
                </mesh>

                {/* Mouse center line */}
                <mesh position={[0, 0.11, 0]}>
                    <boxGeometry args={[0.012, 0.012, 0.18]} />
                    <meshStandardMaterial
                        color="#b9b4ab"
                        roughness={0.4}
                    />
                </mesh>

                {/* Scroll wheel */}
                <mesh
                    position={[0, 0.13, -0.01]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <cylinderGeometry
                        args={[0.035, 0.035, 0.018, 16]}
                    />
                    <meshStandardMaterial
                        color="#4c5154"
                        metalness={0.5}
                        roughness={0.3}
                    />
                </mesh>

            </group>

            {/* ================================================= */}
            {/* SCREEN LIGHT */}
            {/* ================================================= */}

            <pointLight
                position={[0, 1.55, -0.05]}
                color="#74b8d2"
                intensity={0.22}
                distance={2.8}
                decay={2}
            />

        </group>
    );
};

export default DesktopComputer;