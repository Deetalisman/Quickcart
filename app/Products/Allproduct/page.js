"use client";
import Footer from "@/app/Footer/page";
import Navbar from "@/app/Navbar/page";
import { products } from "@/assets/productData";
import Image from "next/image";
import Link from "next/link";
import { IoStar } from "react-icons/io5";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useRouter } from "next/navigation";

const Allproduct = () => {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <button
        className="cursor-pointer"
        onClick={() => {
          router.back(), window.scrollTo(0, 0);
        }}
      >
        <MdOutlineArrowBackIos className="text-2xl absolute left-3 xl:left-25 top-32 md:top-25" />
        <MdOutlineArrowBackIos className="text-2xl absolute left-5 xl:left-23 top-32 md:top-25" />
      </button>
      <div className="px-[5%] lg:px-[10%] mb-10 mt-10">
        <p className="text-2xl text-[#374151]">All Product</p>
        <div className="ml-13">
          <nav className="w-15 h-0.5 rounded-lg bg-[rgb(235,90,12)]"></nav>
        </div>
        <aside className="flex flex-wrap flex mt-5 justify-between">
          {products.map((product) => {
            const { id, name, description, rating, price, imgSrc } = product;
            return (
              <Link
                href={`/Products/${product.id}`}
                key={product.id}
                className="mb-7 cursor-pointer w-[45%] sm:w-[30%] md:w-[23%] lg:w-[18%]"
              >
                <aside key={id}>
                  <div className="bg-[#f0f0f2] rounded-lg w-[100%]">
                    <Image
                      src={imgSrc}
                      alt={name}
                      width={250}
                      className="hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <h1 className="mt-2 text-[0.9rem]">{name}</h1>
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
                    <p className="text-[0.95rem]">{price}</p>
                    <button className="ml-10 cursor-pointer border-1 rounded-xl px-2 py-1 text-[0.7rem] text-gray-400">
                      Buy now
                    </button>
                  </div>
                </aside>
              </Link>
            );
          })}
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Allproduct;
