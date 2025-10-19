"use client";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
const Account = ({ account, setAccount }) => {
  function handlecloseacc() {
    setAccount(false);
    console.log(account);
  }
  const onSubmit = () => {
    console.log("submitted");
  };
  const basicSchema = yup.object().shape({
    email: yup.string().email("Enter a valid email").required("Required"),
    password: yup.string().required("Required"),
  });
  const { errors, values, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: {
        password: "",
        email: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <div className="absolute overflow-hidden  flex justify-center align-middle top-0 bg-[rgba(3,3,3,0.8)] w-[100%] h-[100vh]">
      <aside className="w-[28rem] mt-20  h-[34rem] py-3 bg-white rounded-lg">
        <h1
          onClick={handlecloseacc}
          className="text-right text-gray-500 cursor-pointer mr-4"
        >
          X
        </h1>
        <nav className="px-15">
          <div className="text-center">
            <h1 className="text-xl font-bold">
              Sign in to QuickCart Ecommerce
            </h1>
            <p className="text-sm mt-2 text-gray-400">
              Welcome back! Please sign in to continue
            </p>
          </div>
          <div className="text-center mt-5 cursor-pointer  flex justify-center py-1.5 border-1 rounded-lg  ">
            <FcGoogle className="text-xl" />
            <p className="text-sm text-gray-500 ml-3">Continue with Google</p>
          </div>
          <form className="mt-9 relative mb-6">
            <label className="text-[0.9rem]">Email address</label>
            <input
              type="text"
              placeholder="Enter your email address"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border-1 mt-1 mb-2 rounded-lg w-[100%] border-gray-4 text-sm px-2 py-2"
            />
            {errors.email && touched.email && (
              <p className="text-red-300 absolute right-0 text-[0.7rem] top-16 flex justify-end text-sm">
                {errors.email}
              </p>
            )}
            <label className=" text-[0.9rem]">Password</label>
            <input
              type="password"
              placeholder="Enter your email address"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border-1 mt-1 rounded-lg w-[100%] border-gray-4 text-sm px-2 py-2"
            />
            {errors.password && touched.password ? (
              <p className="text-sm flex absolute right-0 text-[0.7rem] top-35 justify-end text-red-300">
                {errors.password}{" "}
              </p>
            ) : (
              ""
            )}
            <br></br>
            <button
              onClick={handleSubmit}
              className="rounded-lg w-[100%] cursor-pointer  bg-[#404148] py-2 text-white mt-10"
            >
              Continue
            </button>
          </form>
        </nav>
        <hr className="text-gray-400"></hr>
        <p className="text-center text-gray-400 text-sm mt-3 mb-3">
          First time?{" "}
          <Link href="/">
            <span className="font-bold text-black cursor-pointer hover:underline">
              Sign up
            </span>
          </Link>
        </p>
        <hr className="text-gray-400"></hr>
        <p className="text-center mt-2 text-gray-400 text-sm">
          Secured by Talisman
        </p>
        <p className="text-center mt-1 text-sm text-[rgb(235,90,12)]">
          Development mode
        </p>
      </aside>
    </div>
  );
};

export default Account;
