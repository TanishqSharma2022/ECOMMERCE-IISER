"use client"

import { use } from "react";
import Products from "../components/Products";

const IISERB =  () => {

    const products = use(getProduct())
    return(
        <>
            <div className="heading items-center text-center p-4">
                <h1 className="text-2xl font-bold font-sans">OUR REGULAR TSHIRTS</h1>
            </div>
        <div className="md:col-span-3 border p-4 ">
                    <div className="bg-white">
                      <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
                        <div className="   mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                          {products.map((product: any) => {
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
            <div className="p-4 w-full ">
    <h1> new items</h1>
                  </div>

        </>
    )
}

export default IISERB




async function getProduct() {

    const dresp = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_PATH}/api/products/regulars`, {next: {revalidate: 1}});
    const details = await dresp.json();
    return details.product;
  }
  
  