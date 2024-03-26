"use client";
import React from "react";
import Link from "next/link";

function Footer(props) {
  return (
    <>
      <div className=" max-w-[1240px] mx-auto px-[20px] flex justify-between items-center mt-[50px] mb-[20px]">
        <form className="flex justify-between items-end gap-2">
          <div className="impo">
            <label id="email" htmlFor="email">
              <h2 className="text-lg">Bizning yangiliklarga ulaning</h2>
            </label>
            <input
              className=" py-2 w-full outline-none focus:outline-purple-600"
              type="email"
              name="email"
              id="email"
              placeholder="Elektron pochta"
            />
          </div>
          <button className="px-[15px] py-[10px] mr-2 w-[200px] text-purple-900 bg-[#c9b8ff] rounded-md">
            Jonatish
          </button>
        </form>
        <div className="flex-flex-col gap-2 text-end ">
          <p>+998 97 777 77 77</p>
          <Link className="text-purple-700" href="https://telegram.org/">
            Telegram
          </Link>
        </div>
      </div>
      <footer className="w-full bg-purple-600 p-10">
        <div className="max-w-[1240px] mx-auto px-[20px]">
            <h2>Footer</h2>
        </div>
      </footer>
    </>
  );
}

export default Footer;
