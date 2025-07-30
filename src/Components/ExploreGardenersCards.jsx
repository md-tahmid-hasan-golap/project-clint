import React from "react";

const ExploreGardenersCards = ({ ExploreGardener }) => {
  const { location, email, specialty, photo, number, name, status } =
    ExploreGardener;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden md:flex hover:shadow-2xl transition-shadow duration-300">
      {/* Photo Section */}
      <div className="md:w-1/3">
        <img
          className="w-full h-48 md:h-full object-cover"
          src={photo}
          alt={name}
        />
      </div>

      {/* Info Section */}
      <div className="p-5 md:w-2/3 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-2">{name}</h2>

          <p className="text-gray-700 mb-1">
            <span className="font-semibold">Location: </span>
            {location}
          </p>

          <p className="text-gray-700 mb-1">
            <span className="font-semibold">Email: </span>
            {email}
          </p>

          <p className="text-gray-700 mb-1">
            <span className="font-semibold">Specialty: </span>
            {specialty}
          </p>

          <p className="text-gray-700 mb-1">
            <span className="font-semibold">Phone: </span>
            {number}
          </p>
        </div>

        <div>
          <p
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium 
    ${
      status.toLowerCase() === "active"
        ? "bg-green-100 text-green-800"
        : "bg-red-100 text-red-800"
    }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExploreGardenersCards;
