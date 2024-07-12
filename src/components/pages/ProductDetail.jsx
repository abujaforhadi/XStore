import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [carts,setCarts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.in/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.product));
  }, [id,carts]);

  if (!product) {
    return <div>Loading...</div>;
  }


   const handleAdd = () => {
    setCarts(prevSetCarts => [...prevSetCarts,product])
   }

  return (
    <div className="mt-4 mx-20">
      <Navbar />
      <div>
        <div className=" grid grid-cols-2 mt-8 mb-14 gap-10">
          <div className="  bg-softbg flex justify-center items-center w-auto">
            <img
              src={product.image}
              alt=""
              className=" w-96 mix-blend-multiply"
            />
          </div>

          <div className=" flex items-center my-10">
            <div className="">
              <h1 className=" text-3xl font-bold ">{product.title}</h1>
              <h1 className=" text-3xl font-bold text-gray-600">
                ${product.price}
              </h1>
              <p className=" mt-6 mb-16 text-lg text-gray-600">
                {product.description}
              </p>
              <p className=" my-2 text-lg font-bold">
                Brand{" "}
                <span className=" font-light text-gray-600 pl-6">
                  {product.brand}
                </span>
              </p>
              <p className=" my-2 text-lg font-bold">
                Model{" "}
                <span className=" font-light text-gray-600 pl-6">
                  {product.model}
                </span>
              </p>
              <p className=" my-2 text-lg font-bold">
                Color{" "}
                <span className=" font-light text-gray-600 pl-6">
                  {product.color}
                </span>
              </p>
              <button className=" mt-4 px-8 py-3 bg-blue-500 text-white text-xl" onClick={handleAdd}>
                Add to Bag
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
