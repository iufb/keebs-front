import { ElementType, Suspense } from "react";

export const Loadable = (Component: ElementType) => {
  return function (props: any) {
    return (
      <Suspense fallback={<div>loaidng..</div>}>
        <Component {...props} />
      </Suspense>
    );
  };
};