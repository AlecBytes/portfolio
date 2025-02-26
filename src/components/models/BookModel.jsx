"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function HatModel(props) {
  const { nodes, materials } = useGLTF('/models/book-transformed.glb')

  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.003
  })
  return (
    <group {...props} 
      dispose={null} 
      ref={modelRef} 
      scale={[2, 2, 2]} 
      rotation={[0.1, 0, 0]}
      position={[0, 1, 0]}
    >
      <mesh
        // castShadow
        receiveShadow
        geometry={nodes.high_poly_default_0.geometry}
        material={materials['default']}
        rotation={[-Math.PI, 0, Math.PI]}
      />
    </group>
  )
}

useGLTF.preload('/models/book-transformed.glb')

export function Model(props) {
  const { nodes, materials } = useGLTF('/book-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.high_poly_default_0.geometry}
        material={materials['default']}
        rotation={[-Math.PI, 0, Math.PI]}
      />
    </group>
  )
}

useGLTF.preload('/book-transformed.glb')