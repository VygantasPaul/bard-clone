/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, {
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
  useRef,
} from "react";
import styles from "./Content.module.css";
import Message from "./Message/Message";
import axios from "axios";
import Input from "./Input/Input";
interface MessageType {
  id: string;
  createdAt: string;
  message: string;
  image: string;
}
type MessagesType = {
  setMessages: Dispatch<SetStateAction<any[] | null>>;
  messages: MessageType[] | null;
  isDesktopMenu: any;
};

const Content: React.FC<MessagesType> = ({
  messages,
  setMessages,
  isDesktopMenu,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [inputText, setInputText] = useState("");
  const [postCount, setPostCount] = useState(0);
  const addPost = async () => {
    try {
      const checkValidation = () => {
        if (!inputText) {
          return false;
        } else {
          return true;
        }
      };
      const isValid = checkValidation();
      if (isValid) {
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
          setPostCount((count) => count + 1);
          setInputText("");
        } else {
          console.error("Unexpected response status:", response.status);
        }
      }
    } catch (error) {
      console.error("Error while adding post:", error);
    }
  };
  useEffect(() => {
    if (messagesEndRef.current) {
      scrollToBottom();
    }
  }, [postCount]);
  return (
    <>
      <div
        className={`flex ${isDesktopMenu ? "lg:w-full" : "lg:w-5/6"} h-full`}
      >
        <div className="bg-white h-full  max-h-full flex flex-col rounded-customMg h-full ">
          <div
            id="messages"
            className="lg:flex w-full  flex-col space-y-4 px-2 md:px-4 lg:px-6 py-3 justify-between   overflow-y-auto scrollbar-thumb-blue  scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 "
          >
            <div>
              <div className={`w-[80%] lg:w-[70%] ${styles.margin_auto}`}>
                {messages &&
                  // eslint-disable-next-line react/jsx-key
                  messages.map((message) => (
                    <Message
                      message={message}
                      key={message.id}
                      messagesEndRef={messagesEndRef}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div
            className={`w-full lg:w-[70%] pt-3 border-t ${styles.margin_auto}`}
          >
            <div className="relative flex justify-center items-center mx-5">
              <button
                type="button"
                className="items-center justify-center  px-3 rounded-custom transition duration-500 ease-in-out text-dark  hover:bg-gray-200 focus:outline-none"
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
                <Input
                  value={inputText}
                  setInputValue={setInputText}
                  placeholder={`Iveskite užklausa čia`}
                />
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
                className={`items-center justify-center rounded-lg px-3 transition duration-500 ease-in-out text-dark   focus:outline-none ${
                  inputText ? "" : "opacity-40 cursor-default"
                }`}
                disabled={!inputText}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="h-10 w-5 transform rotate-90"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                </svg>
              </button>
            </div>
            <div className="p-2 text-center">
              <p className="text-xs">
                „Bard“ gali pateikti netikslios informacijos, įskaitant
                informaciją apie žmones, todėl dar kartą patikrinkite atsakymus.
                Jūsų privatumas ir „Bard“
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
