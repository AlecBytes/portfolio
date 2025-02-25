"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Wizard(props) {
  const { nodes, materials } = useGLTF('/models/wizard-transformed.glb')

  const modelRef = useRef()

  useFrame((state, delta, xrFrame) => {
    modelRef.current.position.y = -1.3 + Math.sin(state.clock.elapsedTime) * 0.15
  })


  return (
    <group {...props} dispose={null}
      ref={modelRef}
      position={[0,-1.3,0]}
      scale={[1.5,1.5,1.5]}
      rotation={[0.1, 0.1, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_0.geometry}
        material={materials.color}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.245, 0.245, 0.22]}
      />
    </group>
  )
}

useGLTF.preload('/models/wizard-transformed.glb')