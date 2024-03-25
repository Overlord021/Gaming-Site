import React, { useState, useEffect } from "react";
import { IoMenuSharp, IoClose } from "react-icons/io5";

function ResMenu() {
  const [size, setSize] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu open/close
  const [scroll, setScroll] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    const handleScroll = () => {
      const position = window.scrollY;
      setScroll(position);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  return (
    <>
      {size < 768 && (
        <header className="w-full min-h-[100px] ">
          <div
            className={`w-full min-h-[100px] fixed px-4 ${
              scroll <= 6
                ? null
                : "rounded-3xl rounded-t-none shadow-md bg-[#0071f8]"
            }`}
          >
            <nav className="min-h-[100px] flex items-center">
              <div className="w-[30%] min-h-[100px] ps-[8px] items-center flex">
                <a href="#" className="w-[110px] h-[42px]">
                  <img
                    className="mt-[10%] sm:mt-0"
                    src="./Images/logo.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="w-[80%] min-h-[100px] flex flex-col justify-end items-center">
                <div className="w-full h-[100px] flex justify-end items-center">
                  <button
                    className="min-w-[40px] mr-[16px]"
                    onClick={handleMenuClick}
                    style={{ zIndex: 1 }} // Ensure the button stays on top
                  >
                    {isMenuOpen ? (
                      <IoClose
                        style={{
                          width: "100%",
                          height: "100%",
                          color: "white",
                        }}
                      />
                    ) : (
                      <IoMenuSharp
                        style={{
                          width: "100%",
                          height: "100%",
                          color: "white",
                        }}
                      />
                    )}
                  </button>
                </div>
              </div>
              <ul
                className={`${
                  isMenuOpen
                    ? "w-[80%] min-h-[250px] rounded-3xl rounded-t-none flex flex-col bg-white items-center justify-evenly absolute transition-all duration-300 ease-in-out transform translate-y-0 opacity-100"
                    : "opacity-0 absolute pointer-events-none transform -translate-y-full"
                }`}
                style={{
                  top: "100px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <li className="w-full h-[50px] flex items-center justify-center border-b-[1px] border-[#DDDDDD]">
                  <a className="text-[18px]" href="#">
                    home
                  </a>
                </li>
                <li className="w-full h-[50px] flex items-center justify-center border-b-[1px] border-[#DDDDDD]">
                  <a className="text-[18px]" href="#">
                    our shop
                  </a>
                </li>
                <li className="w-full h-[50px] flex items-center justify-center border-b-[1px] border-[#DDDDDD]">
                  <a className="text-[18px]" href="#">
                    product details
                  </a>
                </li>
                <li className="w-full h-[50px] flex items-center justify-center border-b-[1px] border-[#DDDDDD]">
                  <a className="text-[18px]" href="#">
                    contact us
                  </a>
                </li>
                <li className="w-full h-[50px] flex items-center justify-center ">
                  <a className="text-[18px]" href="#">
                    sign in
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      )}
    </>
  );
}

export default ResMenu;
