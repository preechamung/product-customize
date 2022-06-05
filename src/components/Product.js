import React from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useGLTF } from "@react-three/drei";
import { selectModel } from "../features/productCustomize/modelSlice";

const Product = () => {
  const ref = useRef();
  const snap = useSelector(selectModel);

  const { nodes, materials } = useGLTF("tshirt.glb");

  return (
    <group ref={ref} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Label_Body}
          material-color={snap.bodyColor}
        />
        <mesh
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Label_Neck}
          material-color={snap.bodyColor}
        />
        <mesh
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials["T-Shirt_Inside"]}
        />
        <mesh
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials["T-Shirt_Inside"]}
          material-color={snap.bodyColor}
        />
        <mesh
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials["T-Shirt_Outside"]}
        ></mesh>
        <mesh
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials["T-Shirt_Outside"]}
          material-color={snap.bodyColor}
        ></mesh>
      </group>
    </group>
    // <group
    //   ref={ref}
    //   dispose={null}
    //   onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
    //   onPointerOut={(e) => e.intersections.length === 0 && set(null)}
    //   onPointerMissed={() => dispatch(itemSelected(null))}
    //   onClick={(e) => (
    //     e.stopPropagation(), dispatch(itemSelected(e.object.material.name))
    //   )}
    // >
    //   <mesh
    //     receiveShadow
    //     castShadow
    //     geometry={nodes.shoe.geometry}
    //     material={materials.laces}
    //     material-color={snap.items.laces}
    //   />
    //   <mesh
    //     receiveShadow
    //     castShadow
    //     geometry={nodes.shoe_1.geometry}
    //     material={materials.mesh}
    //     material-color={snap.items.mesh}
    //   ></mesh>
    //   <mesh
    //     receiveShadow
    //     castShadow
    //     geometry={nodes.shoe_2.geometry}
    //     material={materials.caps}
    //     material-color={snap.items.caps}
    //   />
    //   <mesh
    //     receiveShadow
    //     castShadow
    //     geometry={nodes.shoe_3.geometry}
    //     material={materials.inner}
    //     material-color={snap.items.inner}
    //   ></mesh>
    //   <mesh
    //     receiveShadow
    //     castShadow
    //     geometry={nodes.shoe_4.geometry}
    //     material={materials.sole}
    //     material-color={snap.items.sole}
    //   />
    //   <mesh
    //     receiveShadow
    //     castShadow
    //     geometry={nodes.shoe_5.geometry}
    //     material={materials.stripes}
    //     material-color={snap.items.stripes}
    //   />
    //   <mesh
    //     receiveShadow
    //     castShadow
    //     geometry={nodes.shoe_6.geometry}
    //     material={materials.band}
    //     material-color={snap.items.band}
    //   />
    //   <mesh
    //     receiveShadow
    //     castShadow
    //     geometry={nodes.shoe_7.geometry}
    //     material={materials.patch}
    //     material-color={snap.items.patch}
    //   />
    // </group>
  );
};

export default Product;
