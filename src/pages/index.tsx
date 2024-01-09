/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Content from "../../components/Content/Content";
import SidePanel from "../../components/SidePanel/SidePanel";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
export default function Home() {
  const [messages, setMessages] = useState<Array<any> | null>(null);
  const [isDesktopMenu, setDesktopMenu] = useState(false);
  const [isMobileMenu, setMobileMenu] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };
  const toggleDesktopMenu = () => {
    setDesktopMenu(!isDesktopMenu);
  };
  const fetchMessages = async () => {
    const response = await axios.get(
      "https://656599ffeb8bb4b70ef1ebb4.mockapi.io/chat"
    );

    setMessages(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    fetchMessages();
  }, []);
  return (
    <>
      <main
        className={` min-h-screen flex-col items-center  justify-between ${inter.className}`}
      >
        <Header
          setDesktopMenu={setDesktopMenu}
          setIsMobileMenu={setMobileMenu}
        />
        {/* <div className="w-full bg-blue-600 text-center text-white p-2">
            <p className="text-xs">„Bard“ ką tik atnaujintas. Žr. naujinį</p>
          </div> */}
        <div className="flex-1 sm:py-2 lg:px-3  justify-between  flex h-screen bg-gray-100 ">
          <div className={`lg:flex w-full pt-[60px] md:pr-4 lg:pr-5`}>
            <SidePanel
              isDesktopMenu={isDesktopMenu}
              isMobileMenu={isMobileMenu}
              setDesktopMenu={setDesktopMenu}
              setMobileMenu={setMobileMenu}
              toggleDesktopMenu={toggleDesktopMenu}
              toggleMobileMenu={toggleMobileMenu}
            />
            <Content
              messages={messages}
              setMessages={setMessages}
              isDesktopMenu={isDesktopMenu}
              toggleDesktopMenu={toggleDesktopMenu}
            />
          </div>
        </div>
      </main>
    </>
  );
}
