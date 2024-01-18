import React from "react";
import Button from "../Content/Button/Button";
type MessageType = {
  message: any;
};
const SidePanelMessages: React.FC<MessageType> = ({ message }) => {
  return (
    <div className="pb-1">
      <Button
        text={message.message}
        style={
          "flex items-center py-2 rounded-custom space-x-3 px-3 py-1.5  hover:bg-sky-300 bg-gray-200 md:w-60"
        }
        iconStyle={`fa-regular fa-message bg-white p-1.5 rounded-custom`}
      />
    </div>
  );
};

export default SidePanelMessages;
