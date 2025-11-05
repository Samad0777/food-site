import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
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

const BlogDescrip = () => {

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

const { productID } = useParams();

  
  const blog = DataList.find(item => item.id === Number(productID));

  console.log(blog);
  
  

  return (
    <>
      <section className="h-auto flex flex-col justify-items-center items-center">
        <div className="flex justify-center items-center mt-12 tracking-wider">
          <h1 className="font-playfair text-center -tracking-wide md:tracking-normal md:w-[65%] text-secondary text-3xl lg:text-5xl">
            The secret tips & tricks to prepare a perfect burger & pizza for our
            customers
          </h1>
        </div>

        <div className="p-10 w-[90vw] h-[100vw] md:h-[100vh]">
          <img src={blog.img} alt="img" className="w-[100%] h-[100%]"/>
        </div>

        <div className="m-10">
          <div>
            <h3 className="text-secondary font-dmsans font-bold mt-4 mb-4">
              What do you need to prepare a home-made burger?
            </h3>
            <p className="mb-6">
              Creating the perfect burger and pizza is an art, combining
              ingredients, techniques, and passion to craft dishes that truly
              delight the palate. Today, we'll unveil some closely guarded
              secrets and insider tips for mastering these beloved staples of
              the culinary world.
            </p>
            <ol className="list-inside list-decimal space-y-3">
              <li>
                <span className="font-medium">Quality Beef:</span> The heart of
                a perfect burger is top-notch beef. Opt for fresh, high-quality
                ground beef with a fat content of about 20% for the juiciest,
                most flavorful results.
              </li>
              <li>
                <span className="font-medium">Seasoning:</span> Simplicity is
                key here. A generous pinch of salt and black pepper just before
                cooking will enhance the beef's natural flavors without
                overshadowing them.
              </li>
              <li>
                <span className="font-medium">Don’t Overwork the Meat:</span>{" "}
                When forming your patties, be gentle. Overworking the meat can
                lead to dense, tough burgers. You want a patty that's firm
                enough to hold together, but not compressed.
              </li>
              <li>
                <span className="font-medium">Cooking:</span> High heat is
                crucial. Whether you're grilling or pan-searing, make sure your
                cooking surface is hot enough to form a nice crust on the patty,
                sealing in those delicious juices.
              </li>

              <li>
                <span className="font-medium">Resting:</span> Allow your cooked
                burgers to rest for a few minutes before serving. This lets the
                juices redistribute throughout the patty, ensuring a moist and
                flavorful bite.
              </li>
            </ol>
          </div>

          <div className="mt-10">
            <h3 className="text-secondary font-dmsans font-bold mt-4 mb-4">
              What are the right ingredients to make it delicious?
            </h3>
            <p className="mb-6">
              Creating the perfect burger and pizza is an art, combining
              ingredients, techniques, and passion to craft dishes that truly
              delight the palate. Today, we'll unveil some closely guarded
              secrets and insider tips for mastering these beloved staples of
              the culinary world.
            </p>
            <ol className="list-inside list-decimal space-y-3">
              <li>
                <span className="font-medium">Quality Beef:</span> The heart of
                a perfect burger is top-notch beef. Opt for fresh, high-quality
                ground beef with a fat content of about 20% for the juiciest,
                most flavorful results.
              </li>
              <li>
                <span className="font-medium">Seasoning:</span> Simplicity is
                key here. A generous pinch of salt and black pepper just before
                cooking will enhance the beef's natural flavors without
                overshadowing them.
              </li>
              <li>
                <span className="font-medium">Don’t Overwork the Meat:</span>{" "}
                When forming your patties, be gentle. Overworking the meat can
                lead to dense, tough burgers. You want a patty that's firm
                enough to hold together, but not compressed.
              </li>
              <li>
                <span className="font-medium">Cooking:</span> High heat is
                crucial. Whether you're grilling or pan-searing, make sure your
                cooking surface is hot enough to form a nice crust on the patty,
                sealing in those delicious juices.
              </li>

              <li>
                <span className="font-medium">Resting:</span> Allow your cooked
                burgers to rest for a few minutes before serving. This lets the
                juices redistribute throughout the patty, ensuring a moist and
                flavorful bite.
              </li>
            </ol>
          </div>
        </div>

        <div className="p-10 w-[90vw] h-[100vw] md:h-[100vh]">
          <img src={blog.img} alt="img"  className="w-[100%] h-[100%]"/>
        </div>

        <div className="m-10">
          <h3 className="text-secondary font-dmsans font-bold mt-4 mb-4">
            What are the right ingredients to make it delicious?
          </h3>
          <p className="mb-6">
            Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed
            eget viverra egestas nisi in consequat. Fusce sodales augue a
            accumsa Cras sollicitudin, le ligula, porttitor eu, consequat vitae,
            eleifend ac, enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit lobortis arcu enim urna adipiscing praesent velit
            viverra sit semper lorem eu cursus ve of all hendrerit elementum
            morbi curabitur etiam nibh justo, lorem aliquet donec sed sit mi
            dignissim at ante massa mattis magna sit amet purus gravida quis
            blandit turpis..
          </p>
        </div>

        <div className="m-10 border">
        <div className="text-center">
          <h2>Read More Articles</h2>
          <p>
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
            </div>
        </div>
      </section>
    </>
  );
};

export default BlogDescrip;
