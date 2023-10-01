"use client";


import { use } from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Id({ params }: any) {
  const { id } = params;

  const product = use(getProduct(id));

  return (
    <>
      <div className="bg-white py-4 border border-black">
        <div className="px-12 flex flex-col justify-center lg:flex-row lg:justify-center  items-center gap-x-5">
          {/* Image gallery */}
            <div className="aspect-h-4 aspect-w-3 max-w-md overflow-hidden  rounded-lg flex gap-x-3">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center"
              />
              </div>
            <div className="aspect-h-4 aspect-w-3 max-w-md overflow-hidden border hidden rounded-lg lg:flex">
               <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center"
              />
          </div>

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:flex lg:max-w-7xl  w-[100%]  flex-col">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.name}<br></br>
                {/* CCategory name */}
                <span className="text-lg font-sans text-gray-500">Regulars</span> 

              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0 py-4">
              <h2 className="sr-only">Product information</h2>
              <p className="text-xl tracking-tight text-gray-900">
                <span>&#8377;</span>
                {product.price}<br></br>

<span className="text-sm">  incl. of taxes<br></br>
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
                  <div className="grid grid-cols-4 py-3 gap-4">
                    <button className="rounded p-2 border  hover:border-black">XXS</button>
                    <button className="rounded p-2 border  hover:border-black">XS</button>
                    <button className="rounded p-2 border  hover:border-black">S</button>
                    <button className="rounded p-2 border hover:border-black ">M</button>
                    <button className="rounded p-2 border hover:border-black ">L</button>
                    <button className="rounded p-2 border  hover:border-black">XL</button>
                    <button className="rounded p-2 border hover:border-black">XXL</button>
                    <button className="rounded p-2 border hover:border-black ">XXXL</button>


                  </div>
                </div>
              

                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to bag
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">

                  <p className="text-base text-gray-900">{product.desc}</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>
              </div>
            </div>
          </div>
        </div>


        {/* SUGGESTED ITEMS */}

        <div className="p-6 border h-full py-5">
          <h1 className="font-sans font-bold text-3xl py-5">Suggested Products</h1>
          <div className=" lg:flex  grid grid-cols-2  gap-6 p-2 border">
          <div className="  max-w-lg    lg:w-[20%] w-40%  ">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="max-w-7 w-full object-cover object-center"
              />
              <div className="p-3 flex-col items-center">

              <div className="flex justify-between items-center">
              <h3 className="font-bold text-sm ">{product.name}</h3>
              <p className="mt-1 text-sm text-gray-500">
              <span>&#8377;</span>
                
                {product.price}</p>
              </div>
              <p className="text-sm font-medium  text-gray-900">{product.color}</p>
              </div>
              </div>
              
              <div className="  max-w-lg  lg:w-[20%] w-40%  ">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="max-w-7 w-full object-cover object-center"
              />
              <div className="p-3 flex-col items-center">

              <div className="flex justify-between items-center">
              <h3 className="font-bold text-sm ">{product.name}</h3>
              <p className="mt-1 text-sm text-gray-500">
              <span>&#8377;</span>
                
                {product.price}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">{product.color}</p>
              </div>
              </div>

              <div className="  max-w-lg   lg:w-[20%] w-40%  ">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="max-w-7 w-full object-cover object-center"
              />
              <div className="p-3 flex-col items-center">

              <div className="flex justify-between items-center">
              <h3 className="font-bold text-sm ">{product.name}</h3>
              <p className="mt-1 text-sm text-gray-500">
              <span>&#8377;</span>
                
                {product.price}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">{product.color}</p>
              </div>
              </div>
              
              <div className="  max-w-lg  lg:w-[20%] w-40%  ">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="max-w-7 w-full object-cover object-center"
              />
              <div className="p-3 flex-col items-center">

              <div className="flex justify-between items-center">
              <h3 className="font-bold text-sm ">{product.name}</h3>
              <p className="mt-1 text-sm text-gray-500">
              <span>&#8377;</span>
                
                {product.price}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">{product.color}</p>
              </div>
              </div>
            
              <div className="  max-w-lg  lg:w-[20%] w-40%  ">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="max-w-7 w-full object-cover object-center"
              />
              <div className="p-3 flex-col items-center">

              <div className="flex justify-between items-center">
              <h3 className="font-bold text-sm ">{product.name}</h3>
              <p className="mt-1 text-sm text-gray-500">
              <span>&#8377;</span>
                
                {product.price}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">{product.color}</p>
              </div>
              </div>
          </div>
        </div>


      </div>



    </>
  );
}

async function getProduct(id: string) {

  const resp = await fetch(`http://127.0.0.1:3000/api/products/${id}`);
  const data = await resp.json();

  return data.product;
}





export const dynamic = "force-dynamic"
