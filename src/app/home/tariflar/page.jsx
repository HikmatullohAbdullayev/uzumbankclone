import React from 'react';
import Link from 'next/link';

function Tariflar(props) {
    return (
        <section>
             <h1>Tariflar</h1>
            <div className="flex">
                <p>Для частных лиц</p>
                {data.map((item) =>{
                    <div key={item.id} className="flex flex-col">
                        <p>{item.text}</p>
                        <p>PDF, 237 KB</p>
                    </div>
                })}
            </div>
        </section>
    );
}

export default Tariflar;