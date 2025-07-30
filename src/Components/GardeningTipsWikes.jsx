import React from "react";

const GardeningTipsWikes = () => {
  return (
    <section className="bg-green-50 py-10 px-4 rounded-md mt-10">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
        🌱 Gardening Tips of the Week
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out">
          <h3 className="font-semibold text-xl text-green-800 mb-2">
            🥚 Use Eggshells for Fertilizer
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Crushed eggshells add calcium to your soil, helping plants grow
            stronger and healthier with natural nutrients.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out">
          <h3 className="font-semibold text-xl text-green-800 mb-2">
            🌄 Water Early in the Morning
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Watering before sunrise keeps the soil moist longer and reduces
            water loss from evaporation — best for plant health!
          </p>
        </div>
      </div>
    </section>
  );
};

export default GardeningTipsWikes;
