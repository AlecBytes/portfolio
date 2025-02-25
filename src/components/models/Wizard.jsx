"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Wizard(props) {
  const { nodes, materials } = useGLTF('/models/AlecGrad-transformed.glb')

    const modelRef = useRef()
  
  useFrame((state, delta, xrFrame) => {
    modelRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.15
    modelRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * (Math.PI / 4) // Rotate between -45 and 45 degrees
  })

  return (
    <group {...props} dispose={null}
        ref={modelRef}
        position={[0, 0, 0]}
        scale={[2, 2, 2]}
        rotation={[0.0, 0.0, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  )
}

useGLTF.preload('/models/AlecGrad-transformed.glb')