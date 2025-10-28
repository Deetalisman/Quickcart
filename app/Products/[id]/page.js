"use client";
import Image from "next/image";
import Footer from "../../Footer/page";
import Navbar from "../../Navbar/page";
import { products } from "@/assets/productData";
import { IoStar } from "react-icons/io5";
import Link from "next/link";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useRouter } from "next/navigation";
import { Await } from "react-router-dom";
const Viewproduct = ({ params }) => {
  const router = useRouter();
  const { id } = params;
  const product = products.find((item) => item.id === parseInt(id));
  const featuredproduct = products.filter((item) => item.id < 6);

  return (
    <div className="relative">
      <Navbar />
      <button
        className="cursor-pointer"
        onClick={() => {
          router.back(), window.scrollTo(0, 0);
        }}
      >
        <MdOutlineArrowBackIos className="text-2xl absolute left-3 xl:left-25 top-35 md:top-25" />
        <MdOutlineArrowBackIos className="text-2xl absolute left-5 xl:left-23 top-35 md:top-25" />
      </button>
      <div className="px-[5%] xl:px-[13%] pt-13 md:flex justify-between">
        <aside>
          <Image
            src={product.imgSrc}
            alt={product.name}
            width={450}
            height={480}
            className="bg-[#f0f0f2] rounded-lg w-[100%] md:w-80 lg:w-100 xl:w-110"
          />
          <Image
            src={product.imgSrc}
            alt={product.name}
            width={100}
            height={100}
            className="bg-[#f0f0f2] rounded-lg mt-2 "
          />
        </aside>
        <aside className="w-[100%] mt-7 md:mt-0 md:w-[50%]">
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
          <p className="mt-3 text-sm text-gray-500">{product.description1}</p>
          <div className="flex mt-6 mb-6">
            <p className=" text-2xl md:text-4xl text-[#374151]">
              {product.price}
            </p>
            <p className=" text-[#374151] ml-3 text-sm md:mt-4 mt-2 line-through">
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
            <button className="w-40 xl:w-55 h-11 text-sm bg-gray-300">
              Add to cart
            </button>
            <button className="w-40 xl:w-55 h-11 ml-4 text-sm text-white bg-[rgb(235,90,12)]">
              Buy now
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Viewproduct;
