import React, { useEffect, useState } from "react";
import Cards from "../components/Cards"
import axios from "axios";

const Menu = () => {
  const [data, setData] = useState([]);

  const apiData = async ()=>{
    const response = await axios.get("https://dummyjson.com/recipes?limit=10");
    setData(response.data.recipes)
    console.log(response.data.recipes);
    console.log(Math.floor(Math.random()+6));
    
  };

  useEffect(() => {

        apiData();

  }, [])
  

  return (
    <>
      <section className="h-auto flex justify-center items-center mt-12">
        <div className=" flex flex-col items-center h-[90%] w-full md:w-[90%]">
          <div className="flex flex-col items-center border h-auto w-full lg:w-[80%]">
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
                <li
                  className="cursor-pointer active:scale-90 bg-[#DBDFD0] text-center py-1 px-1 sm:px-3 sm:py-1 md:px-8 md:py-2 rounded-3xl hover:bg-red-primary hover:text-white
                  transition-all ease-in-out duration-300"
                >
                  All
                </li>

                <li
                  className="cursor-pointer active:scale-90 bg-[#DBDFD0] text-center py-1 px-1 sm:px-3 sm:py-1 md:px-6 md:py-2 rounded-3xl hover:bg-red-primary hover:text-white
                  transition-all ease-in-out duration-300"
                >
                  Breakfast
                </li>

                <li
                  className="cursor-pointer active:scale-90 bg-[#DBDFD0] text-center py-1 px-1 sm:px-3 sm:py-1 md:px-6 md:py-2 rounded-3xl hover:bg-red-primary hover:text-white
                  transition-all ease-in-out duration-300"
                >
                  Main Dishes
                </li>

                <li
                  className="cursor-pointer active:scale-90 bg-[#DBDFD0] text-center py-1 px-1 sm:px-3 sm:py-1 md:px-6 md:py-2 rounded-3xl hover:bg-red-primary hover:text-white
                  transition-all ease-in-out duration-300"
                >
                  Drinks
                </li>

                <li
                  className="cursor-pointer active:scale-90 bg-[#DBDFD0] text-center py-1 px-1 sm:px-3 sm:py-1 md:px-6 md:py-2 rounded-3xl hover:bg-red-primary hover:text-white
                  transition-all ease-in-out duration-300"
                >
                  Deserts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


    {/* card data section  */}
      
      <section className="h-auto flex justify-center items-center border border-green-700">

    <div className="border 
    grid grid-cols-1 grid-rows-4 space-x-4 items-center ml-6
     mr-2 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1
    border-red-700 h-[90%] w-[100%] md:w-[90%]">
 
        {data.map((items, index) => {
        return (
         <Cards key={items.id || index} tittle={items.name}  prices={true} img={false} price={"$ "+((items.id * 2) % 500 + 10)}
         desc={items.instructions[2]} images={true}  image={items.image}/>
         );
      })} 
 

    </div>
      </section>

    
    {/* card data section ended */}
    </>
  );
};

export default Menu;
