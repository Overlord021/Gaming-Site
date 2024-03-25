import { FaShoppingBag } from "react-icons/fa";
import { useContext } from "react";
import { MyContext } from "../../App/App";
import "./SetTrends.css";
const SetTrends = () => {
  const { property } = useContext(MyContext);
  return (
    <>
      <div className="w-full flex md:flex-row justify-center mb-[120px]">
        <div className="w-[351px] xxs:w-[426px] sm:w-[516px] md:w-[696px] lg:w-[960px] xl:w-[1140px] 2xl:w-[1320px] flex justify-between flex-wrap">
          <div className="w-full mb-[60px] flex">
            <div className="w-full">
              <h6 className="text-[#ee626b] text-[16px] uppercase font-semibold">
                trending
              </h6>
              <h2 className="text-[#1e1e1e] text-[36px] capitalize font-bold">
                trending games
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
          {property.Trendings?.map((elem) => {
            return (
              <div
                className="w-full md:w-[336px] sm:w-[246px] lg:w-[216px] xl:w-[261px] 2xl:w-[306px] bg-[#EEEEEE] rounded-3xl mb-6 Trend"
                key={elem.id}
              >
                <div className="relative rounded-3xl">
                  <span className="absolute top-4 right-4 bg-[#008AF8] font-bold text-[22px] text-white rounded-lg py-[4px] px-[15px]">
                    {elem.price}
                  </span>
                  <img
                    className="w-full cursor-pointer rounded-3xl"
                    src={elem.image}
                    alt=""
                  />
                </div>
                <div className="w-full flex p-[25px] clr-change">
                  <div className="w-[70%]">
                    <span className="text-[#7a7a7a] text-[14px]">
                      {elem.genre}
                    </span>
                    <h4 className="text-[#1e1e1e] text-[17px] font-semibold">
                      {elem.name}
                    </h4>
                  </div>
                  <div className="w-[30%] flex items-center justify-end">
                    <button className="w-[40px] h-[40px] bg-[#ee626b] text-white flex justify-center items-center rounded-full">
                      <FaShoppingBag />
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

export default SetTrends;
