import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Levelup = () => {
  return (
    <div className="mx-[5%] lg:mx-[10%] mb-20 sm:flex justify-center rounded-sm sm:justify-between  bg-[rgb(230,233,242)]">
      <Image
        src={assets.jbl_soundbox_image}
        alt="soundbox"
        height={100}
        width={200}
        className="sm:ml-7 sm:w-30 ml-[27%]  md:w-50 "
      />
      <div className="text-center mt-7 lg:mt-12 xl:mt-17 sm:ml-0 ml-25  pb-5  w-[60%] sm:w-[35%] md:w-[25%]">
        <h1 className="text-lg md:text-2xl leading-5 md:leading-7 lg:text-3xl font-bold text-[#374151]">
          Level Up Your Gaming Experience
        </h1>
        <p className="text-[0.78rem] md:text-sm mt-1 text-gray-400">
          From immersive sound to precise controls everything you need to win
        </p>
        <div className="flex justify-center">
          <Link href="/Products/Allproduct">
            <button className="mt-2 flex cursor-pointer bg-[rgb(235,90,12)] rounded-sm px-7 py-2 text-[0.9rem] text-white">
              Buy now
              <FaArrowRightLong className="mt-1 ml-3" />
            </button>
          </Link>
        </div>
      </div>
      <Image
        src={assets.sm_controller_image}
        alt="soundbox"
        width={220}
        className="sm:w-30 md:w-50 w-[100%]"
      />
    </div>
  );
};

export default Levelup;
