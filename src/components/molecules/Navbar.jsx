import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ButtonCS, InputCS } from "../atoms";
import { ICCloseBar, ICOpenBar } from "../../assets";
import { resetLoading } from "../../redux/fetch/Get";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [active, setActive] = React.useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { pathname } = location;

  const handleSearch = () => {
    navigate(`/search/${searchValue}`);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleChangePage = () => {
    dispatch(resetLoading());
  };
  return (
    <nav className={`bg-white_color px-[70px] max-[1000px]:px-[20px]  h-[90px] max-[1000px]:h-16 justify-center items-center fixed z-10 w-full flex ${scrolling ? "bg-white bg-opacity-80 backdrop-blur-sm shadow-box_item" : ""} `}>
      <div className="max-w-[1800px] w-full h-full mx-auto  flex justify-between relative items-center">
        <form action="" className="w-[50%] max-[1000px]:w-[90%] my-3 max-h-10">
          <InputCS type="search" placeholder="Search..." onChange={handleSearchChange} value={searchValue} />
          <ButtonCS type="searchButton" title="Search" onClick={handleSearch} className={"bg-blue_color text-white_color h-10 px-3 ml-4 max-[1000px]:ml-3 rounded-lg cursor-pointer"}>
            Search
          </ButtonCS>
        </form>
        <div className="hidden  max-[1000px]:contents w-[20px] h-[20px]" onClick={() => setActive(!active)}>
          {active ? <ICCloseBar /> : <ICOpenBar />}
        </div>
        <ul
          className={`${
            active
              ? "flex z-10 gap-20 max-[1300px]:gap-8 max-[1000px]:gap-2 justify-end h-auto my-4 text-text_color  w-[50%] max-[1000px]:absolute max-[1000px]:top-[60px] max-[1000px]:w-[200px]  max-[1000px]:flex-col max-[1000px]:right-1 transition-all max-[1000px]:bg-white_color max-[1000px]:shadow-box_item max-[1000px]:rounded-xl max-[1000px]:opacity-100 max-[1000px]:text-start max-[1000px]:py-2"
              : "flex z-10 gap-20 max-[1300px]:gap-8 max-[1000px]:gap-2 justify-end h-auto my-4 text-text_color  w-[50%] max-[1000px]:absolute max-[1000px]:top-[-350px] max-[1000px]:w-[200px]  max-[1000px]:flex-col max-[1000px]:right-1 transition-all max-[1000px]:bg-white_color max-[1000px]:shadow-box_item max-[1000px]:rounded-xl max-[1000px]:opacity-0 max-[1000px]:py-2"
          } `}
        >
          <li onClick={handleChangePage} className="h-full flex justify-center items-center borderr ">
            <Link to="/" className={pathname === "/" ? "borderr_active " : "w-full max-[1000px]:px-3"}>
              Indonesia
            </Link>
          </li>
          <li className="h-full flex justify-center items-center borderr ">
            {" "}
            <Link onClick={handleChangePage} to="programming" className={pathname === "/programming" ? "borderr_active" : "w-full max-[1000px]:px-3 "}>
              Programming
            </Link>
          </li>
          <li className="h-full flex justify-center items-center borderr ">
            {" "}
            <Link onClick={handleChangePage} to="covid" className={pathname === "/covid" ? "borderr_active" : "w-full max-[1000px]:px-3"}>
              COVID-19
            </Link>
          </li>
          <li className="h-full flex justify-center items-center borderr ">
            {" "}
            <Link onClick={handleChangePage} to="saved" className={pathname === "/saved" ? "borderr_active" : "w-full max-[1000px]:px-3"}>
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
