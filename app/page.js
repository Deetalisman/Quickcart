import Image from "next/image";
import Navbar from "./Navbar/page";
import Limitedoffer from "./Limitedoffer/page";
import Products from "./Products/page";
import Featured from "./Featured/page";
import Levelup from "./Levelup/page";
import Subscribe from "./Subscribe/page";
import Footer from "./Footer/page";

export default function Home() {
  return (
    <div className="bg-[rgb(255, 255, 255)]">
      <Navbar />
      <Limitedoffer />
      <Products />
      <Featured />
      <Levelup />
      <Subscribe />
      <Footer />
    </div>
  );
}
