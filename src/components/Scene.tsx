"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "../../public/hero-model/Scene";
import ArcReactor from "../../public/arc-reactor/Scene";
import HydraHelmet from "../../public/hydra-helmet/Scene";
import Shield from "../../public/shield/Scene";

import React, { Suspense } from "react";

const Fallback = () => {
    return <p className="text-black font-bold">Loading...</p>;
};

const ModelArray = [<Model />, <ArcReactor />, <HydraHelmet />, <Shield />];

const Scene = ({ i }: { i: number }) => {
    return (
        <>
            <Canvas
                shadows
                style={i == 0 ? { height: "100vh" } : { height: "400px" }}
                className="absloute w-full z-20 "
                dpr={[1, 2]}
                camera={{ position: [0, 0, 4], fov: 50 }}
            >
                <ambientLight intensity={0.7} />
                <spotLight
                    intensity={0.5}
                    angle={0.1}
                    penumbra={1}
                    position={[10, 15, 10]}
                    castShadow
                />
                <Suspense fallback={null}>
                    {ModelArray[i]}
                    <Environment preset="city" />
                </Suspense>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                />
            </Canvas>
        </>
    );
};

export default Scene;
