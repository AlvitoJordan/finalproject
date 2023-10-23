import React from "react";

const InputCS = ({ type, placeholder, value, onChange }) => {
  if (type === "search") return <input onChange={onChange} value={value} className="border-2  max-h-10 h-full py-2 w-[60%] max-[1000px]:w-[60%] rounded-lg  pl-3 outline-none focus:border-blue_color" placeholder={placeholder} />;
};

export default InputCS;
