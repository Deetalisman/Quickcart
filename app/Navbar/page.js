"use client";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
const Navbar = ({ account, setAccount }) => {
  function handleAccount() {
    setAccount(true);
    console.log(account);
  }
  return (
    <div>
      <div className="px-[10%] flex justify-between py-4">
        <Link href="/">
          <h1 className="text-3xl font-bold">
            <span className="text-[rgb(235,90,12)]">Q</span>uickCart
          </h1>
        </Link>
        <aside className="flex">
          <ul className="flex justify-between text-gray-600 w-[20rem] mt-1">
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
            <button className="ml-10 cursor-pointer border-1 rounded-xl p-2 text-[0.7rem] text-gray-400">
              Seller Dashboard
            </button>
          </Link>
        </aside>
        <aside className="flex mt-1">
          <CiSearch className="text-xl mr-4 mt-0.5 cursor-pointer" />
          <div className="flex cursor-pointer" onClick={handleAccount}>
            <FaRegUser className="mr-2 mt-1" />
            <p className="text-gray-600">Account</p>
          </div>
        </aside>
      </div>
      <hr></hr>
    </div>
  );
};

export default Navbar;
