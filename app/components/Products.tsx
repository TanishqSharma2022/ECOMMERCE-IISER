"use client";

import { revalidatePath } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, use} from "react";

// async function getProducts() {
//   const resp = await fetch("/api/products");
//   const data = await resp.json();

//   return data.product;
// }


interface ProductProps{
  _id: string, 
  name: string,
  categoryId: string, 
  images: Array<image>,
  price: string,
  colorId: string, 
  description: string,

}

interface image{
  url: string,
  id: string
}


const Products: React.FC<ProductProps>  = (props) =>  {

  // const product_list = use(getProducts());


  // let colors = [product_list.map(p => p.color)]


  
//   function removeDupli(arr){
//     return [...new Set(arr)]
//   }
console.log(props.images[0].url)

// console.log(removeDupli(colors))

  return (







                  <div key={props._id} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden border border-white rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 group-hover:border-gray-200">
                      <img
                        src={props.images[0].url}        
                        className=" h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <Link href={`/product/${props._id}`}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {props.name}
                          </Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {props.colorId}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                       Rs. {props.price}
                      </p>
                    </div>
                  </div>

        
  );
}


export default Products;