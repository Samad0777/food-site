import React from "react";
import Hero from "../assets/images/hero-section.jpg";
import Cards from "../components/Cards";
import Shawarma from "../assets/images/healthy.jpg";
import { Link } from "react-router-dom";
import Mask1 from "../assets/images/kebab-set-table 1.jpg";
import Mask2 from "../assets/images/Mask group.jpg";
import Mask3 from "../assets/images/Mask group-1.jpg";
import Mask4 from "../assets/images/Mask group-2.jpg";
import Chef from "../assets/images/cheff.jpg";
import Dish1 from "../assets/images/F-2.png";
import Dish2 from "../assets/images/F-1.png";

const Home = () => {
  const CardData1 = [
    {
      id: 1,
      img: Mask1,
      desc: "In the new era of technology we look in the future with certainty for life.",
      title: "Caterings",
    },

    {
      id: 2,
      img: Mask2,
      desc: "In the new era of technology we look in the future with certainty for life.",
      title: "Birthdays",
    },

    {
      id: 3,
      img: Mask3,
      desc: "In the new era of technology we look in the future with certainty for life.",
      title: "Weddings",
    },

    {
      id: 4,
      img: Mask4,
      desc: "In the new era of technology we look in the future with certainty for life.",
      title: "Events",
    },
  ];

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
                className="text-secondary text-4xl
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

                <Link to="/menu">
                  <button
                    className="font-dmsans cursor-pointer border px-4 py-3 rounded-3xl
          transition-all duration-300 ease-in-out hover:bg-primary hover:text-white "
                  >
                    Explore Menu
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION Ended  */}

      {/* Borwse menu section started here  */}

      <section className="h-auto mt-12  w-[100%] flex justify-center items-center mb-7">
        <div className=" flex flex-col justify-center items-center w-[100%] md:w-[90%] h-[100%] ">
          <h3 className="text-2xl md:text-3xl py-4 text-primary text-center font-dmsans-reg">
            Browse Our Menu
          </h3>

          <div
            className="grid grid-rows-4 grid-cols-1 
          lg:grid-cols-2 lg:grid-rows-2 xl:grid-rows-1 xl:grid-cols-4 space-y-4 space-x-4 w-[90%] h-auto px-4 py-5"
          >
            <Cards />
          </div>
        </div>
      </section>

      {/* Borwse menu section ended here  */}

      {/* Visit us section Started here  */}

      <section className="min-h-screen mt-22 py-8 flex items-center justify-center">
        <div className=" grid grid-rows-2 grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 w-[90%] md:w-[80%]">
          {/* left side  */}
          <div className="relative left h-[100%] w-[100%]">
            <div className=" bg-center rounded-2xl bg-cover lg:h-[82%] w-[100%] h-auto lg:w-[94%]">
              <img
                src={Shawarma}
                alt="food"
                className="h-[100%] w-[100%] rounded-2xl"
              />
              <div
                className="lg:absolute top-[50%] right-0 md:right-[2%] md:top-[47%] px-4 py-3 md:py-4
               text-[#DBDFD0] bg-primary h-auto rounded-xl w-[100%] lg:w-[75%]"
              >
                <div className="flex flex-col justify-around items-left px-4 pb-10">
                  <h3 className="text-2xl font-dmsans py-4">
                    Come and visit us
                  </h3>

                  <div className="flex flex-col my-2 md:my-4 space-x-2 space-y-4">
                    <div className="flex space-x-2 md:space-x-4">
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                          />
                        </svg>
                      </p>
                      <p>(414) 857-0107</p>
                    </div>

                    <div className="flex space-x-2 md:space-x-4">
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                          />
                        </svg>
                      </p>
                      <p>happytummy@restaurant.com</p>
                    </div>

                    <div className="flex space-x-2 md:space-x-4">
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                          />
                        </svg>
                      </p>
                      <p>
                        837 W, Marshall Lane Marshalltown, IA 50158, Los Angeles
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* left side ended  */}

          {/* right side started  */}

          <div className="right">
            <div className="h-auto w-[100%]">
              <div className="mt-5 md:mt-10 lg:mt-0 md:px-10">
                <h3 className="font-playfair text-center tracking-wide text-3xl md:text-5xl text-secondary">
                  We provide healthy food for your family.
                </h3>
                <p className="font-dmsans text-secondary py-10 px-4">
                  Our story began with a vision to create a unique dining
                  experience that merges fine dining, exceptional service, and a
                  vibrant ambiance. Rooted in city's rich culinary culture, we
                  aim to honor our local roots while infusing a global palate.
                </p>
                <p className="font-dmsans text-[#414536] pb-4 px-4">
                  At place, we believe that dining is not just about food, but
                  also about the overall experience. Our staff, renowned for
                  their warmth and dedication, strives to make every visit an
                  unforgettable event.
                </p>

                <Link to="/about">
                  <button
                    className="mx-2 font-dmsans border rounded-4xl xl:px-6  px-6 py-3.5 cursor-pointer
        transition-all duration-300 ease-in-out hover:bg-primary hover:text-white"
                  >
                    More About Us
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* right side ended  */}
        </div>
      </section>

      {/* Visit us section Ended here  */}

      {/* Events section Started  */}

      <section className="h-auto mb-24 flex items-center py-10 justify-center">
        <div className="h-[100%] w-[90%]">
          <div className=" px-4 py-4 md:py-12 w-[100%] text-center ">
            <h3
              className="font-playfair text-2xl md:text-4xl text-start 
      md:px-12 lg:w-[45%] md:w-[80%] md:tracking-wider md:text-start"
            >
              We also offer unique services for your events
            </h3>
          </div>

          <div
            className="grid h-auto grid-cols-1 grid-rows-4 space-x-4 items-center ml-6
     mr-2 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1"
          >
            {CardData1.map((items, index) => {
              return (
                <div key={items.id} className="m-4">
                  <div
                    className="shadow-2xl flex flex-col items-center justify-center
      px-2 py-2 text-center w-[98%] h-[100%]  rounded-2xl"
                  >
                    <img
                      src={items.img}
                      className="h-[100%] w-[90%]"
                      alt="eventsImg"
                    />

                    <div className="px-2 py-2">
                      <h3 className="font-dmsans text-secondary text-2xl">
                        {items.title}
                      </h3>
                    </div>
                    <div className="px-2 py-4">
                      <p className="text-[#414536] font-dmsans">{items.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events section Ended  */}

      {/* online service section started  */}

      <section className="h-auto mt-28 w-[100%] flex items-center justify-center">
        <div className="flex flex-col md:flex-row lg:items-center lg:flex-grow  lg:h-[80%] w-full md:w-[90%]">

          <div className="left h-auto flex items-center justify-center p-4 w-auto">
            <div className="md:w-[90%] grid sm:grid-cols-2 sm:grid-rows-1 md:grid-cols-2 md:grid-rows-1 gap-4 md:gap-1">
              <img
                className="rounded-2xl overflow-hidden object-cover w-full h-auto"
                src={Chef}
                alt="chef"
              />
              <div className="px-4 space-y-4">
                <img className="rounded-2xl  w-full h-auto" src={Dish1} alt="dish1" />
                <img className="rounded-2xl  w-full h-auto" src={Dish2} alt="dish2" />
              </div>
            </div>
          </div>

          <div className="right lg:h-[85%] w-[90%] lg:w-[40%]">
            <div className="px-10 lg:px-4 py-8">
              <h3 className="py-4 font-playfair text-secondary md:text-4xl text-2xl">Fastest Food Delivery in City</h3>
              <p className="font-dmsans text-primary py-4 px-2">
                Our visual designer lets you quickly and of drag a down your way
                to customapps for both keep desktop.
              </p>

              <ul className="text-secondary font-dmsans space-y-4 space-x-4">
                <li className="flex items-center space-x-2">
                  <span>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="30" height="30" rx="15" fill="#AD343E" />
                      <path
                        d="M14.535 12.0235V14.5352L16.4188 16.4189M20.1863 14.5352C20.1863 17.6563 17.6561 20.1864 14.535 20.1864C11.4139 20.1864 8.88379 17.6563 8.88379 14.5352C8.88379 11.4141 11.4139 8.88391 14.535 8.88391C17.6561 8.88391 20.1863 11.4141 20.1863 14.5352Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p>
                    Delivery within 30 minutes
                  </p>
                </li>

                <li  className="flex items-center space-x-2">
                  <span>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="30" height="30" rx="15" fill="#AD343E" />
                      <path
                        d="M12.6513 15.791L16.4188 12.0235M12.9653 12.3375H12.9716M16.1049 15.477H16.1112M18.9305 20.1864V10.1397C18.9305 9.44617 18.3682 8.88391 17.6746 8.88391H11.3955C10.7019 8.88391 10.1396 9.44617 10.1396 10.1397V20.1864L12.3374 18.9306L14.5351 20.1864L16.7328 18.9306L18.9305 20.1864ZM13.2792 12.3375C13.2792 12.5108 13.1387 12.6514 12.9653 12.6514C12.7919 12.6514 12.6513 12.5108 12.6513 12.3375C12.6513 12.1641 12.7919 12.0235 12.9653 12.0235C13.1387 12.0235 13.2792 12.1641 13.2792 12.3375ZM16.4188 15.477C16.4188 15.6504 16.2783 15.791 16.1049 15.791C15.9315 15.791 15.7909 15.6504 15.7909 15.477C15.7909 15.3036 15.9315 15.1631 16.1049 15.1631C16.2783 15.1631 16.4188 15.3036 16.4188 15.477Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p>
                    Best Offer & Prices
                  </p>
                </li>

                <li className="flex items-center space-x-2">
                  <span>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="30" height="30" rx="15" fill="#AD343E" />
                      <path
                        d="M8.88379 8.88385H10.1396L10.3908 10.1397M11.3955 15.163H17.6746L20.1863 10.1397H10.3908M11.3955 15.163L10.3908 10.1397M11.3955 15.163L9.95571 16.6028C9.56014 16.9983 9.8403 17.6747 10.3997 17.6747H17.6746M17.6746 17.6747C16.981 17.6747 16.4188 18.2369 16.4188 18.9305C16.4188 19.6241 16.981 20.1863 17.6746 20.1863C18.3682 20.1863 18.9305 19.6241 18.9305 18.9305C18.9305 18.2369 18.3682 17.6747 17.6746 17.6747ZM12.6513 18.9305C12.6513 19.6241 12.089 20.1863 11.3955 20.1863C10.7019 20.1863 10.1396 19.6241 10.1396 18.9305C10.1396 18.2369 10.7019 17.6747 11.3955 17.6747C12.089 17.6747 12.6513 18.2369 12.6513 18.9305Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                    <p>
                    Online Services Available
                    </p>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* online service section ended */}
    </>
  );
};

export default Home;
