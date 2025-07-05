import { useLocation } from "react-router-dom";

function Order() {
  const location = useLocation();
  const order = location.state?.order;

  if (!order) {
    return (
      <section className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        No order details found.
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-24 pb-10 px-4 bg-gray-100">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-800">
          Order Details
        </h1>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Product Image */}
          <div className="flex justify-center md:justify-start">
            <img
              src={order.productImage}
              alt={order.productName}
              className="w-40 h-40 sm:w-52 sm:h-52 object-contain border rounded"
            />
          </div>

          {/* Product Info */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">{order.productName}</h2>
            <p className="text-lg font-medium text-gray-700 mb-2">Rs: {order.productPrice}</p>

            {order.selectedSize && (
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Size:</span> {order.selectedSize}
              </p>
            )}

            {order.selectedColor && (
              <div className="mt-2">
                <p className="text-sm text-gray-600 mb-1 font-medium">Color:</p>
                <img
                  src={order.selectedColor}
                  alt="Selected Color"
                  className="w-10 h-10 object-contain border rounded"
                />
              </div>
            )}
          </div>
        </div>

        {/* Delivery Address */}
        <div className="mt-8 border-t pt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Delivery Address</h3>
          <p className="text-sm text-gray-700 leading-6">
            {order.deliveryAddress?.name}<br />
            {order.deliveryAddress?.street}<br />
            {order.deliveryAddress?.city}, {order.deliveryAddress?.state} - {order.deliveryAddress?.pincode}<br />
            Phone: {order.deliveryAddress?.phone || "N/A"}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Order;
