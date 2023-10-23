import React from "react";
import { TextShortener, ButtonCS } from "../atoms";

const CardNew = ({ title, author, source, desc, img, linkNews, onClick, isSaved }) => {
  return (
    <div className="max-w-[400px] w-full min-h-[600px] h-full flex flex-col justify-between shadow-box_item bg-white_color p-6 rounded-2xl">
      <div className="flex flex-col min-h-[450px] h-full">
        <h2 className="text-2xl max-[1000px]:text-xl h-24  font-bold text-text_color mb-3 ">
          <TextShortener text={title} maxLength="60" />
        </h2>
        <div className="">
          {img ? <img src={img} alt="nama" className="w-full h-[190px]  rounded-md mb-3 object-cover" /> : <div className="w-full h-[190px] rounded-md mb-3 bg-imagebox_color"></div>}
          {/* <img src={img} alt="nama" className="w-full h-[190px]  rounded-md mb-3 object-cover" /> */}
          <p className="text-[#87B4FF] text-base mb-3">
            {author} | {source}
          </p>
          <p className="text-sm text-text_color">{desc}</p>
        </div>
      </div>

      <div className="flex flex-row justify-end gap-3 mt-6">
        <ButtonCS type="buttonNormal" title="News Page" href={linkNews} className={"bg-blue_color text-white_color"} />
        {isSaved ? <ButtonCS type="buttonWithIcon" title="Saved !" onClick={onClick} /> : <ButtonCS type="buttonIconNoBackground" title="Save" onClick={onClick} />}
      </div>
    </div>
  );
};

export default CardNew;
