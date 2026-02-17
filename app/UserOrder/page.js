"use client";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/page";
import Footer from "../Footer/page";
import Image from "next/image";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useRouter } from "next/navigation";
import { MdDeleteOutline } from "react-icons/md";

const UserOrder = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, [cartItems]);
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
      <div className="px-[10%] mt-4 md:mt-10">
        <p
          className="flex cursor-pointer text-gray-600 hover:text-[rgb(235,90,12)]"
          onClick={() => {
            (router.back(), window.scrollTo(0, 0));
          }}
        >
          <p>Home</p>
          <MdOutlineArrowBackIos className="mt-1" />
          <p>Cart</p>
        </p>
        <div className="px-[0%] lg:px-[5%] pt-3 md:pt-8 w-[100%] lg:w-[90%]">
          {cartItems.length === 0 ? (
            <p className="text-xl text-center">
              Your cart is empty..Go Shopping!!
            </p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div key={item.id}>
                  <aside className="mt-5 flex text-[#374151]">
                    <Image
                      src={item.imgSrc}
                      alt={item.id}
                      width={140}
                      className="bg-gray-300 h-[9rem] rounded-lg"
                    />
                    <div className="w-[100%]">
                      <div className="flex justify-between">
                        <p className="mt-1 text-[1.1rem] w-[50%] ml-5 ">
                          {item.name}
                        </p>
                        <MdDeleteOutline
                          onClick={() => handleremove(item.id)}
                          className="p-1 text-4xl cursor-pointer"
                        />
                      </div>
                      <p className="text-sm ml-5">{item.description}</p>
                      <p className="text-[rgb(235,90,12)] text-sm ml-5 mt-9">
                        Great deal
                      </p>
                      <aside className="flex">
                        <p className="text-[1rem] text-black ml-5 mt-2">
                          {item.price}
                        </p>
                        <p className="px-2 h-6 mt-2 text-red-600 ml-3 rounded-lg border-2 text-sm border-[rgb(235,90,12)] ">
                          -50%
                        </p>
                      </aside>
                    </div>
                  </aside>
                </div>
              ))}
              <div className="flex float-right">
                <p
                  className="mt-7 cursor-pointer text-white text-sm pt-3 bg-pink-400 mr-5 w-22 text-center px-2 py-1 rounded-sm "
                  onClick={handleClear}
                >
                  Clear all
                </p>
                <p
                  className="mt-7 cursor-pointer text-white text-sm pt-3 bg-pink-400 w-26 text-center p-2 rounded-sm"
                  onClick={handleClear}
                >
                  Shop all cart
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserOrder;
