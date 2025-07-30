import React from "react";

const GardeningTools = () => {
  return (
    <section className="py-10 bg-white px-4">
      <h2 className="text-3xl font-bold text-green-800 text-center mb-6">
        🧰 Must-Have Gardening Tools
      </h2>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="border p-4 rounded shadow text-center hover:shadow-lg">
          <img
            src="https://i.ibb.co/mpQZyKN/f4c440dd-50ca-48b6-9f3a-40006193a9ce.jpg"
            alt="Shovel"
            className="w-full h-40 object-cover mb-3 rounded"
          />
          <h4 className="font-bold text-lg">Shovel</h4>
          <p className="text-sm text-gray-600">
            Perfect for digging and planting.
          </p>
        </div>
        <div className="border p-4 rounded shadow text-center hover:shadow-lg">
          <img
            src="https://i.ibb.co/TMg1Gy1W/premium-photo-1683147685016-0c98356d51e7.jpg"
            alt="Watering Can"
            className="w-full h-40 object-cover mb-3 rounded"
          />
          <h4 className="font-bold text-lg">Watering Can</h4>
          <p className="text-sm text-gray-600">
            Essential for hydration control.
          </p>
        </div>
        <div className="border p-4 rounded shadow text-center hover:shadow-lg">
          <img
            src="https://i.ibb.co/7J2D856F/pexels-thirdman-7655643.jpg"
            alt="Gloves"
            className="w-full h-40 object-cover mb-3 rounded"
          />
          <h4 className="font-bold text-lg">Gardening Gloves</h4>
          <p className="text-sm text-gray-600">
            Protect your hands while working.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GardeningTools;
