"use client";

import React, {
  Fragment,
  useState,
  useEffect,
  use,
} from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/20/solid";

import Link from "next/link";
import Products from "@/app/components/Products";










function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const product_list = use(getProducts());


// details are coming from server thats why late also no data on initial render 
  const product_details = use(getDetails()) 
  const [loading, setLoading] = useState(true)

console.log(product_details)
if(product_details != null)  {
  useEffect(() => {
    setLoading(true)
  }, [])}


 

 


  const categories = ["IISERB MERCH", "REGULAR TSHIRTS"];

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

                      {/* Filters */}
                      {/* <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form> */}
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

              {/* <input placeholder="Search products...." type="text" value={phrase} onChange={(e) => {e.preventDefault();setPhrase(e.target.value)}}  /> */}

              <section
                aria-labelledby="products-heading"
                className="pb-24 pt-6"
              >
                <h2 id="products-heading" className="sr-only">
                  Products
                </h2>

                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                  <div className="Categories divide-y">
                    <Disclosure>
                      {({ open }) => (

                        <div>
                          <Disclosure.Button className="w-full items-center flex justify-between py-4 ">
                            Colors
                            <ChevronRightIcon
                              width={30}
                              className={open ? "rotate-90 transform" : ""}
                            />
                          </Disclosure.Button>
                          
                                   


                          <Disclosure.Panel  className="flex flex-col p-4">
                            {product_details && product_details.color.map((clr: any, index:any) => {
                              return (
                                <div key={index} className="flex  items-center">
                                      <a className="mx-4">{clr}</a>
                                </div>
                              );
                            })}
                          </Disclosure.Panel>
                        </div>
                      )}
                    </Disclosure>
                    <Disclosure>
                      {({ open }) => (

                        <div>
                          <Disclosure.Button className="w-full items-center flex justify-between py-4 ">
                            Categories
                            <ChevronRightIcon
                              width={30}
                              className={open ? "rotate-90 transform" : ""}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="flex flex-col p-4">
                            {categories.map((category, index) => {
                              return (
                                <div key={index} className="flex  items-center">
                                  <input type="checkbox" />
                                  <a className="mx-4">{category}</a>
                                </div>
                              );
                            })}
                          </Disclosure.Panel>
                        </div>
                      )}
                    </Disclosure>

                    <Disclosure as="div">
                      {({ open }) => (

                        <div>
                          <Disclosure.Button className="w-full items-center flex justify-between py-4">
                            Prices
                            <ChevronRightIcon
                              width={30}
                              className={open ? "rotate-90 transform" : ""}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel  className="flex flex-col p-4">
                            {!product_details && <p>Loading</p>}
                            {product_details && product_details.price.map((price: any, index:any) => {
                              return (
                                <div key={index} className="flex  items-center">
                                  <input type="checkbox" />
                                  <a className="mx-4">{price}</a>
                                </div>
                              );
                            })}
                          </Disclosure.Panel>
                        </div>
                      )}
                    </Disclosure>
                  </div>
                  <div className="md:col-span-3 border  ">
                    <div className="bg-white">
                      <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
                        <div className="   mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                          {product_list.map((product: any) => {
                            return (
                              <div className=" " key={product._id}>
                                <Products {...product} />
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

  const resp = await fetch(`http://127.0.0.1:3000/api/products`, {next: {revalidate: 10}});
  const data = await resp.json();
  return data.product;
}



async function getDetails() {

  const dresp = await fetch(`http://127.0.0.1:3000/api/products/details`, {next: {revalidate: 1}});
  const details = await dresp.json();
  return details.product;
}



export const runtime = "edge"