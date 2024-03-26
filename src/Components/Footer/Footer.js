const Footer = () => {
  return (
    <>
      <footer
        className="w-full h-[180px] rounded-[100px] sm:rounded-full sm:rounded-b-none md:rounded-full md:rounded-b-none lg:rounded-full lg:rounded-b-none rounded-b-none flex items-center lg:text-[18px] mt-40 sm:mt-16 md:mt-16 lg:mt-16"
        style={{
          backgroundImage: `url(./Images/footer-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="w-full text-white text-center">
          Copyright © 2048 LUGX Gaming Company. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
