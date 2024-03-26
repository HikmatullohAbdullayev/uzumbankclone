import React from 'react';
// import Image from "next/image";
import BiznesImg from "../../assets/icon/BiznesImg"

function Busines(props) {
    return (
        <section>
        <div className="flex">
          <div className=" w-full flex justify-between items-center ">
            <div className=" text-start pt-[50px]">
              <h1 className=" font-bold text-[50px] pb-[30px]">Biznes bo`ladi!</h1>
              <p className=" font-normal text-[20px] max-w-[500px]">
              Yuridik shaxslar uchun yangi loyihamizni deyarli yakunladik. Yakuniy ishlovlar qoldi.
              </p>
            </div>
            <div className="box2">
              <div className="w-[560px]">
              <span><BiznesImg/></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Busines;