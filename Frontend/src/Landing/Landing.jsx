import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // ✅ Add this import for real API use

// Fallback Local Assets
import shirtItem from "../assets/shirtItem.jpg";
import tshirtItem from "../assets/tshirtItem.jpg";
import pantItem from "../assets/pantItem.jpg";
import trouserItem from "../assets/trousersItem.jpg";
import landingBanner from "../assets/landingBanner.jpg";

function Landing() {
  const [landingItem, setLandingItem] = useState(null);

  useEffect(() => {
    // Simulated API Call
    async function handleLandingAPI() {
      try {
        // Replace with real API endpoint when ready
        const response = await axios.get("/api/landing-data");

        if (response && response.data) {
          setLandingItem(response.data);
        }
      } catch (error) {
        console.log("Landing API error:", error);
        // Optional: set fallback or toast
      }
    }

    handleLandingAPI();
  }, []);

  return (
    <section className="min-h-screen w-full pb-20">
      <section className="flex flex-col gap-16">
        {/* Banner */}
        <section>
          <img
            src={landingItem?.landingBanner || landingBanner}
            alt="Landing Banner"
            className="w-full h-auto object-cover"
          />
        </section>

        {/* Product Category Grid */}
        <section className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 px-4">
          {/* Shirts */}
          <section className="flex flex-col">
            <img
              src={landingItem?.shirtItem || shirtItem}
              alt="Shirts"
              className="w-full h-64 object-cover rounded shadow"
            />
            <p className="font-semibold text-lg">SHIRTS</p>
            <Link to="/shirt" className="text-gray-600 hover:underline">
              EXPLORE
            </Link>
          </section>

          {/* T-Shirts */}
          <section className="flex flex-col">
            <img
              src={landingItem?.tshirtItem || tshirtItem}
              alt="T-Shirts"
              className="w-full h-64 object-cover rounded shadow"
            />
            <p className="font-semibold text-lg">T-SHIRTS</p>
            <Link to="/tshirt" className="text-gray-600 hover:underline">
              EXPLORE
            </Link>
          </section>

          {/* Pants */}
          <section className="flex flex-col">
            <img
              src={landingItem?.pantItem || pantItem}
              alt="Pants"
              className="w-full h-64 object-cover rounded shadow"
            />
            <p className="font-semibold text-lg">PANTS</p>
            <Link to="/pant" className="text-gray-600 hover:underline">
              EXPLORE
            </Link>
          </section>

          {/* Trousers */}
          <section className="flex flex-col">
            <img
              src={landingItem?.trouserItem || trouserItem}
              alt="Trousers"
              className="w-full h-64 object-cover rounded shadow"
            />
            <p className="font-semibold text-lg">TROUSERS</p>
            <Link to="/trouser" className="text-gray-600 hover:underline">
              EXPLORE
            </Link>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Landing;
