import React from "react";
import { Link } from "react-router-dom";

const Cards = (props) => {
 
  return (
    <>
          <div className="mt-6 mb-6 px-2 py-4 cursor-pointer transition-all ease-in-out duration-200 hover:scale-95"
          >

          <div
            
            className="shadow-2xl flex flex-col justify-evenly items-center 
            px-2 py-2 text-center h-[65vh] rounded-2xl"
          >
            {props.imgs && <div className="flex justify-center items-center">{props.img}</div>}

           {props.images && <div>
              <img className="rounded-xl" src={props.image} alt="image" />
            </div>}

            {props.prices && <div>
              <p className="text-red-primary font-dmsans text-xl">
                {props.price}
              </p>
              </div>}

            <div className="">
              <h3 className="font-dmsans text-secondary text-2xl">
                {props.tittle}
              </h3>

              <p className="text-[#414536] font-dmsans py-2">{props.desc}</p>
            </div>

          {props.Explore && <Link to='/menu'>
          <button
              className="text-red-primary cursor-pointer font-dmsans
              transition duration-200 ease-in-out hover:text-[#991e28] hover:scale-95"
              >
              Explore Menu
            </button>
          </Link>  }
              </div>
          </div>
    </>
  );
};

export default Cards;
