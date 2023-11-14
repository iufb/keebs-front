import { Outlet } from "react-router-dom";

export const CollectionLayout = () => {
  return (
    <section className="grid grid-cols-collections gap-2 ">
      <div className="flex-0">sidebar filters</div>
      <div className="flex-1">
        <div>sort</div>
        <Outlet />
      </div>
    </section>
  );
};
