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
import Privacy from "./Privacy/Privacy";
import Button from "./Button/Button";
import { format } from "date-fns";
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
          createdAt: format(new Date(), "yyyy-MM-dd"),
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
        <div className="bg-white h-full  max-h-full flex flex-col lg:rounded-customMg h-full ">
          <div
            id="messages"
            className="lg:flex w-full  flex-col space-y-4 px-2 md:px-4 lg:px-6 py-3 justify-between   overflow-y-auto scrollbar-thumb-blue  scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 "
          >
            <div>
              <div className={`w-[80%] lg:w-[70%] mx-auto`}>
                {messages &&
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
          <div className={`w-full lg:w-[70%] pt-3 border-t mx-auto`}>
            <div className="relative flex justify-center items-center mx-5">
              <Button
                iconStyle={`fa-solid fa-paperclip text-lg`}
                text={null}
                style={`h-10 w-10 rounded-custom transition duration-500 ease-in-out text-dark  hover:bg-gray-200 focus:outline-none`}
              />
              <div className="relative w-full lg:w-4/2 m-auto flex items-center">
                <Input
                  value={inputText}
                  setInputValue={setInputText}
                  placeholder={`Iveskite užklausa čia`}
                />

                <Button
                  iconStyle={`fa-solid fa-microphone text-lg`}
                  text={null}
                  style={`rounded-custom h-10 w-10 hover:bg-gray-200 absolute  right-2 `}
                />
              </div>
              <Button
                onClick={() => addPost()}
                style={`h-10 w-10 rounded-custom hover:bg-gray-200 transition duration-500 ease-in-out text-[#1a73e8] focus:outline-none ${
                  inputText ? "" : "opacity-40 cursor-default"
                }`}
                iconStyle={`fa-brands fa-google-play text-lg`}
                disabled={!inputText}
                text={null}
              />
            </div>
            <Privacy
              text={`„Bard“ gali pateikti netikslios informacijos, įskaitant informaciją apie
        žmones, todėl dar kartą patikrinkite atsakymus. Jūsų privatumas ir
        „Bard“`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
