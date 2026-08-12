import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const Particles = () => {
    const pointsRef = useRef();

    const positions = useMemo(() => {

        const particles = new Float32Array(300 * 3);

        for (let i = 0; i < 300; i++) {

            particles[i * 3] =
                (Math.random() - 0.5) * 12;

            particles[i * 3 + 1] =
                (Math.random() - 0.5) * 8;

            particles[i * 3 + 2] =
                (Math.random() - 0.5) * 6;
        }

        return particles;

    }, []);

    useFrame((state, delta) => {

        if (!pointsRef.current) return;

        pointsRef.current.rotation.y +=
            delta * 0.015;

        pointsRef.current.rotation.x =
            Math.sin(
                state.clock.elapsedTime * 0.1
            ) * 0.05;

    });

    return (

        <points ref={pointsRef}>

            <bufferGeometry>

                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />

            </bufferGeometry>

            <pointsMaterial
                size={0.025}
                transparent
                opacity={0.6}
                sizeAttenuation
            />

        </points>

    );
};

export default Particles;