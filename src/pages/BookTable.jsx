import React from "react";
import Map from "../assets/images/Map.png";

const BookTable = () => {
  return (
    <>
      <section className="h-auto relative border border-b-green-700">
        <div className="border border-red-700 text-center py-8">
          <h1 className="font-playfair text-secondary text-4xl md:text-6xl">
            Book A Table
          </h1>
          <p className="font-dmsans text-[#495460] px-8 py-6">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>

        {/* booking section started  */}
        {/* <div className="absolute border border-green-700 bg-white">
        <form action="#">
            <input type="date" name="" id="" />
            <input type="time" name="time" id="" />
            <input type="text" placeholder="Enter your name" />
            <input type="text" placeholder="x-xxx-xxx-xxxx"/>
            <details>
                <summary>
                    1 person
                </summary>
                <summary>
                    2 person
                </summary>
            </details>
        </form>
        </div> */}
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
