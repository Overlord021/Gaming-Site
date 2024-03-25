const Banner = () => {
  return (
    <>
      <section className="w-full flex justify-center mt-[120px]">
        <div className="w-full px-4 justify-center items-center text-white flex flex-col lg:w-[960px] lg:h-[460px] lg:flex-row lg:items-start xl:w-[1140px] xl:justify-start 2xl:w-[1320px] 2xl:h-[508px]">
          <div className="w-full flex flex-col text-center py-[12px]  sm:w-[516px] md:min-w-[696px] lg:min-w-[456px] lg:w-[456px] lg:h-[460px] lg:text-start xl:min-w-[570px] 2xl:min-w-[660px] 2xl:h-full 2xl:justify-center">
            <h6 className=" text-[20px] uppercase font-semibold">
              Welcome to lugx
            </h6>
            <h2 className=" text-[48px] uppercase font-bold mb-[24px] py-[8px]">
              BEST GAMING SITE EVER!
            </h2>
            <div className="w-full flex justify-center xl:justify-start">
              <p className=" sm:w-[516px] md:min-w-[696px] leading-7 lg:min-w-[456px] 2xl:min-w-full py-[12px] text-[15px] mb-[70px] lg:mb-[48px]">
                LUGX Gaming is Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Illo saepe repellendus odit quis corrupti
                provident praesentium adipisci praesentium adipisci, quisquam
                rem maxime accusamus error!
              </p>
            </div>

            <div className="w-full flex justify-center xl:justify-start">
              <div className="w-[410px] sm:w-[516px] md:min-w-[696px] lg:min-w-[456px] relative">
                <input
                  className="w-full rounded-full px-7 py-3"
                  type="text"
                  placeholder="type something"
                />
                <button className="bg-[#EE626B] absolute rounded-full right-[3px] translate-x-1 px-7 py-3 uppercase font-semibold hover:bg-[#0071F8]">
                  Search Now
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center  sm:w-[516px] md:min-w-[696px] lg:min-w-[296px] lg:justify-end xl:min-w-[570px] xl:justify-end xl:pr-[16px] 2xl:min-w-[660px] 2xl:h-full">
            <div className="bg-green-500 mt-[50px] rounded-3xl relative  sm:w-[516px] md:min-w-[696px] lg:w-[296px] lg:min-w-[296px] lg:mt-[12px] xl:min-w-[356px] xl:min-h-[434px] 2xl:w-[416px] 2xl:min-w-[416px] 2xl:mt-0">
              <span className="absolute top-4 right-4 bg-[#008AF8] font-bold text-[22px] text-white rounded-full py-[4px] px-[15px]">
                $22
              </span>
              <img
                className="rounded-3xl w-full"
                src="./Images/banner-image.jpg"
                alt=""
              />
              <span className="w-[100px] h-[100px] bg-[#EE626B] flex justify-center items-center text-[28px] font-bold text-white absolute top-[98%] right-[98%] translate-x-[100%] -translate-y-[100%] md:translate-x-[70%] md:-translate-y-[70%] z-[1] rounded-full">
                -40%
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
