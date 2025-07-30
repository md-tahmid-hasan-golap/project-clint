import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ShareTip = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const topic = form.topic.value;
    const difficulty = form.difficulty.value;
    const description = form.description.value;
    const category = form.category.value;
    const availability = form.availability.value;
    const email = form.email.value;
    const photo = form.photo.value;

    const allValue = {
      title,
      topic,
      difficulty,
      description,
      category,
      availability,
      email,
      photo,
    };

    fetch("http://localhost:3000/ShareGardenTip", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allValue),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Tip shared successfully!",
            icon: "success",
            draggable: true,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="py-12">
      <Link
        to="/"
        className="font-semibold text-lg flex items-center gap-3 text-gray-700 hover:text-amber-500 transition-colors duration-200 cursor-pointer"
      >
        <FaArrowLeftLong size={20} />
        <span>Back to Home</span>
      </Link>

      <div className="bg-[#F4F3F0] p-14 rounded-md mt-10">
        <div className="text-center max-w-[800px] w-full px-4 md:px-8 mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Share a New Garden Tip
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Share your valuable gardening tips and experiences with the
            community. Help fellow gardeners grow better plants and create
            greener spaces!
          </p>
        </div>

        {/* শুধু একবার form থাকবে */}
        <form onSubmit={handleAddCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
            <fieldset className="fieldset">
              <label className="font-bold">Title</label>
              <input
                type="text"
                name="title"
                className="input w-full"
                placeholder="How I Grow Tomatoes Indoors"
                required
              />
            </fieldset>

            <fieldset className="fieldset">
              <label className="font-bold">Plant Type/Topic</label>
              <input
                type="text"
                name="topic"
                className="input w-full"
                placeholder="Tomatoes, Herbs, Flowers..."
                required
              />
            </fieldset>

            <fieldset className="fieldset">
              <label className="font-bold">Difficulty Level</label>
              <select name="difficulty" className="input w-full" required>
                <option value="">Select Level</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </fieldset>

            <fieldset className="fieldset">
              <label className="font-bold">Description</label>
              <textarea
                name="description"
                className="input w-full"
                placeholder="Describe your tip here..."
                required
              />
            </fieldset>

            <fieldset className="fieldset">
              <label className="font-bold">Category</label>
              <select name="category" className="input w-full" required>
                <option value="">Select Category</option>
                <option value="Composting">Composting</option>
                <option value="Plant Care">Plant Care</option>
                <option value="Vertical Gardening">Vertical Gardening</option>
                {/* More categories */}
              </select>
            </fieldset>

            <fieldset className="fieldset">
              <label className="font-bold">Availability</label>
              <select name="availability" className="input w-full" required>
                <option value="">Select Availability</option>
                <option value="Public">Public</option>
                <option value="Hidden">Hidden</option>
              </select>
            </fieldset>

            <fieldset className="fieldset">
              <label className="font-bold">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="Your email"
              />
            </fieldset>

            <fieldset className="fieldset">
              <label className="font-bold">Image URL</label>
              <input
                type="text"
                name="photo"
                className="input w-full"
                placeholder="Enter image URL"
              />
            </fieldset>
          </div>

          <input
            type="submit"
            className="btn w-full bg-[#D2B48C] mt-4"
            value="Share Tip"
          />
        </form>
      </div>
    </div>
  );
};

export default ShareTip;
