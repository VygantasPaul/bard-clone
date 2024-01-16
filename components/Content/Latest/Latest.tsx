import React from "react";
type HeadingType = {
  heading: string;
};
const Latest: React.FC<HeadingType> = ({ heading }) => {
  return (
    <div className="text-xs w-full pb-3 pl-2">
      <p className="leading-4 font-semibold">{heading}</p>
    </div>
  );
};

export default Latest;
