import React from "react";
import { dataLearningMaterial } from "./dataLearningMaterial";

export default function StudentLearningMaterial() {
  return (
    <div id="learning-material" className="flex flex-wrap">
      {dataLearningMaterial.map((item) => {
        return (
          <div className="max-w-lg p-6 m-6 space-y-12 bg-gray-100 text-gray-900 rounded-lg">
            <div className="border-gray-300">
              <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                <img
                  src="https://picsum.photos/200/300"
                  alt=""
                  className="self-center flex-shrink-0 w-24 h-32 border rounded-lg md:justify-self-start bg-gray-500 shadow-md"
                />
                <div className="flex flex-col">
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias, ea.
                  </p>
                  <p>Genre: Fiction</p>
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://www.youtube.com/watch?v=heMYSOZoT3c"
                    className="inline-flex items-center py-2 space-x-2 text-sm font-bold text-red-600 hover:text-blue-500"
                  >
                    <span>Read more</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
