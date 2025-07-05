import { useState } from "react";
import { useNavigate } from "react-router-dom";
import card from "./card.json";

function Card() {
  const [cardItems, setCardItems] = useState(card);
  const navigate = useNavigate();

  // Simulated checkout handler (API will be added later)
  const handleCheckout = (item) => {
    const payload = {
      productId: item.productId || "N/A",
      productName: item.productName,
      productPrice: item.productPrice,
      productImage: item.productImage,
      selectedSize: item.selectedSize || "",
      selectedColor: item.selectedColor || "",
    };

    console.log("Simulated Checkout Payload:", payload);

    // Navigate to Checkout page with payload (single item)
    navigate("/checkout", {
      state: { item: payload },
    });
  };

  return (
    <section className="min-h-screen pt-24 pb-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
        {cardItems.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-xs bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center p-4"
          >
            <img
              src={item.productImage}
              alt={item.productName}
              className="h-48 w-auto object-contain mb-4"
            />

            <div className="w-full flex items-center justify-between mb-3">
              <h2 className="text-md font-semibold text-gray-800 truncate">{item.productName}</h2>
              <span className="text-md font-semibold text-gray-700">Rs: {item.productPrice}</span>
            </div>

            <button
              onClick={() => handleCheckout(item)}
              className="w-full py-2 bg-black text-white rounded hover:bg-transparent hover:text-black border transition duration-200"
            >
              CHECKOUT
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Card;
