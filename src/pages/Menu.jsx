import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <section className="h-screen border flex justify-center items-center border-green-700 mt-12">
        <div className="border flex flex-col items-center border-red-700 h-[90%] w-full md:w-[90%]">
          <div className="flex flex-col items-center border h-auto w-full lg:w-[80%]">
            <div className="flex flex-col justify-center items-center border w-[100%] lg:w-[60%] text-center">
              <h1 className="text-4xl md:text-6xl text-secondary font-playfair py-6">
                Our Menu
              </h1>
              <p className="font-dmsans text-[#495460] py-6 px-4 text-center">
                We consider all the drivers of change gives you the components
                you need to change to create a truly happens.
              </p>
            </div>
            <div className="border border-blue-700 w-full mt-12">
              <div className="grid grid-cols-1 grid-rows-2 sm:flex items-center justify-around text-secondary font-dmsans">
                <NavLink
                  className="hover:bg-red-primary border transition-all duration-300 ease-in-out border-[#DBDFD0]
     hover:text-white px-6 py-4 rounded-2xl"
                >
                  All
                </NavLink>

                <NavLink
                  className="hover:bg-red-primary border transition-all duration-300 ease-in-out border-[#DBDFD0]
     hover:text-white px-4 py-4 rounded-2xl"
                >
                  Breakfast
                </NavLink>

                <NavLink
                  className="hover:bg-red-primary border transition-all duration-300 ease-in-out border-[#DBDFD0]
     hover:text-white px-4 py-4 rounded-2xl"
                >
                  Main Dishes
                </NavLink>

                <NavLink
                  className="hover:bg-red-primary border transition-all duration-300 ease-in-out border-[#DBDFD0]
     hover:text-white px-4 py-4 rounded-2xl"
                >
                  Drinks
                </NavLink>

                <NavLink
                  className="hover:bg-red-primary border transition-all duration-300 ease-in-out border-[#DBDFD0]
     hover:text-white px-4 py-4 rounded-2xl"
                >
                  Deserts
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
