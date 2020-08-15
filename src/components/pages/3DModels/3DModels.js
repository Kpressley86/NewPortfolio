import React, { Suspense } from 'react'
import { Canvas, useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls, draco } from 'drei'
import './3DModels.css'

function Keen() {
    const { scene } = useLoader(GLTFLoader, '/scene-draco.glb', draco())
    return (
        <group position={[0, -7, 0]} rotation={[0, 0, 0]} dispose={null}>
            <primitive object={scene} />
        </group>
    )
}

function ThreeDModels() {
    return (
        <div style={{ height: '100%', width: '100%', overflow: 'hidden' }}>
            <Canvas invalidateFrameloop camera={{ position: [0, 5, 17], far: 50 }}>
                {/* and this is the canvas, it has nothing to do with the dom
          it renders into threejs ... */}
                <ambientLight />
                <spotLight intensity={2} position={[20, 20, 20]} shadow-bias={-0.00005} angle={Math.PI / 6} />
                <Suspense fallback={null}>
                    <Keen />
                </Suspense>
                <OrbitControls />
            </Canvas>
            <h1 style={{ position: 'absolute', top: 40, left: 40 }}>this is the dom</h1>
        </div>,
        document.getElementById('root')
    );
}
export default ThreeDModels;