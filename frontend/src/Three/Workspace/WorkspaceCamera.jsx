import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import {
    CAMERA_POSITIONS
} from "./animation";

const WorkspaceCamera = ({ state }) => {
    const { camera } = useThree();
    const targetPosition = useRef(
        new THREE.Vector3()
    );
    const targetLookAt = useRef(
        new THREE.Vector3()
    );

    useEffect(() => {
        const config =
            CAMERA_POSITIONS[state];

        if (!config) return;

        targetPosition.current.set(
            ...config.position
        );

        targetLookAt.current.set(
            ...config.lookAt
        );
    }, [state]);

    useFrame(() => {
        camera.position.lerp(
            targetPosition.current,
            0.035
        );

        

        const targetQuaternion =
            new THREE.Quaternion();

        targetQuaternion.setFromRotationMatrix(
            new THREE.Matrix4().lookAt(
                camera.position,
                targetLookAt.current,
                camera.up
            )
        );

        camera.quaternion.slerp(
            targetQuaternion,
            0.035
        );
    });

    return null;
};

export default WorkspaceCamera;