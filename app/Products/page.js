"use client";
import { products } from "@/assets/productData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoStar } from "react-icons/io5";
import UserOrder from "../UserOrder/page";
const Products = () => {
  const [me, setMe] = useState(false);

  return (
    <div>
      {me && <UserOrder />}
      <div className="px-[5%] lg:px-[10%] mb-10 mt-10">
        <p className="text-2xl font-bold text-[#374151]">Popular Products</p>
        <aside className="flex flex-wrap mt-7 justify-between">
          {products.map((product) => {
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
            } = product;
            return (
              <Link
                href={`/Products/${product.id}`}
                key={product.id}
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
        </aside>
        <nav className="flex justify-center mt-3">
          <Link href="/Products/Allproduct">
            <button className="ml-10 hover:bg-[rgb(235,90,12)] hover:text-white cursor-pointer border-1 rounded-xl px-6 sm:px-12 py-2 sm:py-3 text-[0.8rem] sm:text-[0.9rem] text-gray-400">
              See more
            </button>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Products;
