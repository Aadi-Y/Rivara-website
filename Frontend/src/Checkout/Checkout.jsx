import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;
  const item = state?.item || state;

  const [deliveryAddress, setDeliveryAddress] = useState(null);

  // ✅ Load selected address from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("selectedAddress");
    if (saved) {
      setDeliveryAddress(JSON.parse(saved));
    }
  }, []);

  if (!item) {
    return (
      <section className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        No product selected for checkout.
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-24 px-4 pb-10 bg-gray-100">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-800">
          Checkout Summary
        </h1>

        {/* Product Info */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex justify-center md:justify-start">
            <img
              src={item.productImage}
              alt={item.productName}
              className="w-40 h-40 sm:w-52 sm:h-52 object-contain border rounded"
            />
          </div>

          <div className="flex flex-col justify-between flex-1">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-1">
                {item.productName}
              </h2>
              <p className="text-lg font-medium text-gray-700 mb-1">
                ₹{item.productPrice || item.price}
              </p>
              {item.selectedSize && (
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium">Size:</span> {item.selectedSize}
                </p>
              )}
              {item.selectedColor && (
                <div className="mt-2">
                  <p className="text-sm text-gray-600 mb-1 font-medium">
                    Color:
                  </p>
                  <img
                    src={item.selectedColor}
                    alt="Selected Color"
                    className="w-10 h-10 object-contain border rounded"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Delivery Address Section */}
        <div className="mt-10 border-t pt-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Delivery Address
          </h2>

          {deliveryAddress ? (
            <div className="text-sm text-gray-700 space-y-1">
              <p>
                <span className="font-medium">Full Name:</span>{" "}
                {deliveryAddress.fullName}
              </p>
              <p>
                <span className="font-medium">Phone:</span>{" "}
                {deliveryAddress.phoneNumber}
              </p>
              <p>
                <span className="font-medium">Street:</span>{" "}
                {deliveryAddress.street}
              </p>
              <p>
                <span className="font-medium">City/State:</span>{" "}
                {deliveryAddress.city}, {deliveryAddress.state}
              </p>
              <p>
                <span className="font-medium">Zip Code:</span>{" "}
                {deliveryAddress.zipCode}
              </p>
              <p>
                <span className="font-medium">Country:</span>{" "}
                {deliveryAddress.country}
              </p>

              {/* ✅ Add Change Address Button */}
              <button
                onClick={() => navigate("/address")}
                className="mt-4 text-sm px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition"
              >
                Change Address
              </button>
            </div>
          ) : (
            <div className="text-gray-600">
              <p>No delivery address selected.</p>
              <button
                onClick={() => navigate("/address")}
                className="mt-3 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
              >
                Add Delivery Address
              </button>
            </div>
          )}
        </div>

        {/* Payment Action */}
        <div className="mt-10">
          <button
            disabled={!deliveryAddress}
            className={`w-full py-3 text-white rounded text-lg font-semibold transition duration-200 ${
              deliveryAddress
                ? "bg-black hover:bg-gray-900"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            onClick={() => {
              if (!deliveryAddress) {
                alert(
                  "Please add a delivery address before proceeding to payment."
                );
                return;
              }
              console.log("API call placeholder - Razorpay coming soon...");
              console.log("Product:", item);
              console.log("Delivery Address:", deliveryAddress);
            }}
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
