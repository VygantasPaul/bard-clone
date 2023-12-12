import React, { useState, useEffect } from "react";
import styles from "./Content.module.css";
import axios from "axios";
interface MessageType {
  id: string;
  createdAt: string;
  message: string;
  image: string;
}
type MessagesType = {
  setMessages: React.FC<React.SetStateAction<MessageType[] | null>>;
  messages: MessageType[] | null;
};

const Content: React.FC<MessagesType> = ({ messages, setMessages }) => {
  const [inputText, setInputText] = useState("");
  const addPost = async () => {
    try {
      const newPost = {
        createdAt: "",
        message: inputText,
        image: "",
      };
      const response = await axios.post(
        "https://656599ffeb8bb4b70ef1ebb4.mockapi.io/chat",
        { ...newPost }
      );

      if (response.status === 201) {
        setMessages((prevState: MessageType[] | null) => [
          ...(prevState || []),
          response.data,
        ]);
        setInputText("");
        console.log(response);
      } else {
        console.error("Unexpected response status:", response.status);
      }
    } catch (error) {
      console.error("Error while adding post:", error);
    }
  };

  return (
    <>
      <div className="flex w-5/6">
        <div className="bg-gray-100 flex flex-col rounded-xl">
          <div
            id="messages"
            className="flex w-full flex-col space-y-4 px-6 py-3 justify-between position-relative overflow-y-auto scrollbar-thumb-blue  scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 "
          >
            <div>
              <div className={`w-4/5  max-h-300 ${styles.margin_auto}`}>
                {messages &&
                  messages.map((message) => (
                    <div className="chat-message" key={message.id}>
                      <div className="flex justify-center items-center text-gray-600">
                        <div className="flex flex-col space-y-2 w-full order-2 ">
                          <span className="px-4 py-7 rounded-lg inline-block  w-full text-gray-600">
                            {message.message}
                          </span>
                        </div>

                        <img
                          src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                          alt="My profile"
                          className="w-10 h-10 rounded-full order-1"
                        ></img>
                        <div className="order-2 ">
                          <i className="fa-solid fa-pencil"></i>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div
            className={`sm:mb-0 w-4/5 ${styles.inputbox} ${styles.margin_auto}`}
          >
            <div className="relative flex justify-center items-center">
              <button
                type="button"
                className="items-center justify-center rounded-lg px-3  transition duration-500 ease-in-out text-dark  hover:bg-gray-400 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-10 w-5 text-gray-600"
                >
                  <path
                    strokeWidth="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  ></path>
                </svg>
              </button>

              <div className="relative w-full lg:w-4/2 m-auto">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  id="hs-trailing-icon"
                  name="hs-trailing-icon"
                  className="p-5 pe-11 block w-full border-gray-950 border-3 rounded-xl text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-white-900  dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Iveskite užklausa čia"
                ></input>
                <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6 text-gray-600"
                  >
                    <path
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    ></path>
                  </svg>
                </div>
              </div>

              <button
                type="button"
                onClick={() => addPost()}
                className="items-center justify-center rounded-lg px-3 transition duration-500 ease-in-out text-dark  hover:bg-gray-400 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="h-10 w-5  transform rotate-90"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
