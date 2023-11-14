import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <section className="flex flex-col justify-start mx-auto items-center min-h-screen">
      <Header />
      <main className={`max-w-[1600px] flex-1   w-full  h-full`}>
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};
