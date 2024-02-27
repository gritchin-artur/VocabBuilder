import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../img/Craftwork.svg";
import { ReactComponent as User } from "../img/gridicons_user-2.svg";
import { ReactComponent as Burger } from "../img/Nav.svg";
import { MainContainer } from "./layout.styled";
import { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModalMobile } from "../redux/modals/modal-slice";
import MobileModal from "../modals/mobileModal";
import authOperations from "../redux/auth/auth-operations";
import toast from "react-hot-toast";

export default function Layout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMobileModalOpen = useSelector(
    (state) => state.modal.isModalOpenMobile
  );
  const userName = useSelector((state) => state.auth.name);

  const handleSubmit = () => {
    dispatch(authOperations.logOut())
      .unwrap()
      .then(() => navigate("/"))
      .catch((error) => toast.error("Something went wrong 🤔"));
  };
  return (
    <>
      <MainContainer>
        <NavLink to="/" className="LogoContainer">
          <Logo />
          <h2>VocabBuilder</h2>
        </NavLink>
        {userName && (
          <ul className="NavigationContainer">
            <li>
              <NavLink className="NavElement" to="/dictionary">
                Dictionary
              </NavLink>
            </li>
            <li>
              <NavLink className="NavElement" to="/recommend">
                Recommend
              </NavLink>
            </li>
            <li>
              <NavLink className="NavElement" to="/training">
                Training
              </NavLink>
            </li>
          </ul>
        )}

        {userName && (
          <div className="RightSideHeader">
            <button className="ButtonLogOut" onClick={handleSubmit}>
              Log Out
            </button>
            <div className="UserContainer">
              <p className="UserName">{userName}</p>
              <span className="UserImag">
                <User />
              </span>
            </div>
            <Burger
              className="ButtonBurger"
              onClick={() => dispatch(openModalMobile())}
            />
          </div>
        )}
      </MainContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      {isMobileModalOpen && <MobileModal />}
      {/* <Footer /> */}
    </>
  );
}
