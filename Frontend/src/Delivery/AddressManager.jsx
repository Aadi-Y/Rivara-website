import { useState, useEffect } from "react";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import DeliveryAddressForm from "../DeliveryAddressForm/DeliveryAddressForm";

function AddressManager() {
  const [addresses, setAddresses] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("addresses");
    if (saved) setAddresses(JSON.parse(saved));
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses));
  }, [addresses]);

  const handleModalClose = () => {
    setOpenModal(false);
    setEditIndex(null);
  };

  const handleAddAddress = (newAddress) => {
    if (editIndex !== null) {
      const updated = [...addresses];
      updated[editIndex] = newAddress;
      setAddresses(updated);
    } else {
      setAddresses([...addresses, newAddress]);
    }
    handleModalClose();
  };

  const handleDelete = (index) => {
    const updated = addresses.filter((_, i) => i !== index);
    setAddresses(updated);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setOpenModal(true);
  };

  const handleSelect = (address) => {
    localStorage.setItem("selectedAddress", JSON.stringify(address));
    alert("Address selected for delivery!");
  };

  return (
    <section className="p-5 mt-20">
      <Modal
        isOpen={openModal}
        onRequestClose={handleModalClose}
        style={{
          overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
          content: {
            width: "500px",
            margin: "auto",
            marginTop: "60px",
            borderRadius: "10px",
            padding: "20px",
            height: "600px",
            maxHeight: "90vh",
          },
        }}
      >
        <IoClose
          className="absolute top-5 right-4 text-2xl text-gray-500 cursor-pointer"
          onClick={handleModalClose}
        />

        <DeliveryAddressForm
          handleModalClose={handleModalClose}
          onAddAddress={handleAddAddress}
          defaultData={editIndex !== null ? addresses[editIndex] : null}
        />
      </Modal>

      <button
        onClick={() => setOpenModal(true)}
        className="bg-black text-white px-4 py-2 rounded fixed bottom-10 right-10 hover:bg-white hover:text-black border"
      >
        Add Address
      </button>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {addresses.map((address, index) => (
          <div
            key={index}
            className="border p-4 rounded shadow bg-white flex flex-col gap-2"
          >
            <h2 className="font-bold text-lg mb-2">Delivery Address</h2>
            <p><strong>Full Name:</strong> {address.fullName}</p>
            <p><strong>Phone Number:</strong> {address.phoneNumber}</p>
            <p><strong>Street:</strong> {address.street}</p>
            <p><strong>City:</strong> {address.city}</p>
            <p><strong>State:</strong> {address.state}</p>
            <p><strong>Zip Code:</strong> {address.zipCode}</p>
            <p><strong>Country:</strong> {address.country}</p>

            <div className="flex gap-2 mt-3">
              <button
                onClick={() => handleEdit(index)}
                className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
              <button
                onClick={() => handleSelect(address)}
                className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
              >
                Use this Address
              </button>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}

export default AddressManager;
