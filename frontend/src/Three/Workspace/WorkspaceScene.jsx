import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import WorkspaceCamera from "./WorkspaceCamera";
import {
    CAMERA_STATES
} from "./animation";

const WorkspaceEnvironment = () => {
    return (
        <>
            <ambientLight intensity={1.2} />

            <directionalLight
                position={[5, 8, 5]}
                intensity={2}
            />

            {/* Floor */}
            <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, 0, 0]}
            >
                <planeGeometry args={[12, 12]} />
                <meshStandardMaterial color="#d8c7ad" />
            </mesh>

            {/* Desk */}
            <mesh position={[0, 1, -1]}>
                <boxGeometry
                    args={[4, 0.25, 2]}
                />
                <meshStandardMaterial
                    color="#8b5e3c"
                />
            </mesh>

            {/* Desk legs */}
            <mesh position={[-1.7, 0.5, -1]}>
                <boxGeometry
                    args={[0.2, 1, 0.2]}
                />
                <meshStandardMaterial
                    color="#5c3d2e"
                />
            </mesh>

            <mesh position={[1.7, 0.5, -1]}>
                <boxGeometry
                    args={[0.2, 1, 0.2]}
                />
                <meshStandardMaterial
                    color="#5c3d2e"
                />
            </mesh>

            {/* Chair */}
            <mesh position={[0, 0.8, 2]}>
                <boxGeometry
                    args={[1.4, 0.2, 1.4]}
                />
                <meshStandardMaterial
                    color="#475569"
                />
            </mesh>

            {/* Laptop */}
            <mesh position={[0, 1.45, -1]}>
                <boxGeometry
                    args={[1.5, 0.08, 1]}
                />
                <meshStandardMaterial
                    color="#1e293b"
                />
            </mesh>

            {/* Workspace marker */}
            <mesh position={[0, 2, -1]}>
                <sphereGeometry args={[0.15, 32, 32]} />
                <meshStandardMaterial
                    color="#facc15"
                    emissive="#facc15"
                    emissiveIntensity={2}
                />
            </mesh>
        </>
    );
};

const WorkspaceScene = () => {
    const [cameraState, setCameraState] =
        useState(CAMERA_STATES.INTRO);

    return (
        <div className="fixed inset-0 w-full h-full">
            <Canvas
                camera={{
                    position: [6, 4, 8],
                    fov: 55
                }}
                dpr={[1, 2]}
            >
                <WorkspaceEnvironment />

                <WorkspaceCamera
                    state={cameraState}
                />
            </Canvas>

            <div className="absolute bottom-6 left-6 flex gap-2">
                <button
                    onClick={() =>
                        setCameraState(
                            CAMERA_STATES.INTRO
                        )
                    }
                    className="rounded bg-slate-800 px-4 py-2 text-white"
                >
                    Intro
                </button>

                <button
                    onClick={() =>
                        setCameraState(
                            CAMERA_STATES.ENTERING
                        )
                    }
                    className="rounded bg-slate-800 px-4 py-2 text-white"
                >
                    Enter
                </button>

                <button
                    onClick={() =>
                        setCameraState(
                            CAMERA_STATES.SITTING
                        )
                    }
                    className="rounded bg-slate-800 px-4 py-2 text-white"
                >
                    Sit
                </button>

                <button
                    onClick={() =>
                        setCameraState(
                            CAMERA_STATES.FIRST_PERSON
                        )
                    }
                    className="rounded bg-slate-800 px-4 py-2 text-white"
                >
                    First Person
                </button>
            </div>
        </div>
    );
};

export default WorkspaceScene;