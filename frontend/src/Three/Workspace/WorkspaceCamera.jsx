import { useEffect, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const WorkspaceCamera = () => {
    const { camera } = useThree();

    const targetRotation = useRef({
        x: 0,
        y: 0
    });

    const currentRotation = useRef({
        x: 0,
        y: 0
    });

    useEffect(() => {
        const handleMouseMove = (event) => {
            const x = event.clientX / window.innerWidth;
            const y = event.clientY / window.innerHeight;

            // Horizontal look
            targetRotation.current.y =
                (x - 0.5) * 0.8;

            // Vertical look
            targetRotation.current.x =
                (y - 0.5) * 0.45;
        };

        window.addEventListener(
            "mousemove",
            handleMouseMove
        );

        return () => {
            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );
        };
    }, []);

    useFrame(() => {
        currentRotation.current.x = THREE.MathUtils.lerp(
            currentRotation.current.x,
            targetRotation.current.x,
            0.08
        );

        currentRotation.current.y = THREE.MathUtils.lerp(
            currentRotation.current.y,
            targetRotation.current.y,
            0.08
        );

        camera.rotation.x =
            currentRotation.current.x;

        camera.rotation.y =
            currentRotation.current.y;
    });

    return null;
};

export default WorkspaceCamera;