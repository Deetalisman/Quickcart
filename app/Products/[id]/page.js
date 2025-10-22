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
        <MdOutlineArrowBackIos className="text-2xl absolute left-25 top-25" />
        <MdOutlineArrowBackIos className="text-2xl absolute left-23 top-25" />
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
      <Listoffeaturedproduct
        featuredproduct={featuredproduct}
        product={product}
      />
      <Footer />
    </div>
  );
};

export default Viewproduct;

const Listoffeaturedproduct = ({ featuredproduct, product }) => {
  return (
    <div className="px-[5%] md:px-[10%] mt-16">
      <h1 className="text-2xl text-[#374151] flex justify-center font-bold">
        Featured Products
      </h1>
      <div className="flex justify-center">
        <nav className="w-20 h-0.5 rounded-lg bg-[rgb(235,90,12)]"></nav>
      </div>
      <div className=" flex flex-wrap mt-7 justify-between">
        {featuredproduct.map((featureproduct) => {
          const {
            id,
            name,
            description,
            rating,
            price,
            imgSrc,
            description1,
            category,
            offerPrice,
          } = featureproduct;
          return (
            <Link
              href={`/Products/${featureproduct.id}`}
              key={featureproduct.id}
              className="mb-7 cursor-pointer w-[45%] sm:w-[30%] md:w-[23%] xl:w-[18%]"
            >
              <aside>
                <div className="bg-[#f0f0f2] rounded-lg w-[100%]">
                  <Image
                    src={imgSrc}
                    alt={name}
                    width={250}
                    className="hover:scale-110 transition-all duration-300"
                  />
                </div>
                <h1 className="mt-2 text-sm text-[#374151]">{name}</h1>
                <p className="text-gray-600 text-[0.75rem] truncate">
                  {name} has {description}
                </p>
                <div className="flex mt-1">
                  <p className="text-sm text-[#374151]">{rating}</p>
                  <nav className="ml-3 flex">
                    <IoStar className="text-[rgb(235,90,12)]" />
                    <IoStar className="text-[rgb(235,90,12)]" />
                    <IoStar className="text-[rgb(235,90,12)]" />
                    <IoStar className="text-[rgb(235,90,12)]" />
                    <IoStar className="text-[rgb(213,174,153)]" />
                  </nav>
                </div>
                <div className="mt-3 flex justify-between">
                  <p className="text-sm xl:text-lg text-[#374151]">{price}</p>
                  <button className=" cursor-pointer border-1 rounded-xl px-2 py-1 text-[0.7rem] text-gray-400">
                    Buy now
                  </button>
                </div>
              </aside>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
