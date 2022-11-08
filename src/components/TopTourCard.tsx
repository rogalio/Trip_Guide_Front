import React from "react";

const TopTourCard = () => {
  return (
    <div className="flex flex-col justify-center max-w-5xl mt-10 ml-8 mr-8 md:mx-auto md:pb-8 md:px-6 ">
      <div className="text-center ">
        <h1 className="text-3xl font-bold text-c1 dark:text-c9 ">
          Top Tour Card
        </h1>
        <h2 className="mt-2 mb-8 text-md text-c4 dark:text-c5">
          Keep calm & Travel on
        </h2>
      </div>
      <div className="flex flex-col gap-6 md:flex-row ">
        <div className="relative hover:scale-95 transition ease-in-out delay-350   md:w-[350px] ">
          <img
            className="w-full md:w-[350px] h-[480px] md:h-[400px] shadow-2xl object-cover rounded-2xl"
            src="https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amFwb258ZW58MHx8MHx8&w=1000&q=80"
            alt=""
          />
          <div className="absolute bg-[#141416] bg-opacity-40 top-6 left-6 p-2 px-6 rounded-xl hover:bg-opacity-70">
            <p className=" md:text-md text-c9 top-6 left-6">Tokyo</p>
          </div>
          <div className="absolute bottom-10 left-6">
            <h3 className="text-4xl text-c8">Japan</h3>
            <p className="mt-2 text-lg text-c7">10 Popular Places</p>
          </div>
        </div>

        <div className="relative hover:scale-95 transition ease-in-out delay-350   md:w-[350px]">
          <img
            className="w-full md:w-[350px] h-[480px] md:h-[400px] shadow-2xl object-cover rounded-2xl"
            src="https://pickyourtrail.com/blog/wp-content/uploads/2020/08/Barcelona.jpeg"
            alt=""
          />
          <div className="absolute  bg-[#141416] bg-opacity-40 top-6 left-6 p-2 px-6 rounded-xl hover:bg-opacity-70">
            <p className=" md:text-md text-c9 top-6 left-6">Barcelona</p>
          </div>
          <div className="absolute bottom-10 left-6">
            <h3 className="text-4xl text-c8">Spain</h3>
            <p className="mt-2 text-lg text-c7">30 Popular Places</p>
          </div>
        </div>

        <div className="relative hover:scale-95 transition ease-in-out delay-350   md:w-[350px]">
          <img
            className="w-full   md:w-[350px] h-[480px] md:h-[400px] shadow-2xl object-cover rounded-2xl"
            src="https://www.nopostcode.com/wp-content/uploads/2021/03/Big-Lagoon-El-Nido-Feature-Image.jpg"
            alt=""
          />
          <div className="absolute bg-[#141416] bg-opacity-40 top-6 left-6 p-2 px-6 rounded-xl hover:bg-opacity-70">
            <p className=" md:text-md text-c9 top-6 left-6">El Nido</p>
          </div>
          <div className="absolute bottom-10 left-6">
            <h3 className="text-4xl text-c8">Philipines</h3>
            <p className="mt-2 text-lg text-c7">5 Popular Places</p>
          </div>
        </div>

        <div className="relative hover:scale-95 transition ease-in-out delay-350   md:w-[350px]">
          <img
            className="w-full md:w-[350px] h-[480px] md:h-[400px] shadow-2xl object-cover rounded-2xl"
            src="https://a.cdn-hotels.com/gdcs/production90/d1313/e413c950-c31d-11e8-9739-0242ac110006.jpg"
            alt=""
          />
          <div className="absolute bg-[#141416] bg-opacity-40 top-6 left-6 p-2 px-6 rounded-xl hover:bg-opacity-70">
            <p className=" md:text-md text-c9 top-6 left-6">Rio de Janeiro</p>
          </div>
          <div className="absolute bottom-10 left-6">
            <h3 className="text-4xl text-c8">Brazil</h3>
            <p className="mt-2 text-lg text-c7">15 Popular Places</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopTourCard;
