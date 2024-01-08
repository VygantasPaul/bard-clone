/* eslint-disable @next/next/no-img-element */
import React from "react";
type MessageType = {
  message: any;
  messagesEndRef: any;
};
const Message: React.FC<MessageType> = ({ message, messagesEndRef }) => {
  return (
    <>
      <div className="chat-message" key={message.id}>
        <div className="flex justify-center items-center text-gray-600">
          <div className="lg:flex flex-col space-y-2 w-full order-2 ">
            <span className="px-4 py-5 rounded-lg inline-block  w-full text-gray-600">
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
        <div ref={messagesEndRef} />
      </div>
    </>
  );
};

export default Message;
