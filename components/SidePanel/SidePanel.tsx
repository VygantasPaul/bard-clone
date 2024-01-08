import React, { useState } from "react";
import styles from "./SidePanel.module.css";
import { Inter } from "next/font/google";
const interBold = Inter({ subsets: ["latin"], weight: "600" });
type ToogleDesktopType = {
  isDesktopMenu: any;
  isMobileMenu: any;
};

const SidePanel: React.FC<ToogleDesktopType> = ({
  isDesktopMenu,
  isMobileMenu,
}) => {
  return (
    <>
      <div
        className={`fixed bg-white flex flex-col justify-between z-[100] px-6 pt-4  w-[90%] md:w-1/2 ${
          isMobileMenu ? "block  " : "hidden lg:hidden "
        } h-full `}
      >
        <div>
          <div className="bg-gray-100 flex items-center py-2 rounded-custom  px-5 mb-4 bg-blue-200 hover:bg-gray-300">
            <i className="fa-solid fa-plus"></i>
            <button className="text-sm pl-2 font-medium text-black">
              Naujas pokalbis
            </button>
          </div>
          <div className="text-xs w-full pb-3 pl-2">
            <p className="leading-4 font-semibold">Naujausi</p>
          </div>
          <div className="items-center text-left rounded-custom  w-full  ">
            <div className="block  w-full md:w-auto items-start ">
              <button className="flex justify-start text-left items-center rounded-custom space-x-3 hover:bg-gray-300 bg-sky-200 text-gray-700 pl-2 pr-4 py-2 max-w-7xl ">
                <i className="fa-regular fa-message bg-white p-1.5 rounded-custom"></i>
                <p className={`text-sm  ${styles.whitespace}`}>
                  Incomplete conditional statement
                </p>
              </button>
            </div>
          </div>
          <div className="items-center text-left   border-gray-600 w-full ">
            <div className="block  w-full md:w-auto items-start ">
              <button className="flex justify-start text-left items-center rounded-custom space-x-3 hover:bg-gray-300  text-gray-700 pl-2 pr-4 py-2 max-w-7xl ">
                <i className="fa-regular fa-message bg-white p-1.5 rounded-custom"></i>
                <p className={`text-sm  ${styles.whitespace}`}>
                  Incomplete conditional statement
                </p>
              </button>
            </div>
          </div>
          <div className="items-center text-left rounded-custom border-gray-600 w-full hover:bg-gray-300 ">
            <div className="block  w-full md:w-auto items-start ">
              <button className="flex justify-start text-left items-center rounded-custom space-x-3 hover:bg-gray-300 text-gray-700 pl-2 pr-4 py-2 max-w-7xl ">
                <i className="fa-regular fa-message bg-white p-1.5 rounded-custom"></i>
                <p className={`text-sm  ${styles.whitespace}`}>
                  Incomplete conditional statement
                </p>
              </button>
            </div>
          </div>
          <div className="items-center text-left rounded-custom w-full hover:bg-gray-300 ">
            <div className="block  w-full md:w-auto items-start ">
              <button className="flex justify-start text-left items-center rounded-custom space-x-3 hover:bg-gray-300  text-gray-700 pl-2 pr-4 py-2 max-w-7xl ">
                <i className="fa-regular fa-message bg-white p-1.5 rounded-custom"></i>
                <p className={`text-sm  ${styles.whitespace}`}>
                  Incomplete conditional statement
                </p>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="pb-20">
            <p
              className={` text-xs font-semiBold text-grey-400 ${interBold.className}`}
            >
              Klaipėda, Klaipėdos m. sav., Lietuva
            </p>
            <p className={`text-xs  text-blue-400 ${interBold.className}`}>
              Pagal jūsų vietas (namai) •
              <a href="" className="cursor-pointer">
                Atnaujinti vietovę
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={`${isDesktopMenu ? "hidden" : "w-1/6"}`}>
        <div className="xl:rounded-r hidden xl:flex justify-start items-start h-full  w-full sm:w-64 bg-white-100 text-gray-600 flex-col">
          <div className="bg-gray-100 flex items-center py-2 rounded-custom  px-5 mb-4 bg-blue-200 hover:bg-gray-300">
            <i className="fa-solid fa-plus"></i>
            <button className="text-sm pl-2 font-medium text-black">
              Naujas pokalbis
            </button>
          </div>
          <div className="text-xs w-full pb-3 pl-2">
            <p className="leading-4 font-semibold">Naujausi</p>
          </div>
          <div className="items-center text-left rounded-custom  w-full hover:bg-gray-300 bg-sky-200">
            <div id="menu1" className="block  w-full md:w-auto items-start ">
              <button className="flex justify-start text-left items-center space-x-3 text-gray-700 pl-2 py-2 w-full md:w-72 ">
                <i className="fa-regular fa-message bg-white p-1.5 rounded-custom"></i>
                <p className={`text-sm  ${styles.whitespace}`}>
                  Incomplete conditional statement
                </p>
              </button>
            </div>
          </div>
          <div className="items-center text-left rounded-custom  border-gray-600 w-full hover:bg-gray-300 ">
            <div id="menu1" className="block  w-full md:w-auto items-start ">
              <button className="flex justify-start text-left items-center space-x-3 text-gray-700 pl-2 py-2  w-full md:w-72">
                <i className="fa-regular fa-message bg-white p-1.5 rounded-custom"></i>
                <p className={`text-sm  ${styles.whitespace}`}>
                  AI assistant doing well
                </p>
              </button>
            </div>
          </div>
          <div className="items-center text-left rounded-custom border-gray-600 w-full hover:bg-gray-300 ">
            <div id="menu1" className="block  w-full md:w-auto items-start ">
              <button className="flex justify-start text-left items-center space-x-3  text-gray-700 pl-2 py-2 w-full md:w-72">
                <i className="fa-regular fa-message bg-white p-1.5 rounded-custom"></i>
                <p className={`text-sm  ${styles.whitespace}`}>
                  PHP Contact Form
                </p>
              </button>
            </div>
          </div>
          <div className="items-center text-left rounded-custom border-gray-600 w-full hover:bg-gray-300 ">
            <div id="menu1" className="block  w-full md:w-auto items-start">
              <button className="flex justify-start text-left items-center space-x-3 focus:bg-gray-700  text-gray-700 pl-2 py-2  w-full md:w-72">
                <i className="fa-regular fa-message bg-white p-1.5 rounded-custom"></i>
                <p className={`text-sm ${styles.whitespace}`}>
                  AI assistant doing well
                </p>
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center h-full    px-3  w-full  ">
            <div></div>
            <div className="flex justify-between items-center w-full">
              <div className="flex justify-center items-center  space-x-2">
                <div className="flex justify-start flex-col items-start">
                  <p className={`text-xs text-grey-400 ${interBold.className}`}>
                    Klaipėda, Klaipėdos m. sav., Lietuva
                  </p>
                  <p
                    className={`text-xs  text-blue-400 ${interBold.className}`}
                  >
                    Pagal jūsų vietas (namai) •
                    <a href="" className="cursor-pointer">
                      Atnaujinti vietovę
                    </a>
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
