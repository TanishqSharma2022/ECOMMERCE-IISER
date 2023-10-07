"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  { name: "HOME", href: "/" },
  { name: "IISERB MERCH", href: "/iiserb" },
  { name: "REGULARS", href: "/regulars" },
  { name: "ABOUT", href: "#" },
  { name: "CONTACT", href: "#" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className=" ">
      {/* <header className='w-full bg-gray-500 p-3 text-white flex items-center justify-between'>
        <div>Logo</div>
        <ul className='flex mx-4 items-center'>
            <li className='mr-2 font-sans'>Sign in</li> 
            <span className='mr-2'>|</span>
            <li>Create an account</li>
        </ul>
      </header> */}
      <nav className="w-full border p-4 flex justify-between items-center">
        <div>LOGO</div>
        <div className="  hidden lg:flex ">
          <ul className="flex items-center gap-x-8  font-sans font-semibold">
            <Link href="/">
              <li className="cursor-pointer">HOME</li>
            </Link>
            <Link href="/iiserb">
              <li className="cursor-pointer">IISERB MERCH</li>
            </Link>
            <Link href="/regulars">
              <li className="cursor-pointer">REGULARS</li>
            </Link>
            <Link href="/">
              <li className="cursor-pointer">ABOUT</li>
            </Link>
            <Link href="/">
              <li className="cursor-pointer">CONTACT</li>
            </Link>
          </ul>
        </div>

        <div className="flex  ">
          <div className="menu-bar lg:hidden inline-flex">
            <button type="button" onClick={() => setMobileMenuOpen(true)}>
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
          <ul className=" gap-x-3 hidden lg:flex mx-4">
            <li>
              <button>
                <MagnifyingGlassIcon className="h-6 w-6" />
              </button>
            </li>
            <li>
              <button>
                <Link href="/cart">
                  <div className="flex justify-between gap-x-2 items-center">
                    <ShoppingBagIcon className="h-6 w-6" />
                    <span>0</span>
                  </div>
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="" alt="Logo" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default Navbar;
