import { useState } from "react";

function DeliveryAddressForm({ onAddAddress, handleModalClose }) {
  const [address, setAddress] = useState({
    fullName: "",
    phoneNumber: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const handleChange = (key, value) => {
    setAddress((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save to localStorage for cross-page access
    localStorage.setItem("deliveryAddress", JSON.stringify(address));

    // Optional callback (still works with AddressManager)
    onAddAddress?.(address);
    handleModalClose?.();

    // Reset form
    setAddress({
      fullName: "",
      phoneNumber: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {[ 
        { label: "Full Name", key: "fullName" },
        { label: "Phone Number", key: "phoneNumber" },
        { label: "Street", key: "street" },
        { label: "City", key: "city" },
        { label: "State", key: "state" },
        { label: "Zip Code", key: "zipCode" },
        { label: "Country", key: "country" },
      ].map(({ label, key }) => (
        <div className="flex flex-col" key={key}>
          <label>{label}</label>
          <input
            type="text"
            className="border p-2 rounded"
            value={address[key]}
            onChange={(e) => handleChange(key, e.target.value)}
            required
          />
        </div>
      ))}

      <button
        type="submit"
        className="bg-black border text-white px-4 py-2 rounded hover:bg-transparent hover:text-black transition-all duration-200"
      >
        Save Address
      </button>
    </form>
  );
}

export default DeliveryAddressForm;
