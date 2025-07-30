import React from "react";

const ShareTipCard = ({ tip }) => {
  const {
    availability,
    difficulty,
    description,
    category,
    topic,
    title,
    photo,
    email,
  } = tip;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-green-200">
      <img src={photo} alt={title} className="w-full h-52 object-cover" />

      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold text-green-800">{title}</h2>
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-green-700">Topic:</span> {topic}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-green-700">Category:</span>{" "}
          {category}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-green-700">Difficulty:</span>{" "}
          {difficulty}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-green-700">Availability:</span>{" "}
          {availability}
        </p>
        {email && (
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-green-700">Shared by:</span>{" "}
            {email}
          </p>
        )}
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-green-700">Tip:</span>{" "}
          {description}
        </p>
      </div>
    </div>
  );
};

export default ShareTipCard;
