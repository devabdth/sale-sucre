"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default () => {
    const pathName= usePathname();
    return <header>Default Header</header>
}
