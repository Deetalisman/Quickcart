import { Outfit } from "next/font/google";
import Listoffeaturedproduct from "./Listoffeaturedproduct/page";
import Footer from "@/app/Footer/page";
const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata = {
  title: "Quickcart Productid",
  description: "E-Commerce with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"${Outfit.className} antialiased"}>
        {children}
        <Listoffeaturedproduct />
        <Footer />
      </body>
    </html>
  );
}
