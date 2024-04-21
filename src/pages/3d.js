import React from 'react'
import Model from '../components/model'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei'

function ThreeD() {
  return (
    <div className='main'>
        <div className='canvas'>
        <Canvas style={{ width: '300px', height: '600px' }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Model />
            <OrbitControls />
        </Canvas>    
        </div>
    </div>
       
  )
}

export default ThreeD