import React from "react";
import { useLoaderData } from "react-router-dom";
import ExploreGardenersCards from "./ExploreGardenersCards";

const ExploreGardeners = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 text-center my-6 sm:my-8 md:my-10">
        Explore All Gardeners
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {data.map((ExploreGardener) => (
          <ExploreGardenersCards
            key={ExploreGardener._id}
            ExploreGardener={ExploreGardener}
          ></ExploreGardenersCards>
        ))}
      </div>
    </div>
  );
};

export default ExploreGardeners;
