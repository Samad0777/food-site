import React from "react";
import Hero from "../assets/images/hero-section.jpg";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <>
      {/* HERO SECTION STARTED  */}

      <header
        style={{ backgroundImage: `url(${Hero})` }}
        className="h-[100vh] bg-cover bg-center flex items-center justify-center"
      >
        <div className="h-[90%] md:w-[60%]">
          <div
            className="flex items-center justify-center
    circle w-[100%] h-full rounded-full md:px-6"
          >
            <div className=" px-2 w-[100%] h-[60%]">
              <h2
                className="text-secondary text-5xl
         md:text-6xl py-10 font-dmsans-reg tracking-wider text-center"
              >
                Best food for your taste
              </h2>

              <p className="text-secondary font-dmsans text-center tracking-tighter  md:tracking-widest">
                Discover delectable cuisine and unforgettable moments in our
                welcoming, culinary haven.
              </p>

              <div className="buttons my-8 space-x-4 flex justify-center items-center">
                <button
                  className="font-dmsans cursor-pointer border px-4
           py-3 rounded-3xl text-[#F9F9F7] bg-red-primary transition-all duration-300 ease-in-out
            hover:scale-95 hover:bg-[#991e28]"
                >
                  Book A Table
                </button>

                <button
                  className="font-dmsans cursor-pointer border px-4 py-3 rounded-3xl
          transition-all duration-300 ease-in-out hover:bg-primary hover:text-white "
                >
                  Explore Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION Ended  */}

      {/* Borwse menu section started here  */}

      <section className="h-auto mt-12  w-[100%] flex justify-center items-center">
        <div className=" flex flex-col justify-center items-center w-[100%] md:w-[90%] h-[100%] ">
          <h3 className="text-4xl py-4 text-primary text-center font-dmsans-reg">
            Browse Our Menu
          </h3>

          <div className="grid grid-rows-4 grid-cols-1 
          lg:grid-cols-2 lg:grid-rows-2 xl:grid-rows-1 xl:grid-cols-4 space-y-4 space-x-4 w-[90%] h-auto px-4 py-5">
            <Cards />
          </div>

        </div>
      </section>

      {/* Borwse menu section ended here  */}
    </>
  );
};

export default Home;
