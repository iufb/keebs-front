import { Flex } from "@radix-ui/themes";
import { PropsWithChildren } from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const Layout = ({ children }: PropsWithChildren) => (
  <Flex direction="column" mx="auto" style={{ minHeight: "100vh" }}>
    <div className="w-full h-10  bg-gradient-to-l to-green-500 from-blue-400" />
    <Header />
    <main className="max-w-[1200px] m-auto w-full pt-10 h-full">
      {children}
    </main>
    <Footer />
  </Flex>
);
