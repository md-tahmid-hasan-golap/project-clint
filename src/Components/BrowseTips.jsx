import React from "react";
import { useLoaderData } from "react-router-dom";
import ShareTipCard from "./ShareTipCard";

const BrowseTips = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="my-12">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-green-700 mb-4">
        🌿 Share a Garden Tip
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {data.map((tip) => (
          <ShareTipCard key={tip._id} tip={tip}></ShareTipCard>
        ))}
      </div>
    </div>
  );
};

export default BrowseTips;
