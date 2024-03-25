import Menu from "./Menu/Menu";
import ResMenu from "./Menu/ResMenu/ResMenu";

const MainMenu = () => {
  return (
    <>
      <section className="relative z-50">
        <Menu />
        <ResMenu />
      </section>
    </>
  );
};

export default MainMenu;
