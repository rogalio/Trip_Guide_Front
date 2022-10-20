import { Link } from "react-router-dom";
import logo from "../asset/logo.png";
import ProfilMenu from "./ProfilMenu";
import Notifications from "./Notifications";
import ChooseCurrency from "./ChooseCurrency";
import SwitchTheme from "./SwitchTheme";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { resetState } from "../redux/UserSlice";

const Header = () => {
  const dispatch = useAppDispatch();

  const ResetReduxStore = () => {
    dispatch(resetState());
  };

  return (
    <div className="dark:bg-c1">
      <div className="flex items-center justify-between h-20 max-w-5xl p-6 mx-auto bg-white font-DmSans dark:bg-c1">
        <Link to="/" onClick={ResetReduxStore}>
          <div className="flex items-center gap-4">
            <img src={logo} alt="logo" />
            <p className="font-bold text-md text-c2 dark:text-c9">TripGuide</p>
          </div>
        </Link>

        <div className="flex items-center ">
          <SwitchTheme />
          <ChooseCurrency />
          <Notifications />
          <ProfilMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
