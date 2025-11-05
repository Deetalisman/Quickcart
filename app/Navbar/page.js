"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { BsCartFill } from "react-icons/bs";
const Navbar = ({ account, setAccount }) => {
  function handleAccount() {
    setAccount(true);
    console.log(account);
  }
  const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <div>
      <div className="px-[5%] lg:px-[10%] flex justify-between py-4">
        <Link href="/">
          <h1 className="text-3xl text-[#374151] font-bold">
            <span className="text-[rgb(235,90,12)]">Q</span>uickCart
          </h1>
        </Link>
        <div className="hidden md:flex">
          <Navlink />
        </div>
        <aside className="flex mt-1">
          <Link href="/UserOrder">
            <div className="relative">
              {existingCart.length != 0 && (
                <p className="absolute -top-4 right-3 bg-gray-300 p-1 rounded-[50%] text-[0.7rem]">
                  {existingCart.length}
                </p>
              )}
              <BsCartFill className="text-2xl  mr-6 font-bold text-[#3f5072] mt-0.5 cursor-pointer" />
            </div>
          </Link>
          <div
            className="flex cursor-pointer text-[#374151]"
            onClick={handleAccount}
          >
            <FaRegUser className="mr-2 mt-1" />
            <p className="text-gray-600 text-sm mt-1">Account</p>
          </div>
        </aside>
      </div>
      <hr className="text-gray-400"></hr>
      <aside className="md:hidden flex justify-center mt-1 mb-1">
        <Navlink />
      </aside>
      <hr className="text-gray-400"></hr>
    </div>
  );
};

export default Navbar;

const Navlink = () => {
  return (
    <div>
      <aside className="flex">
        <ul className="flex justify-between text-gray-600 w-[15rem] lg:w-[20rem] mt-1">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/Products/Allproduct">
            <li>Shop</li>
          </Link>
          <Link href="/">
            <li>About Us</li>
          </Link>
          <Link href="/">
            <li>Contact</li>
          </Link>
        </ul>
        <Link href="/Sellerdashboard">
          <button className="ml-4 lg:ml-10 cursor-pointer border-1 rounded-xl p-2 text-[0.7rem] text-gray-400">
            Seller Dashboard
          </button>
        </Link>
      </aside>
    </div>
  );
};
