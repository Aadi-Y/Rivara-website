import { IoClose } from "react-icons/io5";
import ProductForm from "../ProductForm/ProductForm";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import data from "./product.json";

function Admin() {
  const [openModal, setOpenModal] = useState(false);
  const [productData, setProductData] = useState([]);

  function handleModalClosing() {
    setOpenModal((prev) => !prev);
  }

  function handleProductAdded(newProduct) {
    // Simulate API call
    console.log("Simulated API call payload:", newProduct);
    setProductData((prev) => [...prev, newProduct]);
    setOpenModal(false);
  }

  useEffect(() => {
    setProductData(data); // could be replaced with fetch/axios later
  }, []);

  return (
    <>
      <section className="mt-8 relative min-h-screen px-4 sm:px-6 lg:px-8 pb-20">
        {/* Modal */}
        <Modal
          isOpen={openModal}
          onRequestClose={handleModalClosing}
          style={{
            overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
            content: {
              width: "95%",
              maxWidth: "520px",
              margin: "auto",
              marginTop: "60px",
              padding: "20px",
              borderRadius: "10px",
              height: "600px",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative",
            },
          }}
        >
          <IoClose
            className="absolute top-5 right-4 text-2xl text-gray-500 cursor-pointer"
            onClick={handleModalClosing}
          />

          <ProductForm
            handleModalClosing={handleModalClosing}
            onProductAdded={handleProductAdded}
          />
        </Modal>

        {/* Floating Add Button */}
        <div>
          <button
            className="fixed z-50 bottom-6 right-6 sm:right-10 border p-3 sm:p-4 bg-black text-white hover:bg-white hover:text-black rounded-full shadow-md transition-all duration-200"
            onClick={handleModalClosing}
          >
            ADD
          </button>
        </div>

        {/* Product Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-6">
          {productData.map((product, index) => (
            <section
              key={index}
              className="border w-full sm:w-[90%] max-w-sm p-4 rounded flex flex-col gap-3 bg-white shadow"
            >
              <h1 className="text-center font-semibold text-lg mb-2">
                Product Details
              </h1>

              <div>
                <h2 className="font-medium">Product Image:</h2>
                <img
                  src={product.productImage}
                  alt="product"
                  className="h-48 w-full object-contain border"
                />
              </div>

              <div>
                <h2 className="font-medium">Product Name:</h2>
                <p>{product.productName}</p>
              </div>

              <div>
                <h2 className="font-medium">Product Price:</h2>
                <p>Rs: {product.productPrice}</p>
              </div>

              <div>
                <h2 className="font-medium">Product Size:</h2>
                <p>{product.productSize}</p>
              </div>

              <div>
                <h2 className="font-medium">Product Color:</h2>
                <div className="flex flex-wrap gap-2">
                  {product.productColor?.map((item, i) => (
                    <img
                      key={i}
                      src={item}
                      alt={`color-${i}`}
                      className="h-16 w-16 object-cover border"
                    />
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-medium">Product Description:</h2>
                <p className="text-sm text-gray-700 line-clamp-4">
                  {product.productDescription}
                </p>
              </div>

              <div className="flex gap-2 mt-2">
                <button className="border w-1/2 py-2 rounded bg-black text-white hover:bg-transparent hover:text-black transition-all duration-200">
                  UPDATE
                </button>
                <button className="border w-1/2 py-2 rounded bg-black text-white hover:bg-transparent hover:text-black transition-all duration-200">
                  DELETE
                </button>
              </div>
            </section>
          ))}
        </section>
      </section>
    </>
  );
}

export default Admin;
