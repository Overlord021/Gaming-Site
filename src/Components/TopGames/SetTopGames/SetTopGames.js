import { useContext } from "react";
import { MyContext } from "../../App/App";
import "./SetTopGames.css";
const SetTopGames = () => {
  const { property } = useContext(MyContext);
  return (
    <>
      <div className="w-full bg-[#F7F7F7] rounded-[150px] flex md:flex-row justify-center">
        <div className="w-[321px] xxs:w-[426px] sm:w-[516px] md:w-[720px] lg:w-[960px] xl:w-[1140px] 2xl:w-[1320px] mt-[90px] flex xxs:justify-center sm:justify-between lg:justify-evenly flex-wrap">
          <div className="w-full mb-[60px] flex">
            <div className="w-full">
              <h6 className="text-[#ee626b] md:flex md:flex-col md:items-center lg:items-start text-[16px] uppercase font-semibold">
                top games
              </h6>
              <h2 className="text-[#1e1e1e] md:flex md:flex-col md:items-center lg:items-start text-[36px] capitalize font-bold">
                Most Played
              </h2>
            </div>

            <div className="w-full hidden lg:flex lg:justify-end lg:items-center">
              <a
                className="w-[122px] h-[50px] flex justify-center items-center rounded-full text-white font-semibold bg-[#EE626B] transition-all ease-in-out duration-300 hover:transition-all hover:ease-in-out hover:duration-300 hover:bg-[#0071F8]"
                href="#"
              >
                VIEW ALL
              </a>
            </div>
          </div>
          {property.MostPlayed?.map((elem) => {
            return (
              <div
                className="w-full sm:w-[246px] md:w-[336px] lg:w-[136px] xl:w-[166px] 2xl:w-[196px] bg-[#ffffff] rounded-3xl mb-6 Trend md:mx-2"
                key={elem.id}
              >
                <div className="relative rounded-3xl">
                  <img
                    className="w-full cursor-pointer rounded-3xl"
                    src={elem.image}
                    alt=""
                  />
                </div>
                <div className="w-full flex flex-col items-center px-[40px] py-[20px] clr-change">
                  <div className="w-full flex flex-col">
                    <span className="w-full flex justify-center items-center text-[#7a7a7a] text-[14px]">
                      {elem.genre}
                    </span>
                    <h4 className="w-full flex justify-center items-center text-[#1e1e1e] text-[17px] font-semibold">
                      {elem.name}
                    </h4>
                  </div>
                  <div className="w-full flex justify-center items-center mt-4">
                    <button className="w-[94px] h-[40px] bg-[#ee626b] text-white font-semibold flex justify-center items-center rounded-full p-[15px]">
                      EXPLORE
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SetTopGames;
