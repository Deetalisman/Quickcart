const Subscribe = () => {
  return (
    <div className="px-[5%] lg:px-[10%] mb-10 flex justify-center text-center">
      <aside>
        <h1 className="text-3xl text-[#374151] font-bolds">
          Subscribe now & get 20% off
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Subscribe to our site to get 20% off any purchase you make foe a week
          and 50% off on delivery
        </p>
        <div className="mt-7 flex justify-center">
          <input
            type="text"
            placeholder="Enter your email..."
            className="p-2 border-1 rounded-tl-sm rounded-bl-sm border-gray-500 w-[25rem] lg:w-[35rem] text-sm"
          />
          <div className="flex justify-center">
            <button className=" flex cursor-pointer bg-[rgb(235,90,12)] rounded-tr-sm rounded-br-sm px-7 h-11 pt-3 text-[0.9rem] text-white">
              Subscribe
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Subscribe;
