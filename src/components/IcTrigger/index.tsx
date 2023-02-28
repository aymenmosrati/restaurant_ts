import { closeSidebar } from "../../store/modalSlice";
import { useAppDispatch } from "../../hooks/hooksRedux";
import "./_index.scss";
type TriggerType = {
  className: string;
  isOpen: boolean;
};
const Index = ({ className, isOpen }: TriggerType) => {
  const dispatch = useAppDispatch();
  return (
    <div
      className={`${className}`}
      onClick={() => dispatch(closeSidebar(isOpen))}
    >
      <div className="close-sidebar-trigger-hover">
        <div className="close-sidebar-trigger1"></div>
        <div className="close-sidebar-trigger2"></div>
        <div className="close-sidebar-trigger3"></div>
      </div>
    </div>
  );
};

export default Index;
