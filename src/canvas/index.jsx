import { Environment, OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import glbModel from "../assets/room_model.glb"
const CanvasModel = () => {
    const { scene } = useGLTF(glbModel)
  return (
    <Canvas  camera={{position:[-200,400,-300],fov:30}} >
        <Suspense fallback={"loading"}>
        <PerspectiveCamera position={[0,0,0]} /> 
        <ambientLight />
        <OrbitControls enableZoom={false} />
        <primitive object={scene} />
        <Environment preset='city'/>  
        </Suspense>
       
      </Canvas>
  )
}

export default CanvasModel
