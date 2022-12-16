import React, { ComponentPropsWithRef, forwardRef } from "react";
//import { rainbowSprinkles, Sprinkles } from "../../contract/sprinkles.css";

type Ref = HTMLDivElement;

export type SpacerProps =  ComponentPropsWithRef<"div">;

export const Spacer = forwardRef<Ref, SpacerProps>((props, ref) => {
  //const { className, style, otherProps } = RealrainbowSprinkles(props);

  return (
    <div ref={ref} ></div>
  );
});
