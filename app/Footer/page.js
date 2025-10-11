import Link from "next/link";

const Footer = () => {
  return (
    <div className="mb-5 mt-20">
      <aside className="mx-[10%] mb-15 flex justify-between">
        <div className="w-[50%]">
          <h1 className="text-2xl font-bold">
            <span className="text-[rgb(235,90,12)]">Q</span>uickCart
          </h1>
          <p className="text-gray-400 mt-5">
            The QuickCart shop is made for you to shop all favourite gadgets at
            ease and at best price. We offer originality,durabilty and best
            service with 5 month guarantee on any gadget. Our customer care
            service is avaliable at your service.
          </p>
        </div>
        <div>
          <h1 className="text-xl">Company</h1>
          <Link href="./">
            <p className="text-gray-400 mt-3">Home</p>
          </Link>
          <p className="text-gray-400 mt-2">About Us</p>
          <p className="text-gray-400 mt-2">Contact Us</p>
          <p className="text-gray-400 mt-2">Privacy Policy</p>
        </div>
        <div>
          <h1 className="text-xl">Get in touch</h1>
          <p className="text-gray-400 mt-3">+1-234-567-890</p>
          <p className="text-gray-400 mt-2">contact@talisman.com</p>
        </div>
      </aside>
      <hr></hr>
      <p className="text-center mt-3 text-gray-400">
        Copyright 2025@ Ismail All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
