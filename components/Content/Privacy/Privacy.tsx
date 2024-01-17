import React from "react";
type PrivacyType = {
  text: string;
};
const Privacy: React.FC<PrivacyType> = ({ text }) => {
  return (
    <div className="p-2 text-center">
      <p className="text-xs">{text}</p>
    </div>
  );
};

export default Privacy;
