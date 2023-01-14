import React from "react";
import HomePageCarousel from "../HomePageCarousel/HomePageCarousel";

// css
import "./homePageHero.css";

export default function HomePageHero() {
  return (
    <div id="homepageHero" className="container mx-auto">
      {/* <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-2/3 w-5/6 mb-10 md:mb-0 rounded-lg"> */}
      <HomePageCarousel />
      {/* </div>
          <div className="lg:flex-grow md:w-1/3 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              The Future begins here
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              Unlocking your potential at Locete Global Campus
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Tư vấn
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Xem khoá học
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
