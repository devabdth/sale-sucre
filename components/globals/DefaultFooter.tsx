"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default () => {
    const pathName= usePathname();
    return <footer className="bg-primary lg:px-28 px-4 px-2 lg:py-14 py-2">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8  md:grid-cols-4">
        <div>
            <h2 className="mb-6 text-[18px] font-semibold text-background-secondary font-secondary font-extrabold">Company</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className=" hover:underline font-secondary text-background/50 hover:text-background transition-all duration-500">About</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline font-secondary text-background/50 hover:text-background transition-all duration-500">Careers</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline font-secondary text-background/50 hover:text-background transition-all duration-500">Brand Center</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline font-secondary text-background/50 hover:text-background transition-all duration-500">Blog</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-[18px] font-semibold text-background-secondary font-secondary font-extrabold">Enchanting Confections</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline font-secondary text-background/50 hover:text-background transition-all duration-500">Hot Offers</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline font-secondary text-background/50 hover:text-background transition-all duration-500">Products</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline font-secondary text-background/50 hover:text-background transition-all duration-500">Categories</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline font-secondary text-background/50 hover:text-background transition-all duration-500">Special Occasions Tortes</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-[18px] font-semibold text-background-secondary font-secondary font-extrabold">Legal</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline font-secondary text-background/50 hover:text-background transition-all duration-500">Privacy Policy</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline font-secondary text-background/50 hover:text-background transition-all duration-500">Licensing</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline font-secondary text-background/50 hover:text-background transition-all duration-500">Terms &amp; Conditions</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-[18px] font-semibold text-background-secondary font-secondary font-extrabold">Download</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline font-secondary text-background/50 hover:text-background transition-all duration-500">iOS</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline font-secondary text-background/50 hover:text-background transition-all duration-500">Android</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline font-secondary text-background/50 hover:text-background transition-all duration-500">MacOS</a>
                </li>
            </ul>
        </div>
    </div>
    <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-background-secondary font-secondary sm:text-center">© 2024 <a href="https://treguruseg.com/">TreGurus™</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
        </div>
      </div>
    </div>
</footer>
}
