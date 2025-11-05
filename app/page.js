"use client";
import Navbar from "./Navbar/page";
import Limitedoffer from "./Limitedoffer/page";
import Products from "./Products/page";
import Featured from "./Featured/page";
import Levelup from "./Levelup/page";
import Subscribe from "./Subscribe/page";
import Footer from "./Footer/page";
import Account from "./Account/page";
import { useState } from "react";

export default function Home() {
  const [account, setAccount] = useState(false);
  return (
    <div className="bg-[rgb(255,255,255)] relative">
      <Navbar account={account} setAccount={setAccount} />
      {account && <Account account={account} setAccount={setAccount} />}
      <Limitedoffer />
      <Products />
      <Featured />
      <Levelup />
      <Subscribe />
      <Footer />
    </div>
  );
}
