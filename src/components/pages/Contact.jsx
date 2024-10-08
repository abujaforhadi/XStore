import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Contact = () => {
  return (
    <div className=" mt-4 mx-20">
      <Navbar />
      <div className=" my-4">
        <img src="/public/assets/contact.png" alt="" />
        <h1 className=" mt-8 font-bold  text-4xl">Contact US</h1>
        <div className=" flex flex-col gap-4 mt-8 mb-14">
          <div className=" flex items-center gap-4">
            <img src="/public/assets/phone.svg" alt="" />
            <p className=" text-lg text-gray-600">+017*********-4</p>
          </div>
          <div className=" flex items-center gap-4">
            <img src="/public/assets/email.svg" alt="" />
            <p className=" text-lg text-gray-600">abujaforhadi@gmail.com</p>
          </div>
          <div className=" flex items-center gap-4">
            <img src="/public/assets/location.svg" alt="" />
            <p className=" text-lg text-gray-600">Dhaka,Bangladesh</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
