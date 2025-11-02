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
import T1 from "../assets/images/T-1.png";
import T2 from "../assets/images/T-2.png";
import T3 from "../assets/images/T-3.png";
import burger from "../assets/images/Burger.png"
import pizza from "../assets/images/Pizza.png"
import cupcake from "../assets/images/cup-cake.png"
import ParmesanTruffleFries from "../assets/images/Parmesan Truffle Fries.png"
import friedchicken from "../assets/images/fried-chicken.png"
import { motion,AnimatePresence, easeIn, easeInOut } from "motion/react"
import { NavLink } from "react-router-dom";

const Home = () => {

const CardData = [
    {
      id: 1,
      tittle: "Breakfast",
      img: (
        <svg
          width="48"
          height="50"
          viewBox="0 0 48 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_0_1215)">
            <path
              d="M20 3V10"
              stroke="#474747"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 5V12"
              stroke="#474747"
             strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M30 5V12"
              stroke="#474747"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M37 23H45V31C45 33.209 43.209 35 41 35H37"
              stroke="#474747"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25 47H15C8.373 47 3 41.627 3 35V19H37V35C37 41.627 31.627 47 25 47Z"
              stroke="#474747"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28 27H18V37H28V27Z"
              stroke="#474747"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23 19V27"
              stroke="#474747"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_0_1215">
              <rect width="48" height="50" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),

      desc: "In the new era of technology we look in the future with certainty and pride for our life.",
    },

    {
      id: 2,
      tittle: "Main Dishes",
      img: (
        <svg
          width="53"
          height="50"
          viewBox="0 0 53 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.1414 43.8498V47.3717C13.1414 48.0688 13.4183 48.7373 13.9112 49.2302C14.4041 49.7231 15.0726 50 15.7697 50H36.796C37.4931 50 38.1616 49.7231 38.6545 49.2302C39.1474 48.7373 39.4243 48.0688 39.4243 47.3717V43.8498C43.4197 41.5431 46.7375 38.2253 49.0443 34.2299C51.3511 30.2345 52.5656 25.7024 52.5657 21.0889C52.5657 20.3918 52.2888 19.7233 51.7959 19.2304C51.303 18.7375 50.6345 18.4606 49.9374 18.4606C49.8893 16.8514 49.429 15.2814 48.6007 13.9009C47.7724 12.5204 46.6038 11.3755 45.2065 10.5757C44.8715 8.28633 43.7224 6.19441 41.9701 4.68345C40.2178 3.1725 37.9796 2.34377 35.6658 2.3492C34.7786 2.34767 33.8949 2.46254 33.0375 2.69087C31.2285 0.963709 28.8235 0 26.3223 0C23.8211 0 21.4161 0.963709 19.607 2.69087C18.7496 2.46254 17.866 2.34767 16.9787 2.3492C14.6559 2.33107 12.405 3.15405 10.6417 4.66615C8.87839 6.17825 7.72178 8.27733 7.38548 10.5757C5.98333 11.3722 4.80941 12.5157 3.97637 13.8964C3.14332 15.2771 2.67911 16.8488 2.62828 18.4606C1.93122 18.4606 1.26271 18.7375 0.769807 19.2304C0.276908 19.7233 0 20.3918 0 21.0889C0.000117201 25.7024 1.21461 30.2345 3.5214 34.2299C5.8282 38.2253 9.14602 41.5431 13.1414 43.8498ZM10.8023 14.9387L12.9837 14.2553L12.5632 11.8899C12.5701 11.3238 12.6884 10.7646 12.9113 10.2443C13.1343 9.72397 13.4576 9.25265 13.8628 8.85727C14.2679 8.46188 14.747 8.15018 15.2726 7.93995C15.7982 7.72973 16.3601 7.6251 16.9262 7.63205C17.6852 7.6277 18.4339 7.80811 19.1076 8.15771L21.2365 9.34043L22.5507 7.31666C22.9617 6.7041 23.5171 6.20212 24.168 5.85501C24.8189 5.50791 25.5452 5.32634 26.2828 5.32634C27.0205 5.32634 27.7468 5.50791 28.3977 5.85501C29.0486 6.20212 29.604 6.7041 30.015 7.31666L31.3292 9.34043L33.4581 8.15771C34.1318 7.80811 34.8805 7.6277 35.6395 7.63205C36.7764 7.61775 37.8733 8.05044 38.6942 8.83696C39.5152 9.62348 39.9944 10.7009 40.0288 11.8373L39.6083 14.0713L41.7634 14.8073C42.5585 15.0561 43.261 15.5368 43.7808 16.1878C44.3007 16.8387 44.6141 17.6302 44.6808 18.4606H7.88485C7.95162 17.6302 8.26503 16.8387 8.78487 16.1878C9.3047 15.5368 10.0072 15.0561 10.8023 14.8073V14.9387ZM47.1514 23.7172C46.7129 27.1582 45.4299 30.4372 43.4167 33.2621C41.4036 36.087 38.7228 38.3699 35.6133 39.9074C35.1758 40.1278 34.8087 40.4661 34.5533 40.884C34.2978 41.302 34.1643 41.783 34.1677 42.2728V44.7434H18.398V42.2728C18.4014 41.783 18.2679 41.302 18.0124 40.884C17.757 40.4661 17.3899 40.1278 16.9524 39.9074C13.8429 38.3699 11.1621 36.087 9.14895 33.2621C7.13577 30.4372 5.85276 27.1582 5.41427 23.7172H47.1514Z"
            fill="#474747"
          />
        </svg>
      ),
      desc: "In the new era of technology we look in the future with certainty and pride for our life.",
    },

    {
      id: 3,
      tittle: "Drinks",
      img: (
        <svg
          width="40"
          height="50"
          viewBox="0 0 40 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.4153 1.17023e-08C35.1182 0.000303338 35.813 0.148777 36.4546 0.435735C37.0962 0.722693 37.6701 1.14169 38.1388 1.66539C38.6076 2.18909 38.9606 2.80572 39.175 3.47507C39.3893 4.14442 39.4602 4.85143 39.3828 5.55L34.9403 45.55C34.8049 46.7734 34.223 47.9039 33.306 48.725C32.3889 49.5461 31.2013 50.0001 29.9703 50H9.44534C8.21443 50.0001 7.02675 49.5461 6.10971 48.725C5.19268 47.9039 4.61074 46.7734 4.47534 45.55L0.0303426 5.55C-0.0469921 4.85122 0.0239051 4.14399 0.238407 3.47447C0.452909 2.80495 0.806192 2.1882 1.2752 1.66446C1.7442 1.14072 2.31839 0.721774 2.96027 0.43497C3.60215 0.148167 4.2973 -4.80856e-05 5.00034 1.17023e-08H34.4153ZM34.4153 5H5.00034L6.06284 14.5575C6.96037 14.3865 7.86815 14.2746 8.78034 14.2225C11.7778 14.0475 15.9203 14.4075 20.6928 16.4525C24.6703 18.1575 28.0278 18.4225 30.3428 18.285C31.2313 18.2378 32.1139 18.1123 32.9803 17.91L34.4153 5ZM32.4028 23.1C31.8728 23.175 31.2803 23.24 30.6353 23.275C27.6378 23.4525 23.4953 23.0925 18.7228 21.05C14.7453 19.3425 11.3878 19.0775 9.07284 19.215C8.24684 19.2605 7.42585 19.3726 6.61784 19.55L9.44534 45H29.9703L32.4028 23.1ZM17.2078 27.5C17.2078 28.163 16.9444 28.7989 16.4756 29.2678C16.0068 29.7366 15.3709 30 14.7078 30C14.0448 30 13.4089 29.7366 12.9401 29.2678C12.4712 28.7989 12.2078 28.163 12.2078 27.5C12.2078 26.837 12.4712 26.2011 12.9401 25.7322C13.4089 25.2634 14.0448 25 14.7078 25C15.3709 25 16.0068 25.2634 16.4756 25.7322C16.9444 26.2011 17.2078 26.837 17.2078 27.5ZM22.2078 37.5C22.8709 37.5 23.5068 37.2366 23.9756 36.7678C24.4444 36.2989 24.7078 35.663 24.7078 35C24.7078 34.337 24.4444 33.7011 23.9756 33.2322C23.5068 32.7634 22.8709 32.5 22.2078 32.5C21.5448 32.5 20.9089 32.7634 20.4401 33.2322C19.9712 33.7011 19.7078 34.337 19.7078 35C19.7078 35.663 19.9712 36.2989 20.4401 36.7678C20.9089 37.2366 21.5448 37.5 22.2078 37.5Z"
            fill="#474747"
          />
        </svg>
      ),
      desc: "In the new era of technology we look in the future with certainty and pride for our life.",
    },

    {
      id: 4,
      tittle: "Desserts",
      img: (
        <svg
          width="51"
          height="50"
          viewBox="0 0 51 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.9715 7.37707L27.9296 7.24794L28.1426 7.52297C28.3254 7.72757 28.4763 7.68229 28.6054 7.52297C28.6054 7.52297 29.7341 6.22662 28.8503 4.7173C28.3639 3.71779 26.4454 1.33976 25.4358 0.595154C23.6112 -0.563674 22.434 0.326829 22.434 0.326829C22.2881 0.435836 22.1807 0.595154 22.2881 0.742733L22.5732 1.03621C19.1302 1.72547 18.6237 4.40705 18.399 5.59438L18.3621 5.7906L17.8993 9.0105C17.7517 10.1341 18.3621 10.7429 19.4354 10.7429H22.9371C24.1579 10.7596 26.7003 10.7915 27.9715 7.37707Z"
            fill="#474747"
          />
          <path
            d="M16.7049 5.55247L16.3309 8.15523L4.47767 19.1197C4.0278 19.4953 3.69155 19.989 3.50667 20.5451C3.43528 20.7527 3.38417 20.9667 3.35406 21.1841V22.0394C3.80854 22.0763 4.33345 22.0394 4.90532 21.9119L42.4104 11.1521C42.5352 11.1163 42.6666 11.1099 42.7942 11.1335C42.9218 11.157 43.0423 11.2099 43.146 11.288C43.2497 11.366 43.3339 11.4671 43.3919 11.5832C43.4499 11.6993 43.4802 11.8273 43.4804 11.9571V20.0839C43.4812 20.2639 43.4239 20.4394 43.3169 20.5841C43.2099 20.7289 43.059 20.8352 42.8867 20.8872C35.709 23.0506 7.17434 31.6488 6.47334 31.8383C5.6801 32.0563 3.92425 32.385 3.35406 32.3112V37.5687C3.86556 37.6391 4.39717 37.619 4.90532 37.4831L42.4088 26.6244C42.5336 26.5882 42.6652 26.5816 42.793 26.6051C42.9209 26.6285 43.0415 26.6813 43.1455 26.7594C43.2494 26.8375 43.3338 26.9386 43.3919 27.0549C43.45 27.1712 43.4803 27.2994 43.4804 27.4293V35.2309L44.7449 34.8687L44.7566 34.8653L44.827 34.8418C45.2376 34.7066 45.6328 34.5284 46.006 34.3102C46.7657 33.8574 46.8344 33.5505 46.8344 33.5119V11.6703C46.8344 11.3047 46.6835 10.6574 46.2861 10.0318C45.9138 9.44486 45.3855 8.97026 44.6929 8.74051L30.8456 5.49378C30.7844 4.94133 30.6097 4.40748 30.3325 3.92575C29.992 3.25326 29.3212 2.33257 28.6739 1.54102L45.523 5.49042C45.5625 5.50015 45.6017 5.51134 45.6404 5.52396C47.2587 6.02707 48.3974 7.10037 49.1169 8.23405C49.8212 9.34089 50.1885 10.6037 50.1885 11.6703V33.5119C50.1885 35.4908 48.6071 36.6648 47.7182 37.193C47.0958 37.5596 46.4336 37.8539 45.7444 38.0701L45.7008 38.0835L45.6857 38.0869L45.6806 38.0886C45.6806 38.0886 45.4358 38.159 45.6773 38.0886L4.74432 49.8378C4.72043 49.8445 4.69639 49.8507 4.67221 49.8563C3.47649 50.1414 2.11809 50.0659 1.1169 49.0429C0.219691 48.1273 0 46.8209 0 45.6553V21.112L0.00167711 21.0214V20.9963L0.00670824 20.9594C0.0167112 20.8097 0.0351882 20.6608 0.0620502 20.5133C0.109007 20.2416 0.191182 19.8743 0.335406 19.4534C0.704246 18.364 1.35524 17.3919 2.22207 16.636L17.9794 2.06257C17.9435 2.11404 17.9082 2.16603 17.8738 2.21854C17.1091 3.40252 16.876 4.63849 16.7619 5.2439L16.7552 5.28415C16.7394 5.37376 16.7226 5.46321 16.7049 5.55247Z"
            fill="#474747"
          />
        </svg>
      ),
      desc: "In the new era of technology we look in the future with certainty and pride for our life.",
    },
  ];


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

  const testimonialData = 
    [
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
      }

    ];

    const blogData1 = [

      {
      id:1,
      img:burger,
      date:"January 3, 2023",
      title:"The secret tips & tricks to prepare a perfect burger & pizza for our customers",
      desc:`Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing
       massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.`
    }

    ];

  const blogCardsData = [

    {
      id:1,
      img:ParmesanTruffleFries,
      date:"January 3, 2023",
      title:"How to prepare the perfect french fries in an air fryer",
      desc:`Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing
       massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.`
    },

    {
      id:2,
      img:friedchicken,
      date:"January 3, 2023",
      title:"How to prepare delicious chicken tenders",
      desc:`Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing
       massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.`
    },

    {
      id:3,
      img:cupcake,
      date:"January 3, 2023",
      title:"7 delicious cheesecake recipes you can prepare",
      desc:`Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing
       massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.`
    },

    {
      id:4,
      img:pizza,
      date:"January 3, 2023",
      title:"5 great pizza restaurants you should visit this city",
      desc:`Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing
       massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.`
    },
  ]
 
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
              <motion.h2 
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
                className="text-secondary text-4xl
         md:text-6xl py-10 font-dmsans-reg tracking-wider text-center"
              >
                Best food for your taste
              </motion.h2>

              <motion.p 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-secondary font-dmsans text-center tracking-tighter  md:tracking-widest">
                Discover delectable cuisine and unforgettable moments in our
                welcoming, culinary haven.
              </motion.p>

              <motion.div initial={{ y: 70, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeIn" }}
              className="buttons my-8 space-x-10 flex justify-center items-center">
               
              <NavLink to='/booktable'>
                <button           
                  className="font-dmsans cursor-pointer border px-4
           py-3 rounded-3xl text-[#F9F9F7] bg-red-primary transition-all duration-300 ease-in-out
            hover:scale-95 hover:bg-[#991e28]"
                >
                  Book A Table
                </button>
              </NavLink>
              

                <Link to="/menu">
               

                  <button
                    
                    className="font-dmsans cursor-pointer hover:scale-95 border px-3 md:px-4 py-3 rounded-3xl
          transition-all duration-300 ease-in-out hover:bg-primary hover:text-white "
                  >
                    Explore Menu
                  </button>
               
                </Link>
              </motion.div>
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
            {CardData.map((items, index) => {

            return ( 
            <Cards key={items.id} tittle={items.tittle} img ={items.img}
              desc={items.desc} Explore={true} imgs={true} images={false}
            />
         );
      })}


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
                <div key={items.id} className="m-4 cursor-pointer hover:scale-95 transition-all ease-in-out duration-300">
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
                className="rounded-2xl overflow-hidden object-cover w-full h-auto "
                src={Chef}
                alt="chef"
              />

              <div className="gap-4 md:px-4 grid grid-cols-2 grid-rows-1 sm:grid-cols-1 sm:grid-rows-2  md:grid-cols-1 md:grid-rows-2">
                <img
                  className="rounded-2xl  w-full h-auto"
                  src={Dish1}
                  alt="dish1"
                />
                <img
                  className="rounded-2xl  w-full h-auto"
                  src={Dish2}
                  alt="dish2"
                />
              </div>
            </div>
          </div>

          <div className="right lg:h-[85%] w-[90%] lg:w-[40%]">
            <div className="px-10 lg:px-4 py-8">
              <h3 className="py-4 font-playfair text-secondary md:text-4xl text-2xl">
                Fastest Food Delivery in City
              </h3>
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
                  <p>Delivery within 30 minutes</p>
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
                        d="M12.6513 15.791L16.4188 12.0235M12.9653 12.3375H12.9716M16.1049 15.477H16.1112M18.9305 20.1864V10.1397C18.9305 9.44617 18.3682 8.88391 17.6746 8.88391H11.3955C10.7019 8.88391 10.1396 9.44617 10.1396 10.1397V20.1864L12.3374 18.9306L14.5351 20.1864L16.7328 18.9306L18.9305 20.1864ZM13.2792 12.3375C13.2792 12.5108 13.1387 12.6514 12.9653 12.6514C12.7919 12.6514 12.6513 12.5108 12.6513 12.3375C12.6513 12.1641 12.7919 12.0235 12.9653 12.0235C13.1387 12.0235 13.2792 12.1641 13.2792 12.3375ZM16.4188 15.477C16.4188 15.6504 16.2783 15.791 16.1049 15.791C15.9315 15.791 15.7909 15.6504 15.7909 15.477C15.7909 15.3036 15.9315 15.1631 16.1049 15.1631C16.2783 15.1631 16.4188 15.3036 16.4188 15.477Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p>Best Offer & Prices</p>
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
                  <p>Online Services Available</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* online service section ended */}

      {/* testimonial section started here  */}

      <section className="h-auto flex justify-center mt-40 items-center">
        <div className="container h-[90%] w-[95%]">
          <div>
            <h3 className="font-playfair text-2xl text-center py-4 md:text-4xl">
              What Our Customers Say
            </h3>
          </div>

          <div className="mt-6 grid grid-cols-1 grid-rows-3 gap-8 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1">
            {testimonialData.map((items,index)=>{
              return (
                <div key={items.id} className="m-4 cursor-pointer hover:scale-95 transition-all ease-in-out duration-300">
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
                      <p className="text-[#414536] font-dmsans tracking-wide py-4 text-left">{items.desc}</p>
                    </div>

                    <div className="flex items-center ">
                     <img
                      src={items.img}
                      
                      alt="customerImg"
                    /> 
                    <div className="flex flex-col px-4">

                      <h4 className="text-xl font-dmsans">
                        {items.name}
                      </h4>

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


      {/* Our Blogs And Articles section Started  */}

        <section className="h-auto mt-24 flex justify-center items-center">
            <div className=" h-[90%] w-[97%] md:w-[90%]">

              <div className="md:flex items-center justify-between py-4 px-2">
                <h3 className="font-playfair text-2xl md:text-4xl px-3 text-center">
                  Our Blog & Articles
                </h3>

                <div className="text-center my-8">
                  <NavLink to='/blogs'>
                <button className="cursor-pointer font-dmsans text-white bg-red-primary 
                          transition-all duration-300 ease-in-out hover:text-gray-200 active:scale-95 hover:scale-95
                           hover:bg-[#991e28] rounded-4xl py-4 px-4">
                  Read All Articles
                </button>
                  </NavLink>
                </div>

              </div>

              <div className="grid grid-cols-1 grid-row-5 md:grid-cols-1
               md:grid-row-2 lg:grid-cols-2 lg:grid-row-1">
                <div className="">
                  {blogData1.map((items , index)=>{
                  return (
              <Link key={items.id} to='/blogs'>
              
                <div  className="m-4 cursor-pointer hover:scale-95 transition-all ease-in-out duration-300">
                  <div
                    className="shadow-2xl flex flex-col items-center justify-center
                              px-2 py-12 text-center w-[100%] h-[100%]  rounded-2xl"
                  >
                    <div className="px-2 py-2 text-left w-full">
                     <img className="rounded-2xl"
                      src={items.img}
                      
                      alt="customerImg"
                    /> 
                    <p className="py-3">
                      {items.date}
                    </p>

                      <h3 className="font-dmsans text-secondary text-2xl">
                        {items.title}
                      </h3>


                    <div className="px-2 py-4">
                      <p className="text-[#414536] font-dmsans tracking-wide py-4 text-left">{items.desc}</p>
                    </div>


                    </div>
                  </div>
                </div></Link>
              );
                })}
                </div>

                <div className="grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-2">

                {blogCardsData.map((items , index)=>{
                  return (
                <div key={items.id} className="m-4 cursor-pointer hover:scale-95 transition-all ease-in-out duration-300">
                  <div
                    className="shadow-2xl flex flex-col items-center justify-center
                              px-2 py-12 text-center w-[100%] h-[100%]  rounded-2xl"
                  >
                    <div className="px-2 py-2 text-left w-full">
                     <img className="rounded-2xl"
                      src={items.img}
                      
                      alt="customerImg"
                    /> 
                    <p className="py-3">
                      {items.date}
                    </p>

                      <h3 className="font-dmsans text-secondary text-2xl">
                        {items.title}
                      </h3>


                    </div>
                  </div>
                </div>
              );
                })}
                </div>
              </div>

            </div>
        </section>

      {/* Our Blogs And Articles section ended  */}

    </>
  );
};

export default Home;
