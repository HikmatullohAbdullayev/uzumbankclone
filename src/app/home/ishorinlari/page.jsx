import React from "react";
import Image from "next/Image";
import Uzumjon from "../../../assets/img/uzumjon.png";
import Computer from "../../../assets/img/computer.png";
import Link from 'next/link';

function IshOrinlari(props) {
  const data = [
    {
      id: 1,
      text: "Бизнес-аналитик",
    },
    {
      id: 2,
      text: "Специалист казначейства по пруденциальной отчетности",
    },
    {
      id: 3,
      text: "Специалист контактного центра",
    },
    {
      id: 4,
      text: "QA тестировщик - автоматизация процессов фронта",
    },
  ];

  return (
    <section>
      <div className="flex flex-col gap-5">
        <div className="flex ">
          <div className="text-start p-5 pt-[50px] bg-purple-50 ">
            <h1 className="font-bold text-[32px] mb-[20px]">
              Odamlar bizning asosiy kapitalimiz
            </h1>
            <p className="text-[18px] ">
              Kompaniyaning muvaffaqiyati har birining minglab shaxsiy va
              professional yutuqlaridir. Xodimlar rivojlanganda Uzum Bank
              rivojlanadi. Biz bilan ishlash aqlli va erkin odamlar
              hamjamiyatida mustaqil bank bilan birga o`sish imkoniyatidir.
              Shuhratparast muammolarni hal qilish, muhim natijalarga erishish,
              yaxshiroq bo`lish va yaxshi pul topish
            </p>
          </div>
          <div className="box2">
            <div className="w-[560px]">
              <Image
                className="w-full"
                src={Uzumjon}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="font-bold text-[32px] my-[20px] ">Ish o`rinlari</h2>
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
      </div>
    </section>
  );
}

export default IshOrinlari;