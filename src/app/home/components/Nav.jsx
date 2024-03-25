"use client"
import React from 'react';


import Link from 'next/link';

function Nav(props) {
    return (
        <div>
            <nav className="flex py-[16px]">
                <ul className="flex gap-[10px] ">
                    <li className="px-5">
                    <Link href="/home/mahsulotlar">
                        Mahsulotlar
                        </Link>
                    </li>
                    <li className="px-[10px] ">
                    <Link href="/home/pulotkazmalari">
                        Pul o`tkazmalari
                        </Link>
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