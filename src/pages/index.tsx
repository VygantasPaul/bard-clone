import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Content from "../../components/Content/Content";
import SidePanel from "../../components/SidePanel/SidePanel";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Home() {
  const [messages, setMessages] = useState<Array<any> | null>(null);

  const fetchMessages = async () => {
    const response = await axios.get(
      "https://656599ffeb8bb4b70ef1ebb4.mockapi.io/chat"
    );

    setMessages(response.data);
  };
  useEffect(() => {
    fetchMessages();
  }, []);
  return (
    <>
      <main
        className={` min-h-screen flex-col items-center justify-between ${inter.className}`}
      >
        <div className="flex-1 p:2 sm:p-6 justify-between flex h-screen">
          <div className={`flex w-full`}>
            <SidePanel />
            <Content messages={messages} setMessages={setMessages} />
          </div>
        </div>
      </main>
    </>
  );
}
