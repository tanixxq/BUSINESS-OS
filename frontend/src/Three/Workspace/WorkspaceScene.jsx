import { Canvas } from "@react-three/fiber";
import WorkspaceEnvironment from "./Environment/WorkspaceEnvironment";

const WorkspaceScene = () => {
    return (
        <div className="fixed inset-0 w-full h-full">
            <Canvas
                camera={{
                    position: [0, 2.35, 1.25],
                    fov: 65
                }}
                onCreated={({ camera }) => {
                    camera.lookAt(0, 1.65, -1.1);
                }}
            >
                <WorkspaceEnvironment />
            </Canvas>
        </div>
    );
};

export default WorkspaceScene;