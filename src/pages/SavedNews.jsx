import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { CardNew } from "../components/molecules";
import { useDispatch, useSelector } from "react-redux";

import { saveNews, unsaveNews } from "../redux/saved/NewsSaved";

const SavedNews = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  const { newsSaved } = useSelector((state) => state.savedNews);

  const perPage = typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 6;
  const pageCount = Math.ceil(newsSaved.length / perPage);

  const offset = currentPage * perPage;
  const currentPageData = newsSaved.slice(offset, offset + perPage);
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  const handleSave = (selected) => {
    const isAlreadySaved = newsSaved.some((item) => item.title === selected.title);
    if (isAlreadySaved) {
      dispatch(unsaveNews(selected));
    } else {
      dispatch(saveNews(selected));
    }
  };

  return (
    <div className="bg-bg_color px-[70px] max-[1000px]:px-[20px] h-auto justify-center items-center flex lg:pt-24 pt-14">
      <div className="max-w-[1800px] w-full h-full mx-auto flex justify-center relative items-center flex-col mt-8 mb-8">
        <h1 className="text-text_color text-5xl font-extrabold w-full text-center border-b-4 border-[#C8CDFF] border-opacity-50 pb-5 max-[1000px]:text-3xl">SAVED NEWS</h1>

        <div className="container h-full mx-auto flex justify-center relative items-center flex-col mt-8 mb-8">
          <div className="flex flex-row flex-wrap justify-center items-start gap-5 w-full mt-6">
            {newsSaved.length > 0 ? (
              <>
                {currentPageData.map((item, key) => (
                  <CardNew
                    title={item.title}
                    img={item.urlToImage}
                    author={item.author}
                    source={item.source.name}
                    desc={item.description}
                    linkNews={item.url}
                    onClick={() => handleSave(item)}
                    isSaved={newsSaved.some((news) => news.title === item.title)}
                    key={key}
                  />
                ))}
              </>
            ) : (
              <div>Belum ada berita yang disave</div>
            )}
          </div>
        </div>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active bg-blue_color border-none text-white_color"}
          className="flex justify-center space-x-5 mt-6 flex-wrap w-full"
          previousClassName="flex justify-center items-center w-[40px] h-[40px] rounded-full font-semibold text-text_color border-2 border-gray_color"
          nextClassName="border-2 border-gray_color border-gray-500 flex justify-center items-center w-[40px] h-[40px] rounded-full font-semibold text-text_color"
          pageClassName="border-2 border-gray_color flex justify-center items-center w-[40px] h-[40px] rounded-full font-semibold text-text-black mb-4"
        />
      </div>
    </div>
  );
};

export default SavedNews;
