import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col justify-between w-full h-screen bg-zinc-900 text-zinc-300 relative">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
