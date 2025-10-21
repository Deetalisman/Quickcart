import { assets } from "@/assets/assets";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const Levelup = () => {
  return (
    <div className="mx-[5%] lg:mx-[10%] mb-20 flex rounded-sm justify-between  bg-[rgb(230,233,242)]">
      <Image
        src={assets.jbl_soundbox_image}
        alt="soundbox"
        height={100}
        width={200}
        className="ml-7 w-30 md:w-50"
      />
      <div className="text-center mt-7 lg:mt-12 xl:mt-17 pb-5 w-[35%] md:w-[25%]">
        <h1 className="text-lg md:text-2xl leading-5 md:leading-7 lg:text-3xl font-bold text-[#374151]">
          Level Up Your Gaming Experience
        </h1>
        <p className="text-[0.78rem] md:text-sm mt-1 text-gray-400">
          From immersive sound to precise controls everything you need to win
        </p>
        <div className="flex justify-center">
          <button className="mt-2 flex cursor-pointer bg-[rgb(235,90,12)] rounded-sm px-7 py-2 text-[0.9rem] text-white">
            Buy now
            <FaArrowRightLong className="mt-1 ml-3" />
          </button>
        </div>
      </div>
      <Image
        src={assets.sm_controller_image}
        alt="soundbox"
        width={220}
        className="w-30 md:w-50"
      />
    </div>
  );
};

export default Levelup;
