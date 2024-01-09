/* eslint-disable @next/next/no-img-element */
import React from "react";
type MessageType = {
  message: any;
  messagesEndRef: any;
};
const Message: React.FC<MessageType> = ({ message, messagesEndRef }) => {
  return (
    <div className="chat-message" key={message.id}>
      <div className="flex justify-center items-top text-gray-600 gap-3">
        <div className="flex gap-3 justify-between items-top rounded-tl-lg rounded-br-2xl rounded-tr-2xl rounded-bl-2xl  space-y-2 w-full order-2  bg-gray-100 mb-3 p-4">
          <span className="inline-block text-gray-600">{message.message}</span>
          <span className="inline-block mt-0">
            <i className="fa-solid fa-pencil"></i>
          </span>
        </div>
        <img
          src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
          alt="My profile"
          className="w-10 h-10 rounded-full order-1"
        ></img>
      </div>
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Message;
