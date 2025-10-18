"use client";
import { useEffect, useState } from "react";
import Footer from "../../Footer/page";
import Navbar from "../../Navbar/page";
import { products } from "@/assets/productData";

const Viewproduct = ({ pid }) => {
  const [selectedproduct, setSelectedproduct] = useState([]);

  return (
    <div>
      <Navbar />
      <p className="px-[10%]">This is the preview of</p>
      <Footer />
    </div>
  );
};

export default Viewproduct;
