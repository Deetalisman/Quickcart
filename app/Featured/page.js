import { assets } from "@/assets/assets";
import Image from "next/image";
const Featured = () => {
  return (
    <div className="px-[5%] lg:px-[10%] mt-20 mb-20">
      <h1 className="text-2xl text-[#374151] flex justify-center font-bold">
        Featured Products
      </h1>
      <div className="flex justify-center">
        <nav className="w-20 h-0.5 rounded-lg bg-[rgb(235,90,12)]"></nav>
      </div>
      <aside className="mt-10 flex flex-wrap justify-center sm:justify-between">
        <div className="relative group bg-amber-50 w-[80%] sm:w-[45%] lg:w-[30%] hover:opacity-80">
          <Image
            src={assets.girl_with_headphone_image}
            alt="girlwithheadphone"
            width={400}
          />
          <div className="absolute group-hover:bottom-8 0 transition-all duration-400 bottom-5 w-fit px-4 lg:px-7 text-white">
            <h1 className="font-bold text-lg xl:text-2xl">Unparalled Sound</h1>
            <p className=" mt-1 xl:mt-2 w-[100%] xl:w-[70%] xl:text-md text-sm">
              Experience crystal-clear audio with premium headphones
            </p>
            <button className="mt-1 cursor-pointer bg-[rgb(235,90,12)] rounded-sm px-5 lg:px-7 py-2 text-[0.7rem] lg:text-[0.9rem] text-white">
              Buy now
            </button>
          </div>
        </div>
        <div className="relative group bg-amber-50 mt-7 sm:mt-0 w-[80%] sm:w-[45%] lg:w-[30%] hover:opacity-80">
          <Image
            src={assets.girl_with_earphone_image}
            alt="girlwithheadphone"
            width={400}
          />
          <div className="absolute  group-hover:bottom-8 transition-all duration-400 bottom-5 w-fit px-4 lg:px-7 text-white">
            <h1 className="font-bold text-lg xl:text-2xl">Stay Connected</h1>
            <p className="mt-1 xl:mt-2 w-[100%] xl:w-[70%]  xl:text-md text-sm">
              Compact and stylish earphones for every occasion
            </p>
            <button className="mt-1 cursor-pointer bg-[rgb(235,90,12)] rounded-sm px-5 lg:px-7 py-2 text-[0.7rem] lg:text-[0.9rem] text-white">
              Buy now
            </button>
          </div>
        </div>
        <div className="relative group bg-amber-50 lg:mt-0 mt-7  w-[80%] sm:w-[45%] lg:w-[30%] hover:opacity-80">
          <Image
            src={assets.boy_with_laptop_image}
            alt="girlwithheadphone"
            width={400}
          />
          <div className="absolute  group-hover:bottom-8 transition-all duration-400 bottom-5 w-fit px-4 lg:px-7 text-white">
            <h1 className="font-bold text-lg xl:text-2xl">
              Power in every Pixel
            </h1>
            <p className="mt-2 w-[100%] xl:w-[70%]  xl:text-md text-sm">
              Shop that latest laptop for work,gaming and more
            </p>
            <button className="mt-1 cursor-pointer bg-[rgb(235,90,12)] rounded-sm px-5 lg:px-7 py-2 text-[0.7rem] lg:text-[0.9rem] text-white">
              Buy now
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Featured;
