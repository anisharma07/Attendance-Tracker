import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col h-screen bg-zinc-900 text-zinc-300 relative">
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full flex-grow">
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
