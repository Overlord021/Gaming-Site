import "./Items.css";
const Items = () => {
  return (
    <>
      <div className="w-full flex justify-center mt-[120px] xxs:mt-[70px] lg:mt-[152px]">
        <div className="w-[351px] h-auto flex flex-col xxs:min-w-[410px] sm:min-w-[516px] mb-[120px] md:flex-row md:justify-between md:flex-wrap md:w-[696px] lg:w-[960px] xl:w-[1140px] 2xl:w-[1320px]">
          <div className="w-full h-[206px] rounded-3xl mb-[20px]  md:m-0 md:w-[336px] lg:w-[216px] xl:w-[261px] 2xl:w-[306px] md:mb-4">
            <div className="rounded-3xl p-[34px] h-full flex flex-col justify-center items-center bg-white shadow-mdd hover:cursor-pointer">
              <div className="w-[90px] h-[90px] flex justify-center items-center rounded-full bg-[#0071fb] bg-change">
                <img src="./Images/featured-01.png" alt="" />
              </div>
              <h4 className="uppercase mt-[18px] font-bold">free storage</h4>
            </div>
          </div>
          <div className="w-full h-[206px] rounded-3xl my-[20px] md:m-0 md:w-[336px] lg:w-[216px] xl:w-[261px] 2xl:w-[306px] md:mb-4">
            <div className="rounded-3xl p-[34px] h-full flex flex-col justify-center items-center bg-white shadow-mdd hover:cursor-pointer">
              <div className="w-[90px] h-[90px] flex justify-center items-center rounded-full bg-[#0071fb] bg-change">
                <img src="./Images/featured-02.png" alt="" />
              </div>
              <h4 className="uppercase mt-[18px] font-bold">more user</h4>
            </div>
          </div>
          <div className="w-full h-[206px] rounded-3xl my-[20px] md:m-0 md:w-[336px] lg:w-[216px] xl:w-[261px] 2xl:w-[306px]">
            <div className="rounded-3xl p-[34px] h-full flex flex-col justify-center items-center bg-white shadow-mdd hover:cursor-pointer">
              <div className="w-[90px] h-[90px] flex justify-center items-center rounded-full bg-[#0071fb] bg-change">
                <img src="./Images/featured-03.png" alt="" />
              </div>
              <h4 className="uppercase mt-[18px] font-bold">ready reply</h4>
            </div>
          </div>
          <div className="w-full h-[206px] rounded-3xl md:m-0 md:w-[336px] lg:w-[216px] xl:w-[261px] 2xl:w-[306px]">
            <div className="rounded-3xl p-[34px] h-full flex flex-col justify-center items-center bg-white shadow-mdd hover:cursor-pointer">
              <div className="w-[90px] h-[90px] flex justify-center items-center rounded-full bg-[#0071fb] bg-change">
                <img src="./Images/featured-04.png" alt="" />
              </div>
              <h4 className="uppercase mt-[18px] font-bold">easy layout</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
