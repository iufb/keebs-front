import { ElementType, Suspense, useEffect, useState } from "react";
import { FullPageWrapper } from "../FullPageWrapper/FullPageWrapper";
import Animate from "@charlesvien/react-animatecss";

export const Loadable = (Component: ElementType) => {
  return function (props: any) {
    return (
      <Suspense fallback={<div>loading</div>}>
        <Animate animationOut="fadeOut" outDuration={10000}>
          <Component {...props} />
        </Animate>
      </Suspense>
    );
  };
};
