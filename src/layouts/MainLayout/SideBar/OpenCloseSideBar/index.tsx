import useWindowSize from "../../../../hooks/useWindowSize";
import IcTrigger from "../../../../components/IcTrigger";
import SideBar from "../";
const CloseSidebarTrigger = () => {
  const { width } = useWindowSize();
  if (width >= 1090) return <SideBar />;
  return <IcTrigger className="close-sidebar-trigger" isOpen={true} />;
};

export default CloseSidebarTrigger;
