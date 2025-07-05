import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  // Simulate fetching from backend
  useEffect(() => {
    const mockOrders = [
      {
        productId: "P001",
        productName: "White Formal Shirt",
        productPrice: 1199,
        productImage: "/src/assets/shirt1.png",
        selectedSize: "M",
        selectedColor: "/src/assets/shirt1.png",
        deliveryAddress: {
          name: "Aadi",
          street: "123 Main Street",
          city: "Chennai",
          state: "TN",
          pincode: "600001",
          phone: "9876543210",
        },
      },
      {
        productId: "P002",
        productName: "Denim Jean Shirt",
        productPrice: 1499,
        productImage: "/src/assets/shirt2.png",
        selectedSize: "L",
        selectedColor: "/src/assets/shirt2.png",
        deliveryAddress: {
          name: "Aadi",
          street: "456 Second Avenue",
          city: "Chennai",
          state: "TN",
          pincode: "600002",
          phone: "9876543210",
        },
      },
    ];
    setOrders(mockOrders);
  }, []);

  const handleViewOrder = (order) => {
    navigate("/order", { state: { order } });
  };

  return (
    <section className="min-h-screen pt-24 pb-10 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-800">
          My Orders
        </h1>

        {orders.length === 0 ? (
          <p className="text-center text-gray-600">No orders found.</p>
        ) : (
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {orders.map((order, index) => (
              <div
                key={index}
                className="bg-white rounded shadow hover:shadow-lg transition p-4 cursor-pointer"
                onClick={() => handleViewOrder(order)}
              >
                <img
                  src={order.productImage}
                  alt={order.productName}
                  className="w-full h-48 object-contain mb-3 rounded"
                />
                <h2 className="text-lg font-semibold text-gray-800 truncate">
                  {order.productName}
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  Size: <span className="font-medium">{order.selectedSize}</span>
                </p>
                <p className="text-gray-700 font-medium mt-1">
                  ₹{order.productPrice}
                </p>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                  {order.deliveryAddress.street}, {order.deliveryAddress.city}
                </p>
              </div>
            ))}
          </section>
        )}
      </div>
    </section>
  );
}

export default MyOrders;
