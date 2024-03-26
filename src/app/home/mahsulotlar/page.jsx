import React from 'react';
import BiznesImg from "../../../assets/icon/BiznesImg"


function Product(props) {
    return (
        <section className="mt-[100px]">
        <div className="flex">
          <div className=" w-full flex justify-between items-center ">
            <div className=" text-start pt-[50px]">
              <h1 className=" font-bold text-[50px] pb-[30px]">Kreditlar bo`ladi!</h1>
              <p className=" font-normal text-[20px] max-w-[500px]">
              Biz barcha rasmiyatchiliklarni tamomlamoqdamiz va tez orada juda qulay mikrokreditlarni taqdim etamiz.
              </p>
            </div>
            <div className="box2">
              <div className="w-[560px]">
              <span><BiznesImg/></span>
              </div>
            </div>
          </div>
        </div>
        <form className="flex flex-col justify-around items-end gap-2 w-[600px]   mt-[50px]">
          <div className="flex flex-col gap-3  text-start">
            <p className="text-[18px] font-semibold">Ochilish haqida ma`lumotga ega bo`lmoqchimisiz ?</p>
            <p className="text-gray-800 text-[16px]">O`zingizning pochta manzilingiz yoki telefon raqamingizni qoldiring, biz ochilish kuni Sizga xabar yuboramiz</p>
         
          </div>
         <div className="flex  items-center w-full mt-10">
         <div className="max-w-[450px]">
            <input
              className=" py-2 w-full outline-none focus:outline-purple-600"
              type="email"
              name="email"
              id="email"
              placeholder="Elektron pochta"
            />
            </div>
          <button className="px-[85px] py-[10px] ml-2  text-white bg-purple-900 rounded-md">
            Jonatish
          </button>
         </div>
        </form>
     
      </section>
    );
}

export default Product;

