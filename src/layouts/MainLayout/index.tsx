import React from "react";
import Modale from "../../components/Modal";
import { useAppSelector } from "../../hooks/hooksRedux";
import useWindowSize from "../../hooks/useWindowSize";
import Header from "./Header";
import SideBar from "./SideBar";
import CloseSidebarTrigger from "./SideBar/OpenCloseSideBar";
import "./_index.scss";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  const { showSidebar } = useAppSelector((state) => state.modal);
  const { width } = useWindowSize();
  return (
    <div className="MainLayout">
      {showSidebar && width < 1090 ? (
        <Modale className="open-sidebar">
          <SideBar />
        </Modale>
      ) : (
        <CloseSidebarTrigger />
      )}
      <Header />
    </div>
  );
};

export default MainLayout;
