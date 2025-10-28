import Link from "next/link";
import { IoStar } from "react-icons/io5";
import Image from "next/image";
import { products } from "@/assets/productData";
const Listoffeaturedproduct = () => {
  const featuredproduct = products.filter((item) => item.id < 6);

  return (
    <div className="px-[5%] md:px-[10%] mt-16">
      <h1 className="text-2xl text-[#374151] flex justify-center font-bold">
        Featured Products
      </h1>
      <div className="flex justify-center">
        <nav className="w-20 h-0.5 rounded-lg bg-[rgb(235,90,12)]"></nav>
      </div>
      <div className=" flex flex-wrap mt-7 justify-between">
        {featuredproduct.map((featureproduct) => {
          const {
            id,
            name,
            description,
            rating,
            price,
            imgSrc,
            description1,
            category,
            offerPrice,
          } = featureproduct;
          return (
            <Link
              href={`/Products/${featureproduct.id}`}
              key={featureproduct.id}
              className="mb-7 cursor-pointer w-[45%] sm:w-[30%] md:w-[23%] xl:w-[18%]"
            >
              <aside>
                <div className="bg-[#f0f0f2] rounded-lg w-[100%]">
                  <Image
                    src={imgSrc}
                    alt={name}
                    width={250}
                    className="hover:scale-110 transition-all duration-300"
                  />
                </div>
                <h1 className="mt-2 text-sm text-[#374151]">{name}</h1>
                <p className="text-gray-600 text-[0.75rem] truncate">
                  {name} has {description}
                </p>
                <div className="flex mt-1">
                  <p className="text-sm text-[#374151]">{rating}</p>
                  <nav className="ml-3 flex">
                    <IoStar className="text-[rgb(235,90,12)]" />
                    <IoStar className="text-[rgb(235,90,12)]" />
                    <IoStar className="text-[rgb(235,90,12)]" />
                    <IoStar className="text-[rgb(235,90,12)]" />
                    <IoStar className="text-[rgb(213,174,153)]" />
                  </nav>
                </div>
                <div className="mt-3 flex justify-between">
                  <p className="text-sm xl:text-lg text-[#374151]">{price}</p>
                  <button className=" cursor-pointer border-1 rounded-xl px-2 py-1 text-[0.7rem] text-gray-400">
                    Buy now
                  </button>
                </div>
              </aside>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Listoffeaturedproduct;
