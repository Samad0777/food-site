import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import axios from "axios";
import { NavLink } from "react-router-dom";


const Menu = () => {
  const [data, setData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const apiData = async () => {
    const response = await axios.get("https://dummyjson.com/recipes?limit=50");
   setData(response.data.recipes);
   console.log(response.data.recipes);
    
  };

let filteredData = [];

if (activeCategory === "All") {
  filteredData = data;
} else {
  filteredData = data.filter((item) =>
    item.mealType.includes(activeCategory)
  );
}

 

  useEffect(() => {
    apiData();
  }, []);

  return (
    <>
      <section className="h-auto flex justify-center items-center mt-12">
        <div className=" flex flex-col items-center h-[90%] w-full md:w-[90%]">
          <div className="flex flex-col items-center h-auto w-full lg:w-[80%]">
            <div className="flex flex-col justify-center items-center w-[100%] lg:w-[60%] text-center">
              <h1 className="text-4xl md:text-6xl text-secondary font-playfair py-6">
                Our Menu
              </h1>
              <p className="font-dmsans text-[#495460] py-6 px-4 text-center">
                We consider all the drivers of change gives you the components
                you need to change to create a truly happens.
              </p>
            </div>
            <div className="w-full mt-12">
              <ul className="grid grid-cols-3 grid-rows-2 space-y-1 space-x-0.5 sm:flex justify-around items-center text-secondary font-dmsans">
               
                <NavLink
                to='#'
                className={({ isActive }) =>
            `${isActive ? "bg-red-primary text-white" : "bg-[#DBDFD0] text-black"} 
             md:px-8 text-center active:scale-95 py-2 transition-all ease-in-out duration-300 rounded-3xl hover:bg-red-primary hover:text-white`
          }     
                  onClick={()=>{
                    setActiveCategory("All");
                  }}
                >
                <li>
                  All
                </li>
                  </NavLink>

                  <NavLink
            className={({ isActive }) =>
            `${isActive ? "bg-red-primary text-white" : "bg-[#DBDFD0] text-black" } 
             md:px-8 text-center active:scale-95 py-2 transition-all ease-in-out duration-300 rounded-3xl hover:bg-red-primary hover:text-white`}
                      to='#'
                    onClick={() => {
                      setActiveCategory("Breakfast");
                    }}
                  >
                <li
                >
                  Breakfast
                </li>
                </NavLink>
                  <NavLink
            className={({ isActive }) =>
            `${isActive ? "bg-red-primary text-white" : "bg-[#DBDFD0] text-black" } 
             md:px-8 text-center active:scale-95 py-2 transition-all ease-in-out duration-300 rounded-3xl hover:bg-red-primary hover:text-white`}
                      to='#'
                    onClick={() => {
                      setActiveCategory("Lunch");
                    }}
                  >
                <li
                >
                  Main Dishes
                </li>
                </NavLink>
                  <NavLink
            className={({ isActive }) =>
            `${isActive ? "bg-red-primary text-white" : "bg-[#DBDFD0] text-black" } 
             md:px-8 text-center active:scale-95 py-2 transition-all ease-in-out duration-300 rounded-3xl hover:bg-red-primary hover:text-white`}
                  to='#'
                    onClick={() => {
                      setActiveCategory("Beverage");
                    }}
                  >
                <li
                >
                  Drinks
                </li>
                </NavLink>
                  <NavLink
            className={({ isActive }) =>
            `${isActive ? "bg-red-primary text-white" : "bg-[#DBDFD0] text-black" } 
             md:px-8 text-center active:scale-95 py-2 transition-all ease-in-out duration-300 rounded-3xl hover:bg-red-primary hover:text-white`}
                  to='#'
                    onClick={() => {
                      setActiveCategory("Dessert");
                    }}
                  >
                <li
                >
                  Desserts
                </li>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* card data section  */}

      <section className="h-auto flex justify-center items-center">
        <div
          className="
    grid grid-cols-1 grid-rows-4 space-x-4 items-center ml-6
     mr-2 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1
    h-[90%] w-[100%] md:w-[90%]"
        >
          {filteredData.map((items, index) => {
            return (
              <div key={items.id || index} className="active:scale-95">
                <Cards
                  tittle={items.name}
                  prices={true}
                  img={false}
                  price={"$ " + (((items.id * 2) % 500) + 10)}
                  desc={items.instructions[2]}
                  images={true}
                  image={items.image}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* card data section ended */}
    </>
  );
};

export default Menu;
