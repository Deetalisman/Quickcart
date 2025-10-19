"use client";
import Image from "next/image";
import Footer from "../../Footer/page";
import Navbar from "../../Navbar/page";
import { products } from "@/assets/productData";
import { IoStar } from "react-icons/io5";
import Link from "next/link";

const Viewproduct = ({ params }) => {
  const { id } = params;
  const product = products.find((item) => item.id === parseInt(id));
  return (
    <div>
      <Navbar />
      <div className="px-[13%] pt-13 flex justify-between">
        <aside>
          <Image
            src={product.imgSrc}
            alt={product.name}
            width={450}
            height={480}
            className="bg-[#f0f0f2] rounded-lg "
          />
          <Image
            src={product.imgSrc}
            alt={product.name}
            width={100}
            height={100}
            className="bg-[#f0f0f2] rounded-lg mt-2"
          />
        </aside>
        <aside className="w-[50%]">
          <h1 className="font-bold text-2xl text-[#374151]">{product.name} </h1>
          <div className="flex">
            <nav className="flex mt-3">
              <IoStar className="text-[rgb(235,90,12)]" />
              <IoStar className="text-[rgb(235,90,12)]" />
              <IoStar className="text-[rgb(235,90,12)]" />
              <IoStar className="text-[rgb(235,90,12)]" />
              <IoStar className="text-[rgb(213,174,153)]" />
            </nav>
            <p className="ml-3 text-gray-700 mt-2">({product.rating})</p>
          </div>
          <p className="mt-3 text-gray-500">{product.description1}</p>
          <div className="flex mt-6 mb-6">
            <p className=" text-4xl text-[#374151]">{product.price}</p>
            <p className=" text-[#374151] ml-3 text-sm mt-4 line-through">
              ${product.offerPrice}
            </p>
          </div>
          <hr className="text-gray-400"></hr>
          <div className="mt-4 flex">
            <p>Brand</p>
            <p className="text-gray-500 ml-23">Generic</p>
          </div>
          <div className="mt-4 flex">
            <p>Color</p>
            <p className="text-gray-500 ml-25">Multi</p>
          </div>
          <div className="mt-4 flex">
            <p>Category</p>
            <p className="text-gray-500 ml-18">{product.category}</p>
          </div>
          <div className="mt-10">
            <button className="w-65 h-11 text-sm bg-gray-300">
              Add to cart
            </button>
            <button className="w-65 h-11 ml-4 text-sm text-white bg-[rgb(235,90,12)]">
              Buy now
            </button>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Viewproduct;
