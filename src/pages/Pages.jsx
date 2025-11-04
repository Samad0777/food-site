import React from "react";
import Cards from "../components/Cards";
import Roll from "../assets/images/roll.png";
import Baking from "../assets/images/baking.png";
import CheeseCake from "../assets/images/cheesecake.png";
import Fri from "../assets/images/fri.png";
import ChickenTender from "../assets/images/chicken-tender.png";
import Choco from "../assets/images/choco.png";
import PerfectBurger from "../assets/images/perfect.png";
import Pizza from "../assets/images/pizza-bite.png";
import Gadgets from "../assets/images/cooking-gadgets.png";
import Noodles from "../assets/images/noodles.png";
import Desserts from "../assets/images/desserts.png";
import Sushi from "../assets/images/sushi.png";
import { NavLink } from "react-router-dom";

const Pages = () => {
  const DataList = [
    {
      id: 1,
      img: Sushi,
      year: "January 3, 2023",
      desc: "How to prepare a delicious gluten free sushi",
    },

    {
      id: 2,
      img: Baking,
      year: "January 3, 2023",
      desc: "Exclusive baking lessons from the pastry king",
    },

    {
      id: 3,
      img: Fri,
      year: "January 3, 2023",
      desc: "How to prepare the perfect fries in an air fryer",
    },

    {
      id: 4,
      img: ChickenTender,
      year: "January 3, 2023",
      desc: "How to prepare delicious chicken tenders",
    },

    {
      id: 5,
      img: Choco,
      year: "January 3, 2023",
      desc: "5 great cooking gadgets you can buy to save time",
    },

    {
      id: 6,
      img: PerfectBurger,
      year: "January 3, 2023",
      desc: "The secret tips & tricks to prepare a perfect burger",
    },

    {
      id: 7,
      img: CheeseCake,
      year: "January 3, 2023",
      desc: "7 delicious cheesecake recipes you can prepare",
    },

    {
      id: 8,
      img: Pizza,
      year: "January 3, 2023",
      desc: "5 great pizza restaurants you should visit this city",
    },

    {
      id: 9,
      img: Gadgets,
      year: "January 3, 2023",
      desc: "5 great cooking gadgets you can buy to save time",
    },

    {
      id: 10,
      img: Roll,
      year: "January 3, 2023",
      desc: "How to prepare a delicious gluten free sushi",
    },

    {
      id: 11,
      img: Noodles,
      year: "January 3, 2023",
      desc: "Top 20 simple and quick desserts for kids",
    },

    {
      id: 12,
      img: Desserts,
      year: "January 3, 2023",
      desc: "Top 20 simple and quick desserts for kids",
    },
  ];
  return (
    <>
      <section className="h-auto">
        <div className="h-auto text-center py-4 px-6">
          <h1 className="text-3xl font-playfair text-secondary md:text-7xl">
            Our Blog & Articles
          </h1>
          <p className="text-[#414536] py-6 font-dmsans">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {DataList.map((items, index) => (
            <div
              key={items.id}
              className="m-4 h-full w-fit  rounded-xl cursor-pointer hover:scale-95 transition-all ease-in-out duration-300 "
            >
              <NavLink to={`/blogs/${items.id}`}>
              <div
                className="shadow-2xl flex flex-col items-center justify-center active:scale-95
                              px-2 text-center w-[100%] h-[100%]  rounded-2xl"
              >
                <div className="px-2 py-2 text-left w-full">
                  <img
                    className="rounded-2xl w-full"
                    src={items.img}
                    alt="customerImg"
                  />
                  <p className="py-3">{items.year}</p>

                  <h3 className="font-dmsans text-secondary text-2xl">
                    {items.desc}
                  </h3>
                </div>
              </div>
              </NavLink>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Pages;
