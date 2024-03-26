import React from 'react';
import HumoIcon from '../../../assets/icon/HumoIcon'
import VisaIcon from '../../../assets/icon/VisaIcon'

function PulOtkazmalari(props) {
    const pulData = [
        {
            id:1,
            title:"Visa Direct",
            komissiya: "1% dan komissiya",
            img: "<VisaIcon/>"
        },
        {
            id:2,
            title:"MoneySend",
            komissiya: "1%, lekin kamida €2",
            img: "<HumoIcon/>"
        },
        {
            id:3,
            title:"Western Union",
            komissiya: "1.3 dollardan komissiya",
            img: "<HumoIcon/>"
        },
    ]
    return (
        <section>
            <div className="text-start p-[40px] bg-purple-50">
            <h1 className="font-bold text-[32px] my-[30px]">Xalqaro pul o`tkazmalari</h1>
            <hr className="py-[10px]"/>
            
            <p className="text-gray-700 text-[18px] pb-[100px]">Yuborish va qabul qilish uchun sizga faqat mobil telefon va Uzum Bank ilovasi kerak. Va eng yaqin bank filialini izlashning hojati yo`q</p>
            </div>

            <div className="flex flex-col">
                <h2 className="my-[40px] font-bold text-center text-[24px]">Bizning hamkorlarimiz</h2>
                <div className="flex justify-between items-center">
                    {pulData.map((item) =>(
                    <div key={item.id} className="w-[365px]">
                       <div className="bg-purple-50 py-[55px] px-5 w-full">
                       <div className="max-w-[100px] mx-auto w-full ">
                        <span className=" ml-[-20px]  p-5 block bg-gray-300 rounded-3xl">
                            <HumoIcon/>
                            </span>
                        </div>
                       </div>
                        <div className="flex justify-between items-center p-4">
                            <p className="font-bold text-lg">{item.title}</p>
                            <p className=" text-gray-700"> {item.komissiya}</p>
                        </div>
                        <p className="text-purple-900 text-start py-2 cursor-pointer font-semibold p-2 ">Batafsil</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PulOtkazmalari;