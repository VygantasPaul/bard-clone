import React from "react";
type InputType = {
  value: string;
  setInputValue: (arg0: string) => void;
  placeholder: string;
};
const Input: React.FC<InputType> = ({ value, setInputValue, placeholder }) => {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setInputValue(e.target.value)}
        name="text"
        className="p-5 pe-11 block w-full border-gray-400 border border-gray-400 border-1 rounded-custom text-sm text-gray-500 focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
        placeholder={placeholder}
      ></input>
    </>
  );
};

export default Input;
