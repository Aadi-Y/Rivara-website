import { useState } from "react";

function ProductForm() {
  const [formData, setFormData] = useState({
    productImage: null,
    productName: "",
    productPrice: "",
    productColors: [], // now an array
    productSize: "",
    productDescription: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  function handleValueChange(key, value) {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = new FormData();
      payload.append("productImage", formData.productImage);

      // Append multiple color images
      for (let i = 0; i < formData.productColors.length; i++) {
        payload.append("productColors", formData.productColors[i]);
      }

      payload.append("productName", formData.productName);
      payload.append("productPrice", formData.productPrice);
      payload.append("productSize", formData.productSize);
      payload.append("productDescription", formData.productDescription);

      const response = await fetch("https://your-api-url.com/products", {
        method: "POST",
        body: payload,
      });

      const result = await response.json();

      if (response.ok) {
        setResponseMessage("Product uploaded successfully!");
        setFormData({
          productImage: null,
          productName: "",
          productPrice: "",
          productColors: [],
          productSize: "",
          productDescription: "",
        });
      } else {
        setResponseMessage(result?.message || "Failed to upload product.");
      }
    } catch (error) {
      setResponseMessage("An error occurred while uploading the product.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h1 className="text-center font-medium text-[1.3rem]">Product Form</h1>

        <div className="flex flex-col">
          <label>Product Image</label>
          <input
            type="file"
            accept="image/*"
            className="border p-2 rounded"
            onChange={({ target }) =>
              handleValueChange("productImage", target.files[0])
            }
          />
        </div>

        <div className="flex flex-col">
          <label>Product Name</label>
          <input
            type="text"
            className="border p-2 rounded"
            value={formData.productName}
            onChange={({ target }) =>
              handleValueChange("productName", target.value)
            }
          />
        </div>

        <div className="flex flex-col">
          <label>Product Price</label>
          <input
            type="text"
            className="border p-2 rounded"
            value={formData.productPrice}
            onChange={({ target }) =>
              handleValueChange("productPrice", target.value)
            }
          />
        </div>

        <div className="flex flex-col">
          <label>Product Colors (you can select multiple)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            className="border p-2 rounded"
            onChange={({ target }) =>
              handleValueChange("productColors", Array.from(target.files))
            }
          />
        </div>

        <div className="flex flex-col">
          <label>Product Size</label>
          <input
            type="text"
            className="border p-2 rounded"
            placeholder="e.g., XS, S, M"
            value={formData.productSize}
            onChange={({ target }) =>
              handleValueChange("productSize", target.value)
            }
          />
        </div>

        <div className="flex flex-col">
          <label>Product Description</label>
          <textarea
            className="border p-2 rounded"
            value={formData.productDescription}
            onChange={({ target }) =>
              handleValueChange("productDescription", target.value)
            }
          />
        </div>

        {responseMessage && (
          <p className="text-red-500 mt-2">{responseMessage}</p>
        )}

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded border hover:bg-transparent hover:text-black"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Product"}
        </button>
      </form>
    </section>
  );
}

export default ProductForm;
