import React, { useState, useEffect } from "react";

function Menu() {
  const [scroll, setScroll] = useState(null);
  const [size, setSize] = useState(window.innerWidth); // Track window size

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScroll(position);
    };

    const handleResize = () => {
      setSize(window.innerWidth); // Update window size on resize
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize); // Listen for resize event

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize); // Clean up listeners
    };
  }, []);

  return (
    <>
      {size >= 768 && (
        <header className="w-full min-h-[100px] z-10">
          <div
            className={`w-full min-h-[100px] flex justify-center fixed ${
              scroll <= 60 ? null : "rounded-3xl rounded-t-none bg-[#0071f8]"
            }`}
          >
            {/* Conditionally render navigation based on window size */}
            <nav className="w-[720px] min-h-[42px] flex lg:w-[960px] xl:w-[1140px] 2xl:w-[1320px] 2xl:justify-center">
              <div className="w-[25%] lg:w-[215px] min-h-[100px] items-end flex justify-center md:justify-start mr-[8px]">
                <a
                  className="w-[110px] h-[42px] lg:w-[158px] ms-4 lg:h-[60px] mb-[8px]"
                  href="#"
                >
                  <img src="./Images/logo.png" alt="" />
                </a>
              </div>
              <div className="w-[75%] lg:w-[778px] xl:w-[958px] 2xl:w-[1138px] min-h-[100px] flex justify-end items-end ">
                <div className="w-full flex justify-end lg:mb-[12px]">
                  <ul className="min-w-[586px] min-h-[50px] text-white flex justify-end items-end mb-[8px]">
                    <li className="py-[8px] mx-[8px] lg:px-[12px] lg:mx-[4px] rounded-full ">
                      <a
                        className="px-[12px] py-[10px] hover:bg-[#1A89F9] transition-all ease-in-out duration-500 hover:transition-all hover:ease-in-out hover:duration-500 rounded-full"
                        href="#"
                      >
                        home
                      </a>
                    </li>
                    <li className="py-[8px] mx-[8px] lg:px-[12px] lg:mx-[4px] rounded-full ">
                      <a
                        className="px-[10px] py-[10px] hover:bg-[#1A89F9] transition-all ease-in-out duration-500 hover:transition-all hover:ease-in-out hover:duration-500 rounded-full"
                        href="#"
                      >
                        our shop
                      </a>
                    </li>
                    <li className="py-[8px] mx-[8px] lg:px-[12px] lg:mx-[4px] rounded-full ">
                      <a
                        className="px-[12px] py-[10px] hover:bg-[#1A89F9] transition-all ease-in-out duration-500 hover:transition-all hover:ease-in-out hover:duration-500 rounded-full"
                        href="#"
                      >
                        product details
                      </a>
                    </li>
                    <li className="py-[8px] mx-[8px] lg:px-[12px] lg:mx-[4px] rounded-full ">
                      <a
                        className="px-[12px] py-[10px] hover:bg-[#1A89F9] transition-all ease-in-out duration-500 hover:transition-all hover:ease-in-out hover:duration-500 rounded-full"
                        href="#"
                      >
                        contact us
                      </a>
                    </li>
                    <li className="bg-[#EE626B] py-[8px] mx-[8px] lg:px-[12px] lg:mx-[4px] rounded-full">
                      <a className="uppercase px-[12px] py-[12px]" href="#">
                        sign in
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
      )}
    </>
  );
}

export default Menu;
