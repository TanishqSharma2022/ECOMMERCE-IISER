"use client";

import { MouseEventHandler, use, useState } from "react";

import { CarouselDefault } from "./CarouselDefault";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import toast from "react-hot-toast";
import { RadioGroup } from '@headlessui/react'
import { ShoppingCart, ShoppingCartIcon } from "lucide-react";



function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface ProductCard {
  data: Product;
}



const sizes = ["XS", "S", "M", "L", "XL", "XXL"]



const Id: React.FC<ProductCard> = ({ params }: any) => {
  const { id } = params;

  const product = use(getProduct(id));
  const cart = useCart();
  const [size, setSize] = useState("");
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItems(product);
  };

  const [selected, setSelected] = useState(sizes[0])
  product.size = selected;

  return (
    <>
      <div className="bg-white py-4 border border-black">
        <div className="px-12 flex flex-col justify-center lg:flex-row lg:justify-center  items-center gap-x-5">
          {/* Image gallery */}
          <CarouselDefault images={product.images} />

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:flex lg:max-w-7xl  w-[100%]  flex-col">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.name}
                <br></br>
                {/* CCategory name */}
                <span className="text-lg font-sans text-gray-500">
                  Regulars
                </span>
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0 py-4">
              <h2 className="sr-only">Product information</h2>
              <p className="text-xl tracking-tight text-gray-900">
                <span>&#8377;</span>
                {product.price}
                <br></br>

                <span className="text-sm">
                  {" "}
                  incl. of taxes<br></br>
                  (Also includes all applicable duties)
                </span>
              </p>

              <form className="mt-10  ">
                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Size guide
                    </a>
                  </div>


                  <div className="w-full px-4 py-16 ">
      <div className="mx-auto w-full border">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="grid grid-cols-3 grid-rows-2 gap-4">
            {sizes.map((plan) => (
              <RadioGroup.Option
                key={plan}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                      : ''
                  }
                  ${
                    checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (

                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                   

                            {plan}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? 'text-sky-100' : 'text-gray-500'
                            }`}
                          >
                            


                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>







                </div>

                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={onAddToCart}
                >
                  <ShoppingCartIcon size={24} className="mx-2" /> Add to bag
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <h3 className="text-sm font-medium text-gray-900">
                    Description
                  </h3>
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function CheckIcon(props:any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


async function getProduct(id: string) {
  const resp = await fetch(
    `https://ecommerce-iiser.vercel.app/api/products/${id}`,
    { next: { revalidate: 1 } }
  );
  const data = await resp.json();

  return data.product;
}

export const dynamic = "force-dynamic";

export default Id;


