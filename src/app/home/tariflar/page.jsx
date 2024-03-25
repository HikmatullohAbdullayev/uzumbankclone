import React from 'react';
import Link from 'next/link';

function Tariflar(props) {
    const data2= [
        {
            id:1,
            text: "ТАРИФЫ ДЛЯ ФИЗИЧЕСКИХ ЛИЦ НА БАНКОВСКОЕ ОБСЛУЖИВАНИЕ В АО «UZUM BANK» Тарифы действительны с 17 марта 2024 года",

        },
        {
            id:2,
            text: "ТАРИФЫ ДЛЯ ФИЗИЧЕСКИХ ЛИЦ НА БАНКОВСКОЕ ОБСЛУЖИВАНИЕ В АО «UZUM BANK» Тарифы действительны с 17 марта 2024 года",

        },
        {
            id:3,
            text: "ТАРИФЫ ДЛЯ ФИЗИЧЕСКИХ ЛИЦ НА БАНКОВСКОЕ ОБСЛУЖИВАНИЕ В АО «UZUM BANK» Тарифы действительны с 17 марта 2024 года",

        },
        {
            id:4,
            text: "ТАРИФЫ ДЛЯ ФИЗИЧЕСКИХ ЛИЦ НА БАНКОВСКОЕ ОБСЛУЖИВАНИЕ В АО «UZUM BANK» Тарифы действительны с 17 марта 2024 года",

        },
        {
            id:5,
            text: "ТАРИФЫ ДЛЯ ФИЗИЧЕСКИХ ЛИЦ НА БАНКОВСКОЕ ОБСЛУЖИВАНИЕ В АО «UZUM BANK» Тарифы действительны с 17 марта 2024 года",

        },
        {
            id:6,
            text: "ТАРИФЫ ДЛЯ ФИЗИЧЕСКИХ ЛИЦ НА БАНКОВСКОЕ ОБСЛУЖИВАНИЕ В АО «UZUM BANK» Тарифы действительны с 17 марта 2024 года",

        },
        {
            id:7,
            text: "ТАРИФЫ ДЛЯ ФИЗИЧЕСКИХ ЛИЦ НА БАНКОВСКОЕ ОБСЛУЖИВАНИЕ В АО «UZUM BANK» Тарифы действительны с 17 марта 2024 года",

        },
        {
            id:8,
            text: "ТАРИФЫ ДЛЯ ФИЗИЧЕСКИХ ЛИЦ НА БАНКОВСКОЕ ОБСЛУЖИВАНИЕ В АО «UZUM BANK» Тарифы действительны с 17 марта 2024 года",

        },
    ]
    return (
        <section>
             <h1 className="font-bold text-[32px]  my-[20px]">Tariflar</h1>
            <div className="flex gap-5">
                <p className="font-bold p-2">Для частных лиц</p>
              <div className="text-start p-4 max-w-[975px] ">
              {data2.map((item) =>(
                    <div key={item.id} className="flex flex-col gap-2 py-3">
                        <p className="text-purple-900  font-semibold text-[18px]">{item.text}</p>
                        <p>PDF, 237 KB</p>
                    </div>
                ))}
              </div>
            </div>
        </section>
    );
}

export default Tariflar;