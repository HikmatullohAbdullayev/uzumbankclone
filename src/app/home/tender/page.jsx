import React from 'react';
import Image from "next/image";
import Computer from "../../../assets/img/computer.png";
import Link from 'next/link';

function Tender(props) {
    const data = [
        {
          id: 1,
          text: "Поставка программного обеспечения КИБ Сёрчинформ",
        },
        {
          id: 2,
          text: "Предоставление доступа к сервисам Cloudflare",
        },
        {
          id: 3,
          text: "Приобретение программно-аппаратного комплекса",
        },
        {
          id: 4,
          text: "Приобретение межсетевых экранов Palo Alto Networks",
        },
        {
          id: 5,
          text: "Поставка телекоммуникационного оборудования HPE Aruba",
        },
        {
          id: 6,
          text: "Поставка программного обеспечения Veeam Backup & Replication Enterprise Plus",
        },
      ];
    return (
       <section>
         <div className="flex flex-col">
          <h2 className="font-bold text-[32px] my-[20px] ">Tender</h2>
          <div className="flex justify-between flex-wrap gap-5">
            {data.map((item) => (
              <div key={item.id} className="w-[370px] ">
                <div className=" py-[40px] my-2  bg-purple-100">
                  <div className="max-w-[100px] mx-auto  p-5 border border-gray-400 border-solid bg-white rounded-3xl ">
                    <Image
                      className="w-full"
                      src={Computer}
                      alt="Picture of the author"
                    />
                  </div>
                </div>

                <div className="text-start w-[270px] p-2 flex flex-col gap-4">
                <p className="font-bold ">{item.text}</p>
                <Link className="text-purple-900 font-semibold text-[18px]" href="/">Batafsil</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
       </section>
    );
}

export default Tender;