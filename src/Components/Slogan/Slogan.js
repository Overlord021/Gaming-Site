import Categories from "../Categoties/Categories";
import Footer from "../Footer/Footer";
import Preorder from "../Pre-order/Pre-order";
import TopGames from "../TopGames/TopGames";
import Trends from "../Trends/Trends";
import Banner from "./Banner/Banner";
import Items from "./Items/Items";
import MainMenu from "./Main-Menu/Main-Menu";

const Slogan = () => {
  return (
    <>
      <section
        className="w-full h-[1420px] xxs:h-[1375px] sm:h-[1532px] md:h-[1666px] lg:h-[930px] xl:h-[884px] 2xl:h-[958px] rounded-[150px] rounded-t-none"
        style={{
          backgroundImage: `url(./Images/banner-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <MainMenu />
        <Banner />
        <Items />
        <Trends />
        <TopGames />
        <Categories />
        <Preorder />
        <Footer />
      </section>
    </>
  );
};

export default Slogan;
