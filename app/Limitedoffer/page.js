import { FaArrowRightLong } from "react-icons/fa6";
import { assets } from "@/assets/assets";
import Image from "next/image";
const Limitedoffer = () => {
  return (
    <div>
      <aside className="bg-[rgb(230,233,242)] flex justify-between w-[80%] pt-5 pb-#2 px-15 mt-7 mx-[10%] rounded-lg">
        <div className="mt-15">
          <p className="text-[rgb(235,90,12)]">Hurry up only few left!</p>
          <h1 className="text-[#374151] w-[70%] leading-11 mt-2 text-4xl font-bold">
            Next-Level Gaming Starts Here-Discover PlayStation 5 Today!
          </h1>
          <div className="flex mt-7">
            <button className="hover:bg-[rgb(159,87,47)] px-6 text-sm py-3 cursor-pointer text-white font-bold rounded-3xl bg-[rgb(235,90,12)]">
              Shop Now
            </button>
            <div className="hover:text-[rgb(235,90,12)] flex ml-5 mt-3 cursor-pointer">
              <p className="text-[#374151] hover:text-[rgb(235,90,12)]">
                Explore Now
              </p>
              <FaArrowRightLong className="mt-1 ml-3" />
            </div>
          </div>
        </div>
        <div>
          <Image
            src={assets.playstation_image}
            alt="ps5"
            width={350}
            height={200}
            className="mr-70"
          />
        </div>
      </aside>
    </div>
  );
};

export default Limitedoffer;
