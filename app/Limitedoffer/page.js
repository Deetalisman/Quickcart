import { FaArrowRightLong } from "react-icons/fa6";
import { assets } from "@/assets/assets";
import Image from "next/image";
const Limitedoffer = () => {
  return (
    <div>
      <aside className="bg-[rgb(230,233,242)] flex justify-between w-[90%] lg:w-[80%] pt-5 xl:pb-0 pb-5 px-10 lg:px-15 mt-7 mx-[5%] lg:mx-[10%] rounded-lg">
        <div className="xl:mt-12 md:mt-6 mt-5">
          <p className="text-[rgb(235,90,12)]">Hurry up only few left!</p>
          <h1 className="text-[#374151] w-[80%] xl:w-[70%] leading-6 md:leading-8 lg:leading-11 mt-2 text-[1.3rem] md:text-[1.7rem] lg:text-4xl font-bold">
            Next-Level Gaming Starts Here-Discover PlayStation 5 Today!
          </h1>
          <div className="flex mt-5">
            <button className="hover:bg-[rgb(159,87,47)] px-4 md:px-6 text-[0.7rem] md:text-sm py-3 cursor-pointer text-white font-bold rounded-3xl bg-[rgb(235,90,12)]">
              Shop Now
            </button>
            <div className="hover:text-[rgb(235,90,12)] text-[0.9rem] flex ml-5 mt-3 cursor-pointer">
              <p className="text-[#374151] hover:text-[rgb(235,90,12)]">
                Explore Now
              </p>
              <FaArrowRightLong className="mt-1 ml-1 md:ml-3" />
            </div>
          </div>
        </div>
        <div>
          <Image
            src={assets.playstation_image}
            alt="ps5"
            width={350}
            height={200}
            className="xl:mr-70 lg:mr-50 mr-20"
          />
        </div>
      </aside>
    </div>
  );
};

export default Limitedoffer;
