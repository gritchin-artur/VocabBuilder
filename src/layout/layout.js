import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../img/Craftwork.svg";
import { ReactComponent as User } from "../img/gridicons_user-2.svg";
import { ReactComponent as Burger } from "../img/Nav.svg";
import { MainContainer } from "./layout.styled";
import { Suspense, useEffect } from "react";
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
  const token = useSelector((state) => state.auth.token);

  const handleSubmit = () => {
    dispatch(authOperations.logOut(token))
      // .unwrap()
      .then(() => navigate("/"))
      .catch((error) => toast.error("Please try again 🤔"));
  };
  return (
    <>
      <MainContainer>
        <NavLink to="/" className="LogoContainer">
          <Logo />
          <h2>VocabBuilder</h2>
        </NavLink>
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
        <button onClick={handleSubmit}>Log Out</button>
        <div className="RightSideHeader">
          {userName && (
            <div className="UserContainer">
              <p className="UserName">{userName}</p>
              <span className="UserImag">
                <User />
              </span>
            </div>
          )}
          <Burger
            className="ButtonBurger"
            onClick={() => dispatch(openModalMobile())}
          />
        </div>
      </MainContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      {isMobileModalOpen && <MobileModal />}
      {/* <Footer /> */}
    </>
  );
}
