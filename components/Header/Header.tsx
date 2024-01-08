/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
type ToogleDesktopType = {
  setDesktopMenu: any;
};
const Header: React.FC<ToogleDesktopType> = ({
  setDesktopMenu,
  setIsMobileMenu,
}) => {
  return (
    <div>
      <div className="flex justify-between pt-2 bg-gray-100 ">
        <div className="flex items-center">
          <div className="pl-2">
            <div className="hidden xl:block">
              <button
                className="rounded-custom  hover:bg-gray-200 p-2"
                onClick={() => setDesktopMenu((prevState: any) => !prevState)}
              >
                <svg
                  className="h-6 w-6 text-gray-500 "
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <line x1="3" y1="12" x2="21" y2="12" />{" "}
                  <line x1="3" y1="6" x2="21" y2="6" />{" "}
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
            <div className="xl:hidden">
              <button
                className="rounded-custom  hover:bg-gray-200 p-2"
                onClick={() => setIsMobileMenu((prevState: any) => !prevState)}
              >
                <svg
                  className="h-6 w-6 text-gray-500 "
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <line x1="3" y1="12" x2="21" y2="12" />{" "}
                  <line x1="3" y1="6" x2="21" y2="6" />{" "}
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <h1 className="text-xl text-gray-600 pl-4">Bard</h1>
          </div>
        </div>
        <div className="flex items-center">
          <button className="rounded-custom  hover:bg-gray-200 p-2 mx-1">
            <svg
              className="h-6 w-6 text-gray-500 "
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5" />
            </svg>
          </button>
          <button className="rounded-custom  hover:bg-gray-200 p-2 mx-1">
            <svg
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <button className="rounded-custom  hover:bg-gray-200 p-2 mx-1">
            <svg
              className="h-6 w-6 text-gray-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />{" "}
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>
          <button className="rounded-custom  hover:bg-gray-200 p-2 mx-2">
            <svg
              className="h-6 w-6 text-gray-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <circle cx="5" cy="5" r="1" /> <circle cx="12" cy="5" r="1" />{" "}
              <circle cx="19" cy="5" r="1" /> <circle cx="5" cy="12" r="1" />{" "}
              <circle cx="12" cy="12" r="1" /> <circle cx="19" cy="12" r="1" />{" "}
              <circle cx="5" cy="19" r="1" /> <circle cx="12" cy="19" r="1" />{" "}
              <circle cx="19" cy="19" r="1" />
            </svg>
          </button>
          <div className="pr-2">
            <img
              src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              className="w-7 h-7 rounded-full cursor-pointer"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
