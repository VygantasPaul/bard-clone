import React from "react";
import styles from "./SidePanel.module.css";
const SidePanel = () => {
  return (
    <>
      <div className={`lg:w-1/6`}>
        <div className="rounded-r  bg-gray-900 xl:hidden flex justify-between w-full p-6 items-center ">
          <div className="flex justify-between  items-center space-x-3"></div>
          {/* <div
                  aria-label="toggler"
                  className="flex justify-center items-center"
                >
                  <button
                    aria-label="open"
                    id="open"
                    onclick="showNav(true)"
                    className="hidden focus:outline-none focus:ring-2"
                  >
                    <svg
                      className=""
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6H20"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4 12H20"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4 18H20"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    aria-label="close"
                    id="close"
                    onclick="showNav(true)"
                    className=" focus:outline-none focus:ring-2"
                  >
                    <svg
                      className=""
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 6L6 18"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6 6L18 18"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div> */}
        </div>
        <div
          id="Main"
          className="xl:rounded-r transform  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-full  w-full sm:w-64 bg-white-100 text-gray-600 flex-col"
        >
          {/* <div className="hidden xl:flex justify-start p-6 items-center space-x-3"></div> */}
          <div className="bg-gray-100 px-2  text-xs flex items-center py-2 rounded-xl px-4  hover:bg-gray-300">
            <i className="fa-solid fa-plus"></i>

            <button className="text-base pl-2">Naujas pokalbis</button>
          </div>
          <div className="  text-xs w-full py-5 pl-2">
            <p className=" leading-4 font-semibold">Naujausi</p>
          </div>
          <div className=" items-center text-left rounded-xl  border-gray-600 w-full hover:bg-gray-300 px-2">
            <div
              id="menu1"
              className="block  w-full md:w-auto items-start pb-1 "
            >
              <button className="flex justify-start text-left items-center space-x-2 focus:bg-gray-700  text-gray-700 pl-2 py-2  w-full md:w-72">
                <i className="fa-regular fa-message"></i>
                <p className={`text-base  ${styles.whitespace}`}>
                  Incomplete conditional statement
                </p>
              </button>
            </div>
          </div>
          <div className=" items-center text-left rounded-xl   border-gray-600 w-full hover:bg-gray-300 px-2">
            <div
              id="menu1"
              className="block  w-full md:w-auto items-start pb-1 "
            >
              <button className="flex justify-start text-left items-center space-x-2 focus:bg-gray-700  text-gray-700 pl-2 py-2  w-full md:w-72">
                <i className="fa-regular fa-message"></i>
                <p className={`text-base  ${styles.whitespace}`}>
                  AI assistant doing well
                </p>
              </button>
            </div>
          </div>
          <div className=" items-center text-left rounded-xl   border-gray-600 w-full hover:bg-gray-300 px-2">
            <div
              id="menu1"
              className="block  w-full md:w-auto items-start pb-1 "
            >
              <button className="flex justify-start text-left items-center space-x-2 focus:bg-gray-700  text-gray-700 pl-2 py-2  w-full md:w-72">
                <i className="fa-regular fa-message"></i>
                <p className={`text-base leading-4 ${styles.whitespace}`}>
                  PHP Contact Form
                </p>
              </button>
            </div>
          </div>
          <div className=" items-center text-left rounded-xl   border-gray-600 w-full hover:bg-gray-300 px-2">
            <div
              id="menu1"
              className="block  w-full md:w-auto items-start pb-1 "
            >
              <button className="flex justify-start text-left items-center space-x-2 focus:bg-gray-700  text-gray-700 pl-2 py-2  w-full md:w-72">
                <i className="fa-regular fa-message"></i>
                <p className={`text-base leading-4 ${styles.whitespace}`}>
                  AI assistant doing well
                </p>
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center h-full pb-6   px-6  w-full  space-y-32 ">
            {/* <div className="hidden flex justify-start flex-col items-start pb-5 ">
                    <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-52">
                    </button>
                  </div> */}
            <div></div>
            <div className=" flex justify-between items-center w-full">
              <div className="flex justify-center items-center  space-x-2">
                <div className="flex justify-start flex-col items-start">
                  <p className="cursor-pointer text-sm leading-5 text-grey-400">
                    Klaipėda, Klaipėdos m. sav., Lietuva
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidePanel;
