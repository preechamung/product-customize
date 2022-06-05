import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

import { ReactReduxContext, Provider } from "react-redux";
import tw from "tailwind-styled-components";
import Product from "./Product";

const ProductModel = () => {
  return (
    <Container>
      {/* use redux in canvas */}
      <ReactReduxContext.Consumer>
        {({ store }) => (
          <Canvas shadows camera={{ position: [0, 0, 1.1], fov: 50 }}>
            <Provider store={store}>
              <ambientLight intensity={0.7} />
              <spotLight
                intensity={0.5}
                angle={0.1}
                penumbra={1}
                position={[10, 15, 10]}
                castShadow
              />
              <Suspense fallback={null}>
                {/* Model */}
                <Product />
                <Environment preset="city" />
                <ContactShadows
                  position={[0, -0.8, 0]}
                  opacity={0.25}
                  scale={10}
                  blur={1.5}
                  far={0.8}
                />
              </Suspense>
              <OrbitControls
                // minPolarAngle={Math.PI / 2}
                // maxPolarAngle={Math.PI / 2}
                enableZoom={false}
                enablePan={true}
              />
            </Provider>
          </Canvas>
        )}
      </ReactReduxContext.Consumer>
    </Container>
  );
};

export default ProductModel;

const Container = tw.div`
    flex
    w-2/4
    h-screen
`;
