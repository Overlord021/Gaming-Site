import { useContext } from "react";
import { MyContext } from "../../App/App";
const SetCategories = () => {
    const { property } = useContext(MyContext);
  return (
    <>
      <div className="w-full flex md:flex-row justify-center">
        <div className="w-[351px] xxs:w-[426px] sm:w-[516px] md:w-[720px] lg:w-[960px] xl:w-[1140px] 2xl:w-[1320px] mt-[90px] flex justify-between xxs:justify-center flex-wrap mb-[120px]">
          <div className="w-full mb-[60px] flex">
            <div className="w-full flex flex-col items-center">
              <h6 className="text-[#ee626b] text-[16px] uppercase font-bold">
                categories
              </h6>
              <h2 className="text-[#1e1e1e] text-[36px] capitalize font-bold">
                top categories
              </h2>
            </div>
          </div>
          {property.Categories?.map((elem) => {
            return (
              <div
                className="w-full xxs:w-[351px] sm:w-[246px]  md:w-[336px] lg:w-[168px] xl:w-[204px] 2xl:w-[240px] 2xl:h-[290px] bg-[#0071F8] rounded-3xl mb-6 md:mx-2"
                key={elem.id}
              >
                <div className="w-full flex flex-col items-center px-[40px] py-[20px]">
                  <div className="w-full flex flex-col">
                    <span className="w-full flex justify-center items-center text-[#ffffff] font-bold text-[18px]">
                      {elem.genre}
                    </span>
                  </div>
                </div>
                <div className="relative rounded-3xl">
                  <img
                    className="w-full cursor-pointer rounded-3xl"
                    src={elem.image}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SetCategories;
