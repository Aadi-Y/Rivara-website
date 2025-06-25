import { useState } from "react";
import card from "./card.json";
import shirt1 from "../assets/shirt1.png";

function Card() {
  const [cardItems, setCardItems] = useState(card);

  return (
    <>
      <section className="my-40">
        <section className="ml-5 grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3">
          {cardItems.map((item, index) => (
            <div className="w-70 flex flex-col items-center justify-center bg-gray-200 p-5">
              <div>
                <img src={shirt1} alt="" className="h-75 w-auto" />
              </div>
              <div className="flex items-center justify-between w-full px-2">
                <div>
                  <h1 className="text-[1.2rem] font-semibold">{item.productName}</h1>
                </div>
                <div>
                  <h1 className="font-semibold">Rs: {item.productPrice}</h1>
                </div>
              </div>
              <div className="w-full mt-2">
                <button className="border w-full p-2 bg-black text-white hover:bg-transparent hover:text-black transition-all duration-200 rounded">CHECKOUT</button>
              </div>
            </div>
          ))}
        </section>
      </section>
    </>
  );
}

export default Card;
