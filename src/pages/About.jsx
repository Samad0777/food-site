import React from 'react'
import eggrice from "../assets/images/eggrice.png"
import { Link } from 'react-router-dom'

const About = () => {
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
    </>
  )
}

export default About
