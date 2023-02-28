import Header from "./Header";
import SideBar from "./SideBar";
import "./_index.scss";

const MainLayout = () => {
  return (
    <div className="MainLayout">
      <SideBar />
      <Header />
      {/* <div>{children}</div> */}
    </div>
  );
};

export default MainLayout;
