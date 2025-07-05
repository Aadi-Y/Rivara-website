import { useNavigate } from "react-router-dom";
import data from "./mens.json";
import { useEffect, useState } from "react";

function ShirtSection() {
  const [pantData, setPantData] = useState([]);
  const navigate = useNavigate();

  // Navigate with full product info
  function handleNavigation(product) {
    navigate("/about", { state: { item: product } });
  }

  // Simulate fetch (or use real API here)
  useEffect(() => {
    setPantData(data);
  }, []);

  return (
    <section className="w-full bg-gray-100 py-10 px-4 min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800">MEN - Pants</h1>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {pantData.map((product, index) => (
            <div
              key={index}
              onClick={() => handleNavigation(product)}
              className="cursor-pointer w-full max-w-sm bg-white rounded shadow-md hover:shadow-lg transition duration-200"
            >
              <img
                src={product.productImage}
                alt={product.productName}
                className="w-full h-[300px] object-contain"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-medium text-gray-800">{product.productName}</h2>
                <p className="text-sm font-semibold text-gray-600">Rs: {product.productPrice}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}

export default ShirtSection;
