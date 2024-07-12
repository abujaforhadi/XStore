import React from "react";

const CartItem = () => {
  return (
    <div className=" my-14">
      <div className=" flex justify-between">
        <div className=" flex items-center gap-8">
          <div className=" h-28 w-28 bg-softbg flex justify-center items-center ">
            <img src="/public/assets/audio.png" alt="" className="w-20" />
          </div>
          <div className="">
            <h1 className=" text-3xl font-bold ">Product Name</h1>
            <h1 className=" text-3xl font-bold text-gray-600">$56</h1>
          </div>
        </div>
        <img
          src="/public/assets/delete.png"
          alt=""
          className=" h-14 w-14 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default CartItem;
