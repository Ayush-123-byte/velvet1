import React, { useContext, useState } from "react";
import profile from "../asserts/images/w7.png";
import { Link } from "react-router-dom";
import CalNoti from "./CalNoti";
import Notification from "./Notification";
import Dropdowncart from "./Dropdowncart";
import "bootstrap-icons/font/bootstrap-icons.css";

import { FaSearch, FaHome, FaBars } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { val } from "./ValNav";

function Navbar(props) {
  const sideBar = useContext(val);
  const handleSide=()=>{
    sideBar.widthInc()
  }

 

  const [lang, setLang] = useState(false);
  const [prof, setProf] = useState(false);
  const [cart, setCart] = useState(false);
  const [cal, setCal] = useState(false);
  const [noti, setNoti] = useState(false);

  const handleProf = () => {
    setProf(!prof);
    setLang(false);
    setCart(false);
    setCal(false);
    setNoti(false);
  };
  const handleLang = () => {
    setProf(false);
    setLang(!lang);
    setCart(false);
    setCal(false);
    setNoti(false);
  };
  const handleCart = () => {
    setProf(false);
    setLang(false);
    setCart(!cart);
    setCal(false);
    setNoti(false);
  };
  const handleCal = () => {
    setProf(false);
    setLang(false);
    setCart(false);
    setCal(!cal);
    setNoti(false);
  };
  const handleNoti = () => {
    setProf(false);
    setLang(false);
    setCart(false);
    setCal(false);
    setNoti(!noti);
  };
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav
        className={`navbar sticky bg-violet-600 flex text-white h-[63px] border-y-2 border-y-gray-400  border-t-gray-400  ${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <div className="container ml-10  flex items-center h-16  justify-between">
          <div className="hidden sm:block">
            <div className="flex  hover:cursor-pointer  items-center space-x-2">
              <div
                onClick={() => {
                  handleSide();
                }}
                className="valvet"
              >
                <AiOutlineBars />
              </div>
              <Link to="/">
                <FaHome className="inline-block mr-3 w-7 h-7  " />
              </Link>
              <input
                type="text"
                placeholder="Search"
                className="rounded-full py-2 px-2 bg-gray-200 text-black"
              />
              <button className="text-gray-200">
                <FaSearch />
              </button>
            </div>
          </div>

          <div className="icons flex items-center  ">
            <ul className="hidden sm:flex space-x-4">
              <div className="lang">
                <li>
                  <Link to="#">
                    <i
                      onClick={() => {
                        handleLang();
                      }}
                      className="bi bi-globe inline-block w-5 h-5 "
                    ></i>
                  </Link>
                </li>
                <div
                  className={` ${
                    lang ? "" : "hidden"
                  } langDropdown  w-28  text-md border-gray-100 border-2 shadow-inner z-[50]  bg-white text-black translate-y-2 absolute  `}
                >
                  <ul>
                    <div className="p-2">
                      <li className=" ml-5 hover:bg-gray-200 ">
                        <Link href="#">English</Link>
                      </li>
                      <hr className="m-1" />
                      <li className=" ml-5 hover:bg-gray-200   ">
                        <Link href="#">French</Link>
                      </li>
                      <hr className="m-1" />
                      <li className=" ml-5 hover:bg-gray-200 ">
                        <Link href="#">German</Link>
                      </li>
                      <hr className="m-1" />
                      <li className=" ml-5 hover:bg-gray-200  ">
                        <Link href="#">Russian</Link>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>

              <li>
                <Link to="#">
                  <i
                    className="bi bi-moon  inline-block w-5 h-5 "
                  ></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i
                    onClick={() => handleCart()}
                    className="bi bi-cart  inline-block w-5 h-5 "
                  ></i>
                </Link>
              </li>

              <div
                className={`${
                  cart ? "" : "hidden"
                } cart text-sm absolute -translate-x-72 translate-y-12   bg-white border-gray-200 border-2`}
              >
                <Dropdowncart />
              </div>

              <li>
                <Link to="#">
                  <i
                    onClick={() => handleNoti()}
                    className="bi bi-bell  inline-block w-5 h-5 "
                  ></i>
                </Link>
              </li>

              <li>
                <Link to="#">
                  <i className="bi bi-grid  inline-block w-5 h-5 "></i>
                </Link>
              </li>
              <div
                className={`${
                  noti ? "" : " hidden"
                } absolute bg-white translate-y-12 -translate-x-60`}
              >
                <Notification />
              </div>
              <li>
                <Link to="#">
                  <i className="bi bi-fullscreen  inline-block w-5 h-5 "></i>
                </Link>
              </li>

              <li>
                <Link to="#">
                  <i
                    onClick={() => handleCal()}
                    className="bi bi-sliders2  inline-block w-5 h-5 "
                  ></i>
                </Link>
              </li>
              <div
                className={` ${
                  cal ? "" : "hidden"
                } cal absolute h-60 translate-y-12 text-black translate-x-[90px]`}
              >
                <CalNoti />
              </div>
            </ul>
          </div>
        </div>
        <div className="profile ml-4">
          <Link to="#">
            <div className="flex justify-center items-center h-full w-40 border-r-2 border-l-2 border-gray-400 shadow-inner">
              <img
                onClick={() => handleProf()}
                src={profile}
                alt=""
                className="  rounded-full w-8 h-8"
              />
              <p className=" font-bold ml-2">Harry's John</p>
            </div>
          </Link>
        </div>

        <div className="proDrop">
          <ul
            className={` ${
              prof ? "" : "hidden"
            } py-1 text-sm   text-black-700 absolute -translate-x-36 translate-y-6 border-2 border-gray-100  px-4   shadow-inner bg-white`}
          >
            <div className="ml-2 text-lg text-black">
              <li className=" text-green-600 hover:bg-gray-200 ">
                <Link to="profile"> Profile </Link>
              </li>
              <hr />
              <li className=" hover:bg-gray-200">
                <Link to="#"> Message </Link>
              </li>
              <hr />
              <li className=" hover:bg-gray-200">
                <Link to="#"> Setting </Link>
              </li>
              <hr />
              <li className=" hover:bg-gray-200">
                <Link to="#"> Help </Link>
              </li>
              <hr />
              <li className=" hover:bg-gray-200">
                <Link to="#"> Log Out </Link>
              </li>
            </div>
          </ul>
        </div>
        <div className="setting ml-4 mr-5 flex items-center">
          <i class="bi bi-gear animate-spin"></i>
        </div>

        <div className="sm:hidden m-5">
          <button
            className="text-2xl"
            onClick={() => {
              handleNav();
            }}
          >
            <FaBars />
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
