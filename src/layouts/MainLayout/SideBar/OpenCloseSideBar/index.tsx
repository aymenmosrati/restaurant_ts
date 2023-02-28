import useWindowSize from "../../../../hooks/useWindowSize";
import { ReactComponent as CloseIcon } from "../../../../assets/img/close.svg";
const CloseSidebarTrigger = () => {
  // const dispatch = useDispatch();
  const { width } = useWindowSize();

  if (width >= 1090) return null;

  return (
    <div
      className="close_sidebar_trigger"
      // onClick={() => dispatch(closeSidebar())}
    >
      <CloseIcon />
    </div>
  );
};

export default CloseSidebarTrigger;
