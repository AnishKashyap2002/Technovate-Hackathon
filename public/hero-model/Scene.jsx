"use client";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
    const { nodes, materials } = useGLTF("/hero-model/scene.gltf");
    return (
        <group
            {...props}
            dispose={null}
            className="absolute right-0"
        >
            <group scale={0.004}>
                <mesh
                    geometry={nodes.HammerBand_LP_Hammer_LP_0.geometry}
                    material={materials.Hammer_LP}
                    position={[10.374, -215.203, 0]}
                />
                <mesh
                    geometry={nodes.HammerHandle_LP_Hammer_LP_0.geometry}
                    material={materials.Hammer_LP}
                    position={[0, -41.904, 0]}
                />
                <mesh
                    geometry={nodes.HammerHead_LP_Hammer_LP_0.geometry}
                    material={materials.Hammer_LP}
                    position={[-24.95, 0, 0]}
                />
                <mesh
                    geometry={nodes.HammerHeadTop_LP_Hammer_LP_0.geometry}
                    material={materials.Hammer_LP}
                    position={[-24.95, 0, 0]}
                />
                <mesh
                    geometry={nodes.HammerKnob_LP_Hammer_LP_0.geometry}
                    material={materials.Hammer_LP}
                    position={[0, -196.785, 0]}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/hero-model/scene.gltf");
