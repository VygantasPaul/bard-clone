import React, { useEffect, useState } from "react";
import styles from "./SidePanel.module.css";
import Button from "../Content/Button/Button";
import Latest from "../Content/Latest/Latest";
import Location from "../Content/Location/Location";
import SidePanelMessages from "./SidePanelMessages";
type ToogleDesktopType = {
  isDesktopMenu: any;
  isMobileMenu: any;
  setDesktopMenu: any;
  setMobileMenu: any;
  messages: any;
  setMessages: any;
};

const SidePanel: React.FC<ToogleDesktopType> = ({
  isDesktopMenu,
  isMobileMenu,
  setDesktopMenu,
  setMobileMenu,
  messages,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobileMenu, setDesktopMenu, setMobileMenu]);

  return (
    <div
      className={`${sidebarClass} ${isMobileMenu ? "hideSide" : ""} ${
        isDesktopMenu ? "hideSide" : ""
      }`}
    >
      <div className="flex flex-col justify-between h-full pb-20 lg:pb-0">
        <div className="pb-1 lg:-ml-2">
          <Button
            text={"Naujas pokalbis"}
            style={
              "flex items-center py-2 rounded-custom space-x-2 px-4 mb-4 bg-blue-200 hover:bg-blue-300"
            }
            iconStyle={`fa-regular fa-plus py-0.5 px-1`}
          />

          <div className=" overflow-y-auto scrollbar-thumb-blue  scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 pb-10">
            <div className="pb-1">
              <Latest heading={"Naujausi"} />
            </div>
            {messages &&
              messages.map((message: any) => {
                console.log(message);
                return <SidePanelMessages message={message} key={message.id} />;
              })}
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
