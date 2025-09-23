import React from "react";
import eggrice from "../assets/images/eggrice.png";
import vidoeres from "../assets/video/restaurant-env.mp4";
import { Link } from "react-router-dom";
import Timer from "../assets/images/timer 1.png";
import checklist from "../assets/images/checklist.png";
import menulist from "../assets/images/menulist.png";
import Salad from "../assets/images/salad.png";
import T1 from "../assets/images/T-1.png";
import T2 from "../assets/images/T-2.png";
import T3 from "../assets/images/T-3.png";

const About = () => {
  const testimonialData = [
    {
      id: 1,
      img: T1,
      desc: `Last night, we dined at place and were simply blown away. From the moment we stepped in,
           we were enveloped in an inviting atmosphere and greeted with warm smiles.`,
      title: "“The best restaurant”",
      name: "Sophire Robson",
      address: "Los Angeles, CA",
    },

    {
      id: 2,
      img: T2,
      desc: `Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for
           our anniversary dinner. Each dish was prepared and beautifully presented.`,
      title: "“Simply delicious”",
      name: "Matt Cannon",
      address: "San Diego, CA",
    },

    {
      id: 3,
      img: T3,
      desc: `The culinary experience at place is first to none. The atmosphere is vibrant,
           the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.`,
      title: "“One of a kind restaurant”",
      name: "Andy Smith",
      address: "San Francisco, CA",
    },
  ];

  const WhatweOfferData = [
    {
      id: 1,
      img: Timer,
      title: "Multi Cuisine",
      desc: "In the new era of technology we look in the future with certainty life.",
    },

    {
      id: 2,
      img: checklist,
      title: "Easy To Order",
      desc: "In the new era of technology we look in the future with certainty life.",
    },

    {
      id: 3,
      img: menulist,
      title: "Fast Delivery",
      desc: "In the new era of technology we look in the future with certainty life.",
    },
  ];

  return (
    <>
      {/* Visit us section start here  */}

      <section className="min-h-screen py-12 flex items-center justify-center">
        <div className=" grid grid-rows-2 grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 w-[90%] md:w-[80%]">
          {/* left side  */}
          <div className="relative left h-[100%] w-[100%]">
            <div className=" bg-center rounded-2xl bg-cover lg:h-[82%] w-[100%] h-auto lg:w-[94%]">
              <img
                src={eggrice}
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

      {/* sample video section started  */}

      <section className="h-[50vh] mt-32 sm:mt-4">
        <div className="relative w-full  h-[100%]">
          <div className="vide bg-black/20 opacity-90">
            <video
              autoPlay
              loop
              muted
              className="absolute object-cover w-full h-[100%]"
              src={vidoeres}
            ></video>
          </div>

          <div
            className="absolute flex w-full opacity-95 justify-center drop-shadow-lg
     items-center text-[#ffffff] text-2xl md:text-4xl top-[50%] font-playfair"
          >
            <p className="text-center ">
              Feel the authentic & original taste from us
            </p>
          </div>
        </div>
      </section>

      <section className="h-auto">
        <div
          className="h-auto px-4 py-4 grid grid-cols-1 grid-rows-3
       md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1"
        >
          {WhatweOfferData.map((items, index) => {
            return (
              <div
                key={items.id}
                className="m-4 cursor-pointer hover:scale-95 
                transition-all ease-in-out duration-300"
              >
                <div
                  className="shadow-2xl flex flex-col items-center justify-center
                    px-4 py-12 text-center w-[100%] h-auto  rounded-2xl"
                >
                  <div className="flex items-center ">
                    <img src={items.img} alt="customerImg" />
                    <div className="flex flex-col px-4 space-y-4">
                      <h4 className="text-xl font-dmsans">{items.title}</h4>

                      <p className="font-dmsans text-[#414536]">{items.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* sample video section ended */}

      {/* Info valuable for guest section started  */}

      <section className="h-auto flex justify-center items-center mt-24">
        <div className="flex flex-col lg:flex-row justify-center h-[90%] w-[90%]">
          <div className="left w-full h-full px-4 py-4">
            <div>
              <h3 className="text-balance font-playfair text-3xl md:text-4xl text-secondary py-6">
                A little information for our valuable guest
              </h3>
              <p className="text-[#414536]">
                At place, we believe that dining is not just about food, but
                also about the overall experience. Our staff, renowned for their
                warmth and dedication, strives to make every visit an
                unforgettable event.
              </p>
            </div>

            <div className=" mt-10 font-dmsans text-[#414536]  grid grid-cols-2 grid-rows-2">
              <div className=" text-center  py-10">
                <p className="text-secondary font-playfair text-3xl md:text-4xl py-2">
                  3
                </p>
                <p>Locations</p>
              </div>
              <div className=" text-center py-10">
                <p className="text-secondary font-playfair text-3xl md:text-4xl py-2">
                  1995
                </p>
                <p>Founded</p>
              </div>

              <div className=" text-center py-10">
                <p className="text-secondary font-playfair text-3xl md:text-4xl py-2">
                  65+
                </p>
                <p>Staff Members</p>
              </div>

              <div className=" text-center py-10">
                <p className="text-secondary font-playfair text-3xl md:text-4xl py-2">
                  100%
                </p>
                <p>Satisfied Customers</p>
              </div>
            </div>
          </div>

          <div className="right flex items-center justify-center w-full h-auto">
            <div className="md:w-[60%] lg:w-[70%] h-[85%]">
              <img
                className="rounded-xl w-[100%] h-[100%]"
                src={Salad}
                alt="salad"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Info valuable for guest section ended  */}

      {/* testimonial section started here  */}

      <section className="h-auto flex justify-center mt-40 items-center">
        <div className="container h-[90%] w-[95%]">
          <div>
            <h3 className="font-playfair text-2xl text-center py-4 md:text-4xl">
              What Our Customers Say
            </h3>
          </div>

          <div className="mt-6 grid grid-cols-1 grid-rows-3 gap-8 
          md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1">
            
            {testimonialData.map((items, index) => {
              return (
                <div
                  key={items.id}
                  className="m-4 cursor-pointer hover:scale-95 transition-all ease-in-out duration-300"
                >
                  <div
                    className="shadow-2xl flex flex-col items-center justify-center
                              px-2 py-12 text-center w-[100%] h-[100%]  rounded-2xl"
                  >
                    <div className="px-2 py-2 text-left w-full">
                      <h3 className="font-dmsans text-red-primary text-2xl">
                        {items.title}
                      </h3>
                    </div>

                    <div className="px-2 py-4">
                      <p className="text-[#414536] font-dmsans tracking-wide py-4 text-left">
                        {items.desc}
                      </p>
                    </div>

                    <div className="flex items-center ">
                      <img src={items.img} alt="customerImg" />
                      <div className="flex flex-col px-4">
                        <h4 className="text-xl font-dmsans">{items.name}</h4>

                        <p className="font-dmsans text-[#414536]">
                          {items.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* testimonial section ended here  */}
    </>
  );
};

export default About;
