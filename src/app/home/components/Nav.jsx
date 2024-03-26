"use client"
import React, { useState } from 'react';
import SearchIcon from "../../../assets/icon/SearchIcon";
import Link from 'next/link';

function Nav(props) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className="flex justify-between items-center">
            <nav className="flex py-[16px]">
                <ul className="flex gap-[10px]">
                    <li className="px-5">
                        <Link href="/home/mahsulotlar">
                            Mahsulotlar
                        </Link>
                    </li>
                    <li className="px-[10px]">
                        <Link href="/home/pulotkazmalari">
                            Pul o`tkazmalari
                        </Link>
                    </li>
                    <li className="px-[10px]">
                        <Link href="/home/tariflar">
                            Tariflar
                        </Link>
                    </li>
                    <li className="px-[10px]">
                        <Link href="/home/ishorinlari">
                            Ish o`rinlari
                        </Link>
                    </li>
                    <li className="px-[10px]">
                        <Link href="/home/tender">
                            Tender
                        </Link>
                    </li>
                    <li className="px-[10px]">
                        <Link href="/home/valyuta">
                            Valyuta kursi
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="flex items-center gap-2 max-w-[340px] mr-5">
                {open && (
                    <input
                        className="w-full p-2 outline-purple-800 border-purple-800 border focus:outline-purple-800"
                        type="text"
                        id="search"
                        name="search"
                        placeholder="Search"
                    />
                )}
                <label htmlFor="search">
                    <span onClick={handleClick}><SearchIcon/></span>
                </label>
            </div>
        </div>
    );
}

export default Nav;
