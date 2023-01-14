import React, { useRef } from "react";
import { Carousel } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import "./homePageCarousel.css";

// config
const contentStyle = {
  // height: "160px",
  height: "600px",
  width: "1300px",
  // lineHeight: "600px",
  // textAlign: "center",
  color: "#fff",
  // background: "black",
  // fontSize: "50px",
  objectFit: "cover",
  objectPosition: "center",
  margin: "0px auto",
  // borderRadius: "15px",
};

export default function HomePageCarousel() {
  const ref = useRef();
  let slideTruoc = () => {
    ref.current.next();
  };
  let slideSau = () => {
    ref.current.prev();
  };

  let renderSlide1 = () => {
    return (
      <section className="text-gray-200 body-font pt-4">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div className="lg:max-w-screen-2xl lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative">
            <div
              className="bg-center bg-cover rounded-xl"
              alt="hero"
              style={{
                height: 600,
                backgroundImage:
                  "linear-gradient(90deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url('https://res.cloudinary.com/css-tricks/images/f_auto,q_auto/v1637698141/pro-landing-page-header-e1592344623116/pro-landing-page-header-e1592344623116.jpg?_i=AA')",
              }}
            />
            <div className="absolute inset-y-0 right-0 w-4/12">
              <div className="h-full flex flex-col justify-center items-start">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-100">
                  Hello to Lucete Global Campus
                </h1>
                <p className="mb-8 leading-relaxed">
                  “You live a new life for every language you speak. If you know
                  only one language, you live only once.”
                </p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    View courses
                  </button>
                  <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  let renderSlide2 = () => {
    return (
      <section className="text-gray-200 body-font pt-4">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div className="lg:max-w-screen-2xl lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative">
            <div
              className="bg-center bg-cover rounded-xl"
              alt="hero"
              style={{
                height: 600,
                backgroundImage:
                  "linear-gradient(90deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url('https://res.cloudinary.com/css-tricks/images/f_auto,q_auto/v1637698141/pro-landing-page-header-e1592344623116/pro-landing-page-header-e1592344623116.jpg?_i=AA')",
              }}
            />
            <div className="absolute inset-y-0 right-0 w-4/12">
              <div className="h-full flex flex-col justify-center items-start">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-100">
                  Hello to Lucete Global Campus
                </h1>
                <p className="mb-8 leading-relaxed">
                  “You live a new life for every language you speak. If you know
                  only one language, you live only once.”
                </p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    View courses
                  </button>
                  <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  let renderSlide3 = () => {
    return (
      <section className="text-gray-200 body-font pt-4">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div className="lg:max-w-screen-2xl lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative">
            <div
              className="bg-center bg-cover rounded-xl"
              alt="hero"
              style={{
                height: 600,
                backgroundImage:
                  "linear-gradient(90deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url('https://res.cloudinary.com/css-tricks/images/f_auto,q_auto/v1637698141/pro-landing-page-header-e1592344623116/pro-landing-page-header-e1592344623116.jpg?_i=AA')",
              }}
            />
            <div className="absolute inset-y-0 right-0 w-4/12">
              <div className="h-full flex flex-col justify-center items-start">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-100">
                  Hello to Lucete Global Campus
                </h1>
                <p className="mb-8 leading-relaxed">
                  “You live a new life for every language you speak. If you know
                  only one language, you live only once.”
                </p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    View courses
                  </button>
                  <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  let renderSlide4 = () => {
    return (
      <section className="text-gray-200 body-font pt-4">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div className="lg:max-w-screen-2xl lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative">
            <div
              className="bg-center bg-cover rounded-xl"
              alt="hero"
              style={{
                height: 600,
                backgroundImage:
                  "linear-gradient(90deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url('https://res.cloudinary.com/css-tricks/images/f_auto,q_auto/v1637698141/pro-landing-page-header-e1592344623116/pro-landing-page-header-e1592344623116.jpg?_i=AA')",
              }}
            />
            <div className="absolute inset-y-0 right-0 w-4/12">
              <div className="h-full flex flex-col justify-center items-start">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-100">
                  Hello to Lucete Global Campus
                </h1>
                <p className="mb-8 leading-relaxed">
                  “You live a new life for every language you speak. If you know
                  only one language, you live only once.”
                </p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    View courses
                  </button>
                  <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div id="homepageCarousel" className="mt-2">
      {/* <LeftOutlined
        className="arrowStyle arrowLeft"
        style={{ left: "3%", color: "gray" }}
        onClick={() => slideSau()}
      /> */}

      {/* <RightOutlined
        className="arrowStyle arrowRight"
        style={{ right: "3%", color: "gray" }}
        onClick={() => slideTruoc()}
      /> */}
      {/* <Carousel autoplay draggable> */}
      <Carousel draggable ref={ref}>
        <div>{renderSlide1()}</div>
        <div>{renderSlide2()}</div>
        <div>{renderSlide3()}</div>
        <div>{renderSlide4()}</div>
      </Carousel>
    </div>
  );
}
