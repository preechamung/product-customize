import React from "react";
import tw from "tailwind-styled-components";
import { HexColorPicker } from "react-colorful";
import { useSelector, useDispatch } from "react-redux";
import {
  colorChanged,
  selectModel,
} from "../features/productCustomize/modelSlice";

const ActionContainer = () => {
  const state = useSelector(selectModel);
  const dispatch = useDispatch();

  return (
    <Container>
      <div>
        <HexColorPicker
          className="picker"
          color={state.bodyColor}
          onChange={(color) => dispatch(colorChanged(color))}
        />
        <h1>{state.current}</h1>
      </div>
    </Container>
  );
};

export default ActionContainer;

const Container = tw.div`
    flex
    w-1/4
`;
