"use client";

import React, { Fragment, useState, useEffect, use, useRef } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/20/solid";

import Link from "next/link";
import Products from "@/app/components/Products";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const product_list = use(getProducts());
  const products_by_date = product_list[0].reverse()
  // details are coming from server thats why late also no data on initial render
  const product_details = product_list[1];

  return (
    <>
      <div>
      
        <div className="hero-section h-[80vh] md:h-[60vh] flex flex-col md:flex-row ">
          <div className="md:w-[50%] w=[100%] h-full iiserb_hero flex flex-col justify-center items-center">
            <a className="text-4xl font-bold p-8">IISERB MERCH</a>
            <Link href="/iiserb">
              <button className="h-[50px] w-full cursor-pointer text-white p-4 bg-blue-600">
                Explore
              </button>
            </Link>
          </div>

          <div className="md:w-[50%] h-full w=[100%] bg-gray-200 flex flex-col justify-center items-center">
            <a className="text-4xl font-bold p-8">REGULARS</a>
            <Link href="/regulars">
              <button className="h-[50px] text-white cursor-pointer w-full p-4 bg-blue-600">
                Explore
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-white">
          <div>
            <Transition.Root show={mobileFiltersOpen} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-40 lg:hidden"
                onClose={setMobileFiltersOpen}
              >
                <Transition.Child
                  as={Fragment}
                  enter="transition-opacity ease-linear duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity ease-linear duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 z-40 flex">
                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                      <div className="flex items-center justify-between px-4">
                        <h2 className="text-lg font-medium text-gray-900">
                          Filters
                        </h2>
                        <button
                          type="button"
                          className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                          onClick={() => setMobileFiltersOpen(false)}
                        >
                          <span className="sr-only">Close menu</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition.Root>

            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                  Our Products
                </h1>

                <div className="flex items-center"></div>
              </div>

              <section
                aria-labelledby="products-heading"
                className="pb-24 pt-6"
              >
                <h2 id="products-heading" className="sr-only">
                  Products
                </h2>

                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                  <div className="Categories divide-y mx-auto w-full max-w-md rounded-2xl  ">

                  <div className="p-4">
                      <div className="font-bold text-xl py-4">Colors</div>

                      <div className="flex gap-4">
                        {product_details.color.map((clr: any, index: any) => {
                          return (
                            <div className="items-center p-2 border rounded-2xl border-black cursor-pointer hover:bg-muted">
                              <Label htmlFor="option-one">{clr}</Label>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="font-bold text-xl py-4">Prices</div>

                      <div className="flex gap-4">
                        {product_details.price.map((price: any, index: any) => {
                          return (
                            <div className="items-center p-2 border rounded-2xl border-black cursor-pointer hover:bg-muted">
                              <Label htmlFor="option-one">{price}</Label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-3 border  ">
                    <div className="bg-white">
                      <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
                        <div className="   mt-6 grid grid-cols-1  gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 p-4">
                          {products_by_date.map((product: any) => {
                            return (
                              <div
                                className=" "
                                key={product._id}
                              >
                                <Products key={product._id} {...product} />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
        


      </div>
    </>
  );
}

async function getProducts() {
  const resp = await fetch(`https://ecommerce-iiser.vercel.app/api/products`, {
    next: { revalidate: 10 },
  });
  const dresp = await fetch(
    `https://ecommerce-iiser.vercel.app/api/products/details`,
    { next: { revalidate: 1 } }
  );
  const details = await dresp.json();
  const data = await resp.json();
  return [data.product, details.product];
}

// async function getDetails() {

//   const dresp = await fetch(`http://127.0.0.1:3000/api/products/details`, {next: {revalidate: 1}});
//   const details = await dresp.json();
//   return details.product;
// }

export const dynamic = "force-dynamic";
