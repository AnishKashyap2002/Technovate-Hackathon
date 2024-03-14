/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf 
Author: Venom1462 (https://sketchfab.com/Venom1462)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/secret-empire-hydra-captain-america-helmet-ec124f25d0284aa7a41fdfb7af4b0a00
Title: Secret Empire Hydra Captain America Helmet
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function HydraHelmet(props) {
    const { nodes, materials } = useGLTF("/hydra-helmet/scene.gltf");
    return (
        <group
            {...props}
            dispose={null}
        >
            <group
                position={[0, 0.341, 0.53]}
                rotation={[-1.672, 0, 0]}
            >
                <group>
                    <mesh
                        geometry={
                            nodes
                                .hero_captainAmerica01_s10_02_hero_captainAmerica01_s10_02_0
                                .geometry
                        }
                        material={materials.hero_captainAmerica01_s10_02}
                        // position={[1.728, 6.819, -0.38]}
                        // rotation={[-Math.PI / 2, 0, 0]}
                        scale={10}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/hydra-helmet/scene.gltf");
