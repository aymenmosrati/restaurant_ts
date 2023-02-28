import "./_index.scss";
import Modale from "../../../../components/Modal";
import logout from "../../../../assets/img/Sign-out.svg";
import AngleDown from "../../../../assets/img/IconComponent/AngleDown";
import { useAppDispatch } from "../../../../hooks/hooksRedux";
import { closeLogOut } from "../../../../store/modalSlice";

const Index = () => {
  const dispatch = useAppDispatch();
  return (
    <Modale className="logOut">
      <div
        className="bg-close-logOut"
        onClick={() => dispatch(closeLogOut(false))}
      >
        <AngleDown className="logout-link-close" />
      </div>
      <span>Log Out</span>
      <img src={logout} alt="logout" className="logOut-logo" />
    </Modale>
  );
};

export default Index;
