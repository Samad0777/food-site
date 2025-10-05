import React from "react";
import Map from "../assets/images/Map.png";
import DatePicker from "../components/DatePicker";
import TimePicker from "../components/TimePicker";

const BookTable = () => {
  return (
    <>
      <section className="h-auto relative">
        <div className=" text-center py-8">
          <h1 className="font-playfair text-secondary text-4xl md:text-6xl">
            Book A Table
          </h1>
          <p className="font-dmsans text-[#495460] px-8 py-6">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>

        {/* booking section started  */}
        <div className="flex justify-center items-center">
          <form className="flex flex-col space-x-4 space-y-4  md:px-8 md:py-10">
            <div className="flex flex-col md:flex-row justify-between md:items-center space-x-8 space-y-4">
              <label htmlFor="DatePicker">Date</label>
              <DatePicker/>
              <label htmlFor="TimePicker">Time</label>
              <TimePicker />
            </div>

            <div className="flex flex-col md:flex-row justify-between md:items-center space-x-8 space-y-4">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                name="Name"
                placeholder="Enter your name"
                className="border border-gray-400 px-8 py-4 rounded-sm md:w-[60%] w-full"
              />

              <label htmlFor="Phone">Phone</label>
              <input
                type="text"
                name="Phone"
                placeholder="x-xxx-xxx-xxxx"
                className="border px-8 py-4 border-gray-400 rounded-sm md:w-[60%] w-full"
              />
            </div>

            <label className="py-4" htmlFor="member">Total members</label>
            <input
              type="number"
              name="member"
              placeholder="Enter members"
              className="border px-8 py-4 w-full border-gray-400 rounded-sm"
            />

            <button
              type="submit"
              className="my-4 cursor-pointer hover:bg-[#972730] transition-all ease-in-out duration-300 active:scale-90 w-full bg-red-primary text-white py-4 px-4 rounded-3xl"
            >
              Book A Table
            </button>
          </form>
        </div>

        {/* booking section ended  */}

        <div
          className="h-[100vh]"
          style={{ backgroundImage: `url(${Map})` }}
        ></div>
      </section>
    </>
  );
};

export default BookTable;
