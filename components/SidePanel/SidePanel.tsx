import React, { useEffect, useState } from "react";
import styles from "./SidePanel.module.css";
import { Inter } from "next/font/google";
const interBold = Inter({ subsets: ["latin"], weight: "500" });
type ToogleDesktopType = {
  isDesktopMenu: any;
  isMobileMenu: any;
  setDesktopMenu: any;
  setMobileMenu: any;
};

const SidePanel: React.FC<ToogleDesktopType> = ({
  isDesktopMenu,
  isMobileMenu,
  setDesktopMenu,
  setMobileMenu,
}) => {
  const sidebarClass = isMobileMenu
    ? `${styles.mobileSidebar}`
    : styles.desktopSidebar;
  useEffect(() => {
    const handleResize = () => {
      const newIsMobileMenu = window.innerWidth <= 768;
      if (newIsMobileMenu !== isMobileMenu) {
        setDesktopMenu(newIsMobileMenu);
      }

      const newIsDesktopMenu = window.innerWidth > 768;
      if (newIsDesktopMenu !== isDesktopMenu) {
        setMobileMenu(!newIsDesktopMenu);
        setDesktopMenu(false);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenu, setDesktopMenu, setMobileMenu]);

  return (
    <div
      className={`${sidebarClass} ${isMobileMenu ? "hideSide" : ""} ${
        isDesktopMenu ? "hideSide" : ""
      }`}
    >
      <div className="flex flex-col justify-between h-full pb-20 lg:pb-0">
        <div>
          <div className="pb-1 lg:-ml-2">
            <div className="inline-block items-center py-2 rounded-custom space-x-2 px-4 mb-4 bg-blue-200 hover:bg-gray-300">
              <i className={`fa-solid fa-plus`}></i>
              <button className="text-sm pl-2 font-medium text-black">
                Naujas pokalbis
              </button>
            </div>
          </div>
          <div className="pb-1">
            <div className="text-xs w-full pb-3 pl-2">
              <p className="leading-4 font-semibold">Naujausi</p>
            </div>
          </div>
          <div className="pb-1">
            <div className=" items-center text-left rounded-custom inline-block pr-4 hover:bg-gray-300 bg-sky-200 ">
              <button className="flex justify-start text-left items-center space-x-4 text-gray-700 pl-2 py-1 w-full md:w-60">
                <i className="fa-regular fa-message bg-white p-1.5 rounded-custom"></i>
                <p className={`text-sm  ${styles.whitespace}`}>
                  Incomplete conditional statement
                </p>
              </button>
            </div>
          </div>
          <div className="pb-1">
            <div className="items-center text-left rounded-custom inline-block pr-4  border-gray-600 hover:bg-gray-300 ">
              <button className="flex justify-start text-left items-center space-x-4 text-gray-700 pl-2 py-1  w-full md:w-60">
                <i className="fa-regular fa-message bg-white p-1.5 rounded-custom"></i>
                <p className={`text-sm  ${styles.whitespace}`}>
                  AI assistant doing well
                </p>
              </button>
            </div>
          </div>
          <div className="pb-1">
            <div className="items-center text-left rounded-custom inline-block pr-4  border-gray-600  hover:bg-gray-300">
              <button className="flex justify-start text-left items-center space-x-4  text-gray-700 pl-2 py-1 w-full md:w-60">
                <i className="fa-regular fa-message bg-white p-1.5 rounded-custom"></i>
                <p className={`text-sm  ${styles.whitespace}`}>
                  PHP Contact Form
                </p>
              </button>
            </div>
          </div>
          <div className="pb-1">
            <div className="items-center text-left rounded-custom inline-block pr-4  border-gray-600  hover:bg-gray-300">
              <button className="flex justify-start text-left items-center space-x-4  text-gray-700 pl-2 py-1 w-full md:w-60">
                <i className="fa-regular fa-message bg-white p-1.5 rounded-custom"></i>
                <p className={`text-sm  ${styles.whitespace}`}>
                  PHP Contact Form
                </p>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="pl-2 md:pl-3 lg:pl-4">
            <ul>
              <li className="list-disc">
                <p className={`text-xs text-grey-400 ${interBold.className}`}>
                  Klaipėda, Klaipėdos m. sav., Lietuva
                </p>
                <p className={`text-xs text-blue-400 ${interBold.className}`}>
                  Pagal jūsų vietas (namai) {""}
                  <a href="" className="cursor-pointer">
                    • Atnaujinti vietovę
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
