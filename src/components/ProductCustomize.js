import React from "react";
import tw from "tailwind-styled-components";
import ProductModel from "./ProductModel";
import ActionContainer from "./ActionContainer";
import ActionMenu from "./ActionMenu";

const ProductCustomize = () => {
  return (
    <Container>
      <ActionMenu />
      <ProductModel />
      <ActionContainer />
    </Container>
  );
};

const Container = tw.div`
    flex
`;

export default ProductCustomize;
