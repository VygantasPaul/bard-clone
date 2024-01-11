import React, { useEffect, useState } from "react";
import styles from "./SidePanel.module.css";
import { Inter } from "next/font/google";
import Button from "../Content/Button/Button";
import Latest from "../Content/Latest/Latest";
import Location from "../Content/Location/Location";
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
            <Button
              text={"Naujas pokalbis"}
              style={
                "flex items-center py-2 rounded-custom space-x-2 px-4 mb-4 bg-blue-200 hover:bg-blue-300"
              }
              iconStyle={`fa-regular fa-plus py-0.5 px-1`}
            />
          </div>
          <div className="pb-1">
            <Latest heading={"Naujausi"} />
          </div>
          <div className="pb-1">
            <Button
              text={"Incomplete conditional statement"}
              style={
                "flex items-center py-2 rounded-custom space-x-3 px-3 py-1.5  hover:bg-sky-300 bg-gray-200 md:w-60"
              }
              iconStyle={`fa-regular fa-message bg-white p-1.5 rounded-custom`}
            />
          </div>
          <div className="pb-1">
            <Button
              text={"All i doing is working arround"}
              style={
                "flex items-center py-2 rounded-custom space-x-3 px-3 py-1.5  hover:bg-sky-300 bg-gray-200 md:w-60"
              }
              iconStyle={`fa-regular fa-message bg-white p-1.5 rounded-custom`}
            />
          </div>
          <div className="pb-1">
            <Button
              text={"PHP basic, loop, arrays"}
              style={
                "flex items-center py-2 rounded-custom space-x-3 px-3 py-1.5  hover:bg-sky-300 bg-gray-200 md:w-60"
              }
              iconStyle={`fa-regular fa-message bg-white p-1.5 rounded-custom`}
            />
          </div>
          <div className="pb-1">
            <Button
              text={"Keto mityba: mažiau angliavandenių, daugiau riebalų"}
              style={
                "flex items-center py-2 rounded-custom space-x-3 px-3 py-1.5  hover:bg-sky-300 bg-gray-200 md:w-60"
              }
              iconStyle={`fa-regular fa-message bg-white p-1.5 rounded-custom`}
            />
          </div>
        </div>
        <div>
          <Location
            location_name={`Klaipėda, Klaipėdos m. sav., Lietuva`}
            update_location={`Atnaujinti vietovę`}
            by_location={` Pagal jūsų vietas (namai)`}
          />
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
