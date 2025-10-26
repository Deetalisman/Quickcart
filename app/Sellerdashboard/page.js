"use client";
import { MdAddToQueue } from "react-icons/md";
import { MdFormatListBulleted } from "react-icons/md";
import { IoMdCheckboxOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { productsDummyData } from "@/assets/assets";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import { assets } from "@/assets/assets";
import { orderDummyData } from "@/assets/assets";
import { RxFileText } from "react-icons/rx";
const Sellerdashboard = () => {
  return (
    <div className="h-[100vh]">
      <aside className="flex justify-between px-[5%]  py-3">
        <Link href="/">
          <h1 className="text-[#374151] text-3xl">
            <span className="text-[rgb(235,90,12)]">Q</span>uickCart
          </h1>
        </Link>
        <button className="px-8 cursor-pointer py-2 rounded-lg text-white bg-[#374151]">
          Log in
        </button>
      </aside>
      <hr className="text-gray-400"></hr>
      <Seller />
    </div>
  );
};

export default Sellerdashboard;

const Seller = () => {
  const [sellerView1, setSellerView1] = useState(true);
  const [sellerView2, setSellerView2] = useState(false);
  const [sellerView3, setSellerView3] = useState(false);
  const [allProduct, setAllProduct] = useState(productsDummyData);
  const [press, setPress] = useState(false);
  function handleSellerView1() {
    console.log("1");
    setSellerView1(true);
    setSellerView2(false);
    setSellerView3(false);
  }
  function handleSellerView2() {
    console.log("2");
    setSellerView1(false);
    setSellerView2(true);
    setSellerView3(false);
  }
  function handleSellerView3() {
    console.log("3");
    setSellerView1(false);
    setSellerView2(false);
    setSellerView3(true);
  }

  return (
    <div className="md:flex">
      <Sidebar
        sellerView1={sellerView1}
        setSellerView1={setSellerView1}
        sellerView2={sellerView2}
        setSellerView2={setSellerView2}
        sellerView3={sellerView3}
        setSellerView3={sellerView3}
        handleSellerView1={handleSellerView1}
        handleSellerView2={handleSellerView2}
        handleSellerView3={handleSellerView3}
      />
      <div className="w-[100%] md:w-[80%]">
        {sellerView1 && (
          <Productupload
            allProduct={allProduct}
            setAllProduct={setAllProduct}
            press={press}
            setPress={setPress}
          />
        )}
        {sellerView2 && (
          <Productlist allProduct={allProduct} setAllProduct={setAllProduct} />
        )}
        {sellerView3 && <Productorder />}
      </div>
    </div>
  );
};

const Sidebar = ({
  sellerView1,
  sellerView2,
  sellerView3,
  handleSellerView1,
  handleSellerView2,
  handleSellerView3,
}) => {
  return (
    <div className="text-[#374151] md:block flex justify-between h-auto md:border-r-2 w-[100%] sm:w-[80%] md:w-[13rem] lg:w-[15rem] border-gray-400">
      <div
        onClick={handleSellerView1}
        className={
          "flex h-15 p-5 pl-4 w-52 lg:w-60 lg:pl-10 pt-5 cursor-pointer relative " +
          (sellerView1 ? "bg-[#fdeee6]" : "hover:bg-gray-100")
        }
      >
        <MdAddToQueue className="text-xl mt-0.5" />
        <p className="lg:text-[1rem] mt-1 text-[0.9rem] ml-2 lg:ml-4">
          Add Product
        </p>
        {sellerView1 && (
          <nav className="absolute  w-1 h-15 right-0 top-0 bg-red-400"></nav>
        )}
      </div>
      <div
        onClick={handleSellerView2}
        className={
          "h-15 flex p-5 pl-4 w-52 lg:w-60 pt-5 lg:pl-10 cursor-pointer relative  " +
          (sellerView2 ? "bg-[#fdeee6]" : "hover:bg-gray-100")
        }
      >
        <MdFormatListBulleted className="text-xl mt-0.5" />
        <p className=" text-[0.9rem] lg:text-[1rem] ml-2 mt-1 lg:ml-4">
          Product list
        </p>
        {sellerView2 && (
          <nav className="absolute  w-1 h-15 right-0 top-0 bg-red-400"></nav>
        )}
      </div>
      <div
        onClick={handleSellerView3}
        className={
          "h-15 flex p-4 pt-5 pl-4 w-52 lg:w-60 lg:pl-10 cursor-pointer relative " +
          (sellerView3 ? "bg-[#fdeee6]" : "hover:bg-gray-100")
        }
      >
        <IoMdCheckboxOutline className="text-xl mt-0.5" />
        <p className="text-[0.9rem] text-[1rem] ml-4">Orders</p>
        {sellerView3 && (
          <nav className="absolute  w-1 h-15 right-0 top-0 bg-red-400"></nav>
        )}
      </div>
      <hr></hr>
    </div>
  );
};

const Productupload = ({ allProduct, setAllProduct, press, setPress }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() === "") {
      console.log("form is empty");
      setPress(true);
    } else {
      console.log("submitted");
      setPress(false);

      const newProduct = {
        id: Date.now(),
        userId: name,
        image,
        name,
        description,
        price,
        category,
      };
      console.log(newProduct);
      setAllProduct((allProduct) => [...allProduct, newProduct]);
      console.log(allProduct);
      setName("");
      setPrice("");
      setCategory("");
      setDescription("");
    }
  };
  // const basicSchema = yup.object().shape({
  //   name: yup.string().required(),
  //   price: yup.number().required("Input Price"),
  //   description: yup.string().required(),
  //   category: yup.string().required("Select a category"),
  // });
  // const { errors, touched, handleBlur } = useFormik({
  //   initialValues: {
  //     name: "",
  //     price: "",
  //     description: "",
  //     category: "",
  //   },
  //   validationSchema: basicSchema,
  // });
  return (
    <div className="pl-[5%] pt-10 h-[91vh] relative">
      <form onSubmit={handleSubmit}>
        {/* <input
          type="file"
          accept="image/*"
          name="image"
          id="file"
          className="cursor-pointer"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br></br> */}
        <small>
          <label className="text-sm">Product name</label>
          <br></br>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type here"
            className="border-1 p-2 mt-1 mb-3 w-70 border-gray-300"
          />
        </small>
        {name.trim() === "" && press && (
          <p className="text-red-300 absolute left-73 text-[0.7rem] top-26 flex justify-end text-sm">
            Please fill
          </p>
        )}
        <br></br>
        <small>
          <label className="text-sm">Description</label>
          <br></br>
          <textarea
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Type here"
            className="border-1 p-2 h-[7rem] w-70 mt-1 border-gray-300"
          />
          {description.trim() === "" && press && (
            <p className="text-red-300 absolute left-73 text-[0.7rem] top-64 flex justify-end text-sm">
              Please fill
            </p>
          )}
        </small>
        <br></br>
        <br></br>
        <div className="flex relative">
          <small>
            <label className="text-sm">Price</label>
            <br></br>
            <input
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Type here"
              className="border-1 p-2 w-30 mt-1 mb-3 border-gray-300"
            />
            {price.trim() === "" && press && (
              <p className="text-red-300 absolute left-0 text-[0.7rem] top-16 flex justify-end text-sm">
                Enter Price
              </p>
            )}
          </small>
          <div className="ml-9">
            <label className="text-sm">Category</label>
            <br></br>
            <select
              value={category}
              placeholder="select"
              id="category"
              onChange={(e) => setCategory(e.target.value)}
              className="p-2.5 text-gray-800 w-[8rem] border-1 text-[0.8rem] border-gray-300"
            >
              <option>Select</option>
              <option>Earphone</option>
              <option>Headphone</option>
              <option>Laptop</option>
              <option>Watch</option>
              <option>Camera</option>
            </select>
            {category.trim() === "" && press && (
              <p className="text-red-300 absolute left-64 text-[0.7rem] top-16 flex justify-end text-sm">
                select
              </p>
            )}
          </div>
          <br></br>
        </div>

        <button
          type="submit"
          className="p-2 cursor-pointer px-6 rounded-lg mt-5 bg-[rgb(235,90,12)] text-white"
        >
          Add
        </button>
      </form>
    </div>
  );
};

