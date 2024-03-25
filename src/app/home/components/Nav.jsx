"use client"
import React from 'react';
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

import Link from 'next/link';

function Nav(props) {

    const pathName = usePathname();

  const handleNavigation = (href) => {
    // Server tomonidan yuklash uchun client tomonidan navigatsiyani boshlaymiz
    router.push(href);
  };

    return (
        <div>
            <nav className="flex py-[16px]">
                <ul className="flex gap-[10px] ">
                    <li className="px-5">
                    {/* <Link href="/home/mahsulotlar" > */}
                    <p  onClick={() => handleNavigation("/home/mahsulotlar")}  className={`${pathName === "/home/mahsulotlar" ? "active" : ""}`} >
                        Mahsulotlar
                        </p>
                    </li>
                    <li className="px-[10px] ">
                    {/* <Link href="/home/pulotkazmalari"> */}
                    <p onClick={() => handleNavigation("/home/pulotkazmalari")}  className={`${pathName === "/home/pulotkazmalari" ? "active" : ""}`}>
                        Pul o`tkazmalari
                        </p>
                    </li>
                    <li className="px-[10px] ">
                    <Link href="/home/tariflar">
                        Tariflar
                        </Link>
                    </li>
                    <li className="px-[10px] ">
                    <Link href="/home/ishorinlari">
                        Ish o`rinlari
                        </Link>
                    </li>
                    <li className="px-[10px] ">
                    <Link href="/home/tender">
                        Tender
                        </Link>
                    </li>
                    <li className="px-[10px] ">
                    <Link href="/home/valyuta">
                        Valyuta kursi
                        </Link>
                    </li>
                </ul>
            </nav>
            
        </div>
    );
}

export default Nav;