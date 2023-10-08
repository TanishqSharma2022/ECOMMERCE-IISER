"use client";

import useCart from "@/hooks/use-cart";


import Link from "next/link";
import React, { MouseEventHandler } from "react";



interface ProductProps {
  _id: string;
  name: string;
  categoryId: string;
  images: Array<image>;
  price: number;
  colorId: string;
  description: string;
  size: string
}

interface image {
  url: string;
  id: string;
}

const Products: React.FC<ProductProps> = (props) => {
  const cart = useCart();

  const addtoCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItems(props);
  };

  return (
    <div key={props._id} className="group relative ">
      <div className="w-[100%]  overflow-hidden rounded-md bg-muted group-hover:brightness-75 lg:h-auto group-hover:border-gray-200">
        <img
          src={props.images[0].url}
          className=" h-full w-full  object-contain lg:h-full lg:w-full group-hover:opacity-0"
        />
        <img
          src={props.images[1].url}
          className="  overflow-hidden object-contain  top-0 opacity-0 group-hover:opacity-100 transition-all duration-700 absolute"
        />
        <div className=" opacity-0  overflow-hidden object-contain top-[50%] left-[50%] bg-black text-white group-hover:opacity-100 transition-all duration-100 absolute"></div>
      </div>

      

      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm font-bold text-gray-700">
            <Link href={`/product/${props._id}`}>
                            <span
                              aria-hidden="true"
                              className="absolute  inset-0"
                            />
                            {props.name}
                          </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{props.colorId}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">Rs. {props.price}</p>
      </div>
    </div>
  );
};

export default Products;
