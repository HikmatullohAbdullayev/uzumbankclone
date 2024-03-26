// "use client"
import React from 'react';
import  LogoIcon  from "../../assets/icon/LogoIcon";
import  GlassIcon  from "../../assets/icon/GlassIcon";
import  LanguageIcon  from "../../assets/icon/LanguageIcon";
import Link from 'next/link';

function Header(props) {
    return (
        <header className=" w-full border-b border-solid shadow-md fixed top-0 bg-white mb-[120px]">
           <div className=" max-w-[1240px] mx-auto px-[20px] flex justify-between items-center py-5">
           <div className="flex justify-around items-center">
           <div className="w-[150px] ">
           <Link href="/">
            <span className="w-full"><LogoIcon/></span>
                        </Link>
            </div>
            <nav className="flex">
                <ul className="flex gap-[10px] ">
                    <li className="px-5">
                    <Link href="/home">
                        Jismoniy Shaxslarga
                        </Link>
                    </li>
                    <li className="px-[10px] ">
                    <Link href="/busines">
                        Biznesga
                        </Link>
                    </li>
                </ul>
            </nav>
           </div>
            <div className="flex justify-between items-center gap-2 ">
                <span className="p-1 border border-solid bg-slate-300 rounded-[50%]">
                    <GlassIcon/>
                </span>
                <div className="flex gap-[6px] px-[16px] text-gray-500">
                <span className="">
                    <LanguageIcon/>
                </span>
                <p>O`zbek</p>
                </div>
                <button className="px-[35px] py-[10px] bg-purple-900 rounded-md text-white">
                    Akkauntga kirish
                </button>
            </div>
           </div>

        </header>
    );
}

export default Header;

