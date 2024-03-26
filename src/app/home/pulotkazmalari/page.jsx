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
                <h2 className="my-[40px] font-bold text-center">Bizning hamkorlarimiz</h2>
                <div className="cards">
                    {pulData.map((item) =>(
                    <div key={item.id} className="bozj">
                        <div className="imgbl">
                        <span><HumoIcon/></span>
                        </div>
                        <div className="flex">
                            <p>{item.title}</p>
                            <p> {item.komissiya}</p>
                        </div>
                        <p className="text-purple-900 ">Batafsil</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PulOtkazmalari;