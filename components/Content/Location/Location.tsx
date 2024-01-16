import React from "react";
import { Inter } from "next/font/google";
const interBold = Inter({ subsets: ["latin"], weight: "500" });
type LocationType = {
  location_name: string;
  update_location: string;
  by_location: string;
};
const Location: React.FC<LocationType> = ({
  location_name,
  update_location,
  by_location,
}) => {
  return (
    <div className="pl-2 md:pl-3 lg:pl-4">
      <ul>
        <li className="list-disc cursor-pointer">
          <p className={`text-xs text-grey-400 ${interBold.className}`}>
            {location_name}
          </p>
          <p className={`text-xs text-blue-400 ${interBold.className}`}>
            {by_location} {""}
            <span>{update_location}</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Location;
