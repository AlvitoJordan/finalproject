import React from "react";
import { ICSave, ICSaveBlue } from "../../assets";

const ButtonCS = ({ type, title, href, className, onClick }) => {
  switch (type) {
    case "buttonNormal":
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={`px-4 py-2 rounded-lg  font-semibold ${className}`}>
          <span>{title}</span>
        </a>
      );
    case "buttonIconNoBackground":
      return (
        <button className="px-4 py-2 rounded-lg border-2 border-blue_color text-blue_color  font-semibold flex flex-row gap-3 justify-center items-center" onClick={onClick}>
          <ICSaveBlue />
          <p>{title}</p>
        </button>
      );
    case "searchButton":
      return (
        <button onClick={onClick} className={`px-4 py-2 rounded-lg  font-semibold ${className}`}>
          <p>{title}</p>
        </button>
      );
    case "buttonWithIcon":
      return (
        <button className="px-4 py-2 rounded-lg text-white_color bg-green_color font-semibold flex flex-row gap-3 justify-center items-center animate-fadeIn" onClick={onClick}>
          <ICSave />
          <p>{title}</p>
        </button>
      );
    default:
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={`px-4 py-2 rounded-lg  font-semibold ${className}`}>
          <span>{title}</span>
        </a>
      );
  }
};

export default ButtonCS;
