import React from "react";

const Gardener = ({ garden }) => {
  const { name, specialty, location, photo, number, status, email } = garden;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row gap-4 p-4 hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="md:w-1/3 w-full">
        <img
          className="w-full h-[220px] object-cover rounded-lg"
          src={photo}
          alt={name}
        />
      </div>

      {/* Info */}
      <div className="flex flex-col justify-between md:w-2/3 w-full text-gray-700 space-y-2">
        <h2 className="text-xl font-bold text-green-700">{name}</h2>
        <p>
          <span className="font-semibold">Specialty:</span>{" "}
          <span className="text-gray-800">{specialty}</span>
        </p>
        <p>
          <span className="font-semibold">Location:</span>{" "}
          <span className="text-gray-800">{location}</span>
        </p>
        <p>
          <span className="font-semibold">Phone:</span>{" "}
          <span className="text-gray-800">{number}</span>
        </p>
        <p>
          <span className="font-semibold">Email:</span>{" "}
          <span className="text-gray-800">{email || "Not Provided"}</span>
        </p>
        <p>
          <span className="font-semibold">Status:</span>{" "}
          <span
            className={`px-2 py-1 text-sm font-medium rounded ${
              status.trim().toLowerCase() === "active"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {status}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Gardener;
