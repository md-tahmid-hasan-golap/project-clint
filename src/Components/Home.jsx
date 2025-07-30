import React from "react";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import Gardener from "./Gardener";
import GardeningTipsWikes from "./GardeningTipsWikes";
import GardeningTools from "./GardeningTools";

const Home = () => {
  const gardensData = useLoaderData();
  // console.log(gardensData);
  return (
    <div className="my-7">
      <Banner></Banner>
      <div className="my-12 w-full max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#2E7D32] mb-4 text-center">
          Meet Our Gardeners
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {" "}
          {gardensData.map((garden) => (
            <Gardener key={garden._id} garden={garden}></Gardener>
          ))}
        </div>
      </div>

      {/* Gardening Tools */}
      <GardeningTools></GardeningTools>

      <GardeningTipsWikes></GardeningTipsWikes>
    </div>
  );
};

export default Home;
