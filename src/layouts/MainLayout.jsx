import Footer from "@/shared/footer/Footer";
import Navbar from "@/shared/navbar/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-52px)]">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
