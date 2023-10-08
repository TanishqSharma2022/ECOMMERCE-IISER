"use client"

import CartItem from "@/components/CartItem";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import Image from "next/image";
import { useEffect, useState } from "react";
const Cart = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();
  const items = useCart((state) => state.items);
  const totalPrice = items.reduce((total, item)  => {
      return total + Number(item.price)
  }, 0)



  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }



  return (
    <>
    <div className="font-bold text-3xl flex items-center justify-center p-6">Shopping Cart</div>
      <div className="flex flex-col items-center justify-start lg:p-12 p-2 h-[100vh] ">
       {cart.items.length == 0 &&
       <div>
        <h1 className="text-3xl font-sans font-bold p-10">
          Seems, you haven't added <br />
          anything to the Cart yet....
        </h1>
        <Image
          src="https://media.giphy.com/media/3ogwFYbBBADDtLYRqM/giphy.gif"
          width={500}
          height={500}
          alt=""
          className="rounded-3xl shadow-md"
        />
        </div>
        }

          <div className="w-full lg:w-[80%] flex lg:flex-row flex-col justify-between ">
                <div className="">
                {cart.items.map((item) => (
                  <CartItem key={item._id} data={item} />
                ))}
                </div>
                {cart.items.length!=0 &&
                  <div className="bg-gray-100 w-full lg:w-[40%] p-10 border">
                    <div className="font-semibold text-2xl font-sans border-b p-4 border-gray-300 ">Summary</div>
                    <div className="flex justify-between">
                      <div className="p-4">Order Total: </div>
                      <div className="p-4">
                        <Currency value={totalPrice} />
                      </div>  
                    </div>
                    <div className="p-4  text-white bg-black rounded-full text-center w-full">Checkout</div>

                  </div>}

        </div>
      </div>
    </>
  );
};

export default Cart;
