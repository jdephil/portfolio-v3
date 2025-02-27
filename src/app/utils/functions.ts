useFrame(() => {
  if (meshRef.current) {
    meshRef.current.rotation.y += 0.02 // Adjust speed as needed
  }
})
