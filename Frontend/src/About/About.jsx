import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function About() {
  const location = useLocation();
  const product = location.state?.item;
  const navigate = useNavigate();

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColorIndex, setSelectedColorIndex] = useState(null);

  if (!product) {
    return (
      <section className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        No product selected.
      </section>
    );
  }

  const sizes = product.availableSizes || ["XS", "S", "M", "L", "XL"];
  const colorImages = product.colorVariants || [product.productImage];

  const handleCard = () => {
    if (!selectedSize || selectedColorIndex === null) {
      alert("Please select size and color.");
      return;
    }

    const payload = {
      productId: product.productId,
      productName: product.productName,
      productPrice: product.productPrice,
      productImage: colorImages[selectedColorIndex],
      selectedSize,
      selectedColor: colorImages[selectedColorIndex],
    };

    console.log("Sending to cart (simulated API call):", payload);
    navigate("/card");
  };

  return (
    <section className="min-h-screen w-full px-4 py-10 mt-20">
      <section className="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto">
        {/* Left */}
        <section className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="bg-gray-200 flex items-center justify-center p-6">
            <img
              src={colorImages[selectedColorIndex] || product.productImage}
              alt={product.productName}
              className="max-h-[400px] w-auto object-contain"
            />
          </div>

          {/* Desktop Description */}
          <div className="hidden md:block">
            <h1 className="font-semibold text-lg mb-2">Description:</h1>
            <p className="text-gray-700 text-sm leading-6">
              {product.description || "No description available."}
            </p>
          </div>
        </section>

        {/* Right */}
        <section className="w-full md:w-1/2 flex flex-col gap-8">
          <div>
            <h1 className="font-semibold text-2xl">{product.productName}</h1>
            <p className="font-semibold text-[1.2rem]">Rs: {product.productPrice}</p>
            <p className="text-sm text-gray-600">MRP inclusive of all taxes</p>
          </div>

          {/* Color */}
          <div>
            <p className="font-medium mb-2">COLOR:</p>
            <section className="flex flex-wrap gap-2 max-h-[160px] overflow-y-auto pr-1">
              {colorImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedColorIndex(idx)}
                  className={`border ${
                    selectedColorIndex === idx ? "border-blue-500" : "border-gray-500"
                  } cursor-pointer flex items-center justify-center h-20 w-20 rounded`}
                >
                  <img src={img} alt={`color-${idx}`} className="max-h-full object-contain" />
                </div>
              ))}
            </section>
          </div>

          {/* Size */}
          <div>
            <p className="font-medium mb-2">SIZE:</p>
            <ul className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-2">
              {sizes.map((size) => (
                <li
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border py-2 text-center rounded cursor-pointer ${
                    selectedSize === size ? "bg-black text-white" : "border-gray-500"
                  }`}
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:w-[70%]">
            <button
              onClick={handleCard}
              className="w-full border p-3 bg-black text-white hover:bg-transparent hover:text-black rounded transition-all duration-200"
            >
              ADD
            </button>
            <button
              onClick={() =>
                navigate("/checkout", {
                  state: {
                    ...product,
                    selectedSize,
                    selectedColor: colorImages[selectedColorIndex],
                  },
                })
              }
              className="w-full border p-3 bg-black text-white hover:bg-transparent hover:text-black rounded transition-all duration-200"
            >
              BUY
            </button>
          </div>
        </section>
      </section>

      {/* Mobile Description */}
      <section className="block md:hidden mt-10 max-w-7xl mx-auto">
        <h1 className="font-semibold text-lg mb-2">Description:</h1>
        <p className="text-gray-700 text-sm leading-6">
          {product.description || "No description available."}
        </p>
      </section>
    </section>
  );
}

export default About;