const Productlist = ({ allProduct }) => {
  useEffect(() => {
    console.log(allProduct);
  });
  return (
    <div className="p-[3%]">
      <p className="text-[#374151] font-bold">All Product</p>
      <aside className="mt-4">
        <table className="w-[100%] xl:w-[80%]">
          <thead className="border-1 border-gray-400 rounded-tl-xl rounded-tr-xl h-10">
            <tr>
              <th className="text-sm  text-[#374151]">Product</th>
              <th className="w-[15rem] text-sm text-[#374151]">
                <p className="text-center">Category</p>
              </th>
              <th className="w-[15rem] text-center text-sm text-[#374151]">
                Price
              </th>
              <th className="w-[10rem] text-left text-sm text-[#374151]">
                Action
              </th>
            </tr>
          </thead>
          {allProduct.map((alProduct) => {
            const { id, image, name, category, price } = alProduct;
            return (
              <tbody
                key={id}
                className=" text-gray-600 h-[2rem] text-[0.8rem] lg:text-[1rem] text-center border-1 border-gray-400"
              >
                <tr>
                  <td className="sm:flex mt-2 mb-2 w-[15rem] md:w-[14rem] lg:w-[22rem] ml-2 lg:ml-5">
                    <Image
                      src={image}
                      alt={name}
                      width={50}
                      height={50}
                      className="h-15 w-15 bg-gray-200 rounded-lg"
                    />
                    <p className="mt-1 sm:mt-5 ml-2 lg:ml-5">{name}</p>
                  </td>
                  <td>{category}</td>
                  <td>${price}</td>
                  <td>
                    <div className="bg-[#ea580c] flex pl-2 lg:pl-4 cursor-pointer rounded-lg px-1 py-2 lg:p-2 text-white text-sm w-16 lg:w-20">
                      <button className="text-[0.8rem] lg:text-[1rem]">
                        Visit
                      </button>
                      <FaArrowUpRightFromSquare className="pl-2 text-[1.2rem] lg:text-xl" />
                    </div>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </aside>
    </div>
  );
};

const Productorder = () => {
  return (
    <div className="p-[3%] w-[100%]">
      {orderDummyData.map((orderDummyDat) => {
        const { id, quantity, name, amount, address, status } = orderDummyDat;
        return (
          <div
            key={id}
            className="flex justify-between text-[#374151] py-5 text-[0.8rem] px-0 md:px-3 border-t-1 border-b-1 border-gray-200"
          >
            <aside className="block md:flex">
              <RxFileText className="bg-amber-200 w-10 h-10 p-2 rounded-lg text-[rgb(235,90,12)]" />
              <aside className="text-[0.8rem] md:ml-3">
                <p>{name}</p>
                <p>items: {quantity}</p>
              </aside>
            </aside>
            <aside>
              <p>{address.fullName}</p>
              <p>{address.area}</p>
              <p>{address.phoneNumber}</p>
            </aside>
            <aside>
              <p>Price: {amount}</p>
              <p>Status: {status}</p>
              <p>Ref: {address.pincode}</p>
              <p>Date: Wed 20th Oct 2025</p>
            </aside>
          </div>
        );
      })}
    </div>
  );
};
