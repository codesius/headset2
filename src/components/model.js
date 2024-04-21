import React, { Suspense, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Model = () => {
  // Load the .glb model
  const { scene } = useGLTF("/model.glb");

  // Adjust the scale of the model
  const scaleFactor = 1; // You can adjust this value to make the model bigger or smaller

  // Create a reference to the model for rotation
  const modelRef = useRef();

  // Use the useFrame hook to update the rotation in each frame
  useFrame(() => {
    // Rotate the model around the Y-axis
    modelRef.current.rotation.y += 0.01; // You can adjust the speed of rotation here
  });

  return (
    <Suspense fallback={null}>
      {/* Apply the scale and rotation to the model */}
      <primitive object={scene} scale={[scaleFactor, scaleFactor, scaleFactor]} ref={modelRef} />
    </Suspense>
  );
};

export default Model;
