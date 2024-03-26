const Preorder = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-[960px] h-[760px] flex flex-col items-center lg:flex-row lg:relative lg:h-[840px] xl:w-[1140px] 2xl:w-[1320px]">
          <div className="w-[351px] bg-[#F7F7F7] rounded-3xl p-[12px] mb-[30px] flex flex-col items-center xxs:w-[426px] h-[464px] sm:w-[480px] sm:h-[360px] md:w-[480px] md:h-[360px] lg:w-[376px] lg:h-[724px] lg:flex lg:justify-center lg:items-center lg:absolute lg:top-0 lg:left-6 lg:mt-[90px] lg:z-[1] xl:w-[451px] xl:h-[520px] 2xl:w-[526px] 2xl:h-[536px]">
            <div className="w-[291px] xxs:w-[351px] sm:w-[456px] md:w-[456px] lg:w-[240px] lg:h-[524px] xl:w-[315px] mt-[24px] 2xl:mt-[40px] flex flex-col justify-center ">
              <h6 className="text-[#ee626b] text-[16px] uppercase font-bold mb-[16px]">
                our shop
              </h6>
              <h2 className="text-[36px] capitalize lg:w-[186px] lg:h-[264px] lg:flex lg:flex-col xl:w-[241px] xl:h-[176px] xl:block 2xl:w-[336px] 2xl:h-[132px] justify-center text-[#1e1e1e] font-bold leading-10">
                go pre-order buy & get best{" "}
                <span className="text-[#0071fb]">prices</span> for you!
              </h2>
              <p className="font-semibold text-[#4a4a4a] mt-[32px] mb-[50px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veritatis, incidunt.
              </p>
              <div className="w-full h-[50px] rounded-full flex items-center">
                <button className="w-[138px] h-[50px] flex justify-center items-center text-[14px] bg-[#EE626B] text-white rounded-full px-7 py-3 lg:px-2 lg:text-[14px] uppercase font-semibold hover:bg-[#0071F8] transition-all ease-in-out duration-300 hover:transition-all hover:ease-in-out hover:duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          <div className="w-[560px] h-[580px] hidden lg:flex absolute top-0 left-[50%] -translate-x-[50%] rounded-3xl">
            <img className="rounded-3xl" src="./Images/cta-bg.jpg" alt="" />
          </div>

          <div className="w-[351px] bg-[#F7F7F7] rounded-3xl p-[12px] mb-[30px] flex flex-col items-center xxs:w-[426px] h-[439px] sm:w-[480px] sm:h-[360px] md:w-[480px] md:h-[360px] lg:w-[376px] lg:h-[518px] lg:flex lg:justify-center lg:items-center lg:absolute lg:top-[50%] lg:right-6 lg:-translate-y-[75%] lg:mt-[160px] lg:z-[1] xl:w-[451px] xl:h-[474px] 2xl:w-[526px] 2xl:h-[430px]">
            <div className="w-[291px] xxs:w-[351px] sm:w-[456px] md:w-[456px] lg:w-[256px] xl:w-[331px] mt-[24px] flex flex-col justify-center">
              <h6 className="text-[#ee626b] text-[16px] uppercase font-bold mb-[16px]">
                NEWSLETTER
              </h6>
              <h2 className="text-[36px] capitalize text-[#1e1e1e] font-bold leading-10">
                Get Up To $100 Off Just Buy{" "}
                <span className="text-[#0071fb]">Subscribe</span> Newsletter!
              </h2>
              <div className="mt-[90px] relative">
                <input
                  className="w-full rounded-full px-7 py-3 outline-0 text-black"
                  type="email"
                  placeholder="Your Email..."
                />
                <button className="bg-[#EE626B] text-white absolute rounded-full right-[3px] translate-x-1 px-3 py-3 xxs:px-4 sm:px-4 md:px-4 lg:px-2 lg:text-[14px] xl:px-4 uppercase font-semibold hover:bg-[#0071F8] transition-all ease-in-out duration-300 hover:transition-all hover:ease-in-out hover:duration-300">
                  SUBSCRIBE NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preorder;
