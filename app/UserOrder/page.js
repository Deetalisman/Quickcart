"use client";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/page";
import Footer from "../Footer/page";
import Image from "next/image";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useRouter } from "next/navigation";

const UserOrder = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);
  const handleClear = () => {
    const updatedCart = cartItems.filter((item) => item.id === 100);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const handleremove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  return (
    <div>
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
      <div className="px-[5%] sm:px-[10%] pt-10 w-[26rem] sm:w-[50rem]">
        <h1 className="text-xl text-[#374151]">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id}>
              <aside className="mt-5 flex text-[#374151]  justify-between">
                <div className="flex">
                  <Image
                    src={item.imgSrc}
                    alt={item.id}
                    width={80}
                    className="bg-gray-300 rounded-lg"
                  />
                  <p className="mt-7 ml-5 ">{item.name}</p>
                </div>
                {/* <p className="mt-5 mr-5">{item.category}</p> */}
                <p className="mt-7 mr-5">{item.price}</p>
                <button
                  onClick={() => handleremove(item.id)}
                  className="p-1 bg-gray-400 text-white h-6 text-[0.8rem] cursor-pointer mt-7 rounded-sm"
                >
                  Delete
                </button>
              </aside>
            </div>
          ))
        )}
        <div className="flex">
          <p
            className="mt-7 cursor-pointer text-white text-sm pt-3 bg-pink-400 mr-5 w-24 text-center p-2 rounded-sm "
            onClick={handleClear}
          >
            Clear all
          </p>
          <p
            className="mt-7 cursor-pointer text-white text-sm pt-3 bg-pink-400 w-28 text-center p-2 rounded-sm"
            onClick={handleClear}
          >
            Shop all cart
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserOrder;
