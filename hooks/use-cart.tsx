import { Product } from "@/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import {persist, createJSONStorage} from 'zustand/middleware'

interface CartStore{
    items: Product[],
    addItems: (item: Product) => void,
    removeItem: (id: string) => void,
    removeAll: () => void,
}

const useCart = create(
    persist<CartStore>(
        (set, get) => ({
            items: [],
            addItems: (item: Product) => {
                const currentItems = get().items;
                
                const existingItems = currentItems.find((i) => i._id === item._id); 

                if(existingItems){
                    return toast("Items already added to cart")
                }
                set({ items: [...get().items, item] });
                toast.success('Item added to cart.');
            },
            removeItem: (id: string) => {
                set({ items: [...get().items.filter((item) => item._id !== id)] });
                toast.success('Item removed from cart.');
              },
              removeAll: () => set({ items: [] }),
            }), {
              name: 'cart-storage',
              storage: createJSONStorage(() => localStorage)
            }
        )
    )
    



export default useCart;