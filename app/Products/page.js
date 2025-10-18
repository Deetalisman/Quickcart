"use client"
import { products } from "@/assets/productData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoStar } from "react-icons/io5";
import Viewproduct from "./Viewproduct/page";
const Products = () => {
  const [pid, setPid] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* {pid !== "" && <Viewproduct pid={pid} />} */}
      <div className="px-[10%] mb-10 mt-20">
        <p className="text-2xl font-bold">Popular Products</p>
        <aside className="flex flex-wrap mt-3 justify-between">
          {products.map((product) => {
            const { id, name, description, rating, price, imgSrc } = product;
            return (
              <aside key={id} className="mb-7 cursor-pointer w-[18%]">
                <div className="bg-[#f0f0f2] rounded-lg w-[100%]">
                  <Image
                    src={imgSrc}
                    alt={name}
                    width={250}
                    className="hover:scale-110 transition-all duration-300"
                  />
                </div>
                <h1 className="mt-2">{name}</h1>
                <p className="text-gray-600 text-[0.75rem] truncate">
                  {name} has {description}
                </p>
                <div className="flex mt-1">
                  <p className="text-sm">{rating}</p>
                  <nav className="ml-3 flex">
                    <IoStar className="text-[rgb(235,90,12)]" />
                    <IoStar className="text-[rgb(235,90,12)]" />
                    <IoStar className="text-[rgb(235,90,12)]" />
                    <IoStar className="text-[rgb(235,90,12)]" />
                    <IoStar className="text-[rgb(213,174,153)]" />
                  </nav>
                </div>
                <div className="mt-3 flex justify-between">
                  <p className="text-lg">{price}</p>
                  <Link href="">
                    <button
                      onClick={() => setPid(products.id)}
                      className="ml-10 cursor-pointer border-1 rounded-xl px-2 py-1 text-[0.7rem] text-gray-400"
                    >
                      Buy now
                    </button>
                  </Link>
                </div>
              </aside>
            );
          })}
        </aside>
        <nav className="flex justify-center mt-3">
          <Link href="/Product/Viewproduct">
            <button className="ml-10 cursor-pointer border-1 rounded-xl px-12 py-3 text-[0.9rem] text-gray-400">
              See more
            </button>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Products;
