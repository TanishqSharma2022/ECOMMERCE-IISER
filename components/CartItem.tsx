import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import IconButton from "./ui/icon-button";
import Currency from "./ui/currency";
import { X } from "lucide-react";

interface CartItem{
    data: Product;
}

const CartItem:React.FC<CartItem> = ({data}) => {

    const onRemove = () => {
        cart.removeItem(data._id);
      };


    const cart = useCart()
    return(
        <li className="flex py-6 border-b">
      <div className="relative h-36 w-36 rounded-md overflow-hidden sm:w-48 sm:h-48">
        <img
          src={data.images[0].url}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className=" text-lg font-semibold text-black">
              {data.name}
            </p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.colorId}</p>
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{data.size}</p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
    )
}


export default CartItem;