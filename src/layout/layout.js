import { NavLink, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../img/Craftwork.svg";
import { ReactComponent as User } from "../img/gridicons_user-2.svg";
import { ReactComponent as Burger } from "../img/Nav.svg";
import { MainContainer } from "./layout.styled";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModalMobile } from "../redux/modals/modal-slice";
import MobileModal from "../modals/mobileModal";

export default function Layout() {
  const dispatch = useDispatch();
  const isMobileModalOpen = useSelector(
    (state) => state.modal.isModalOpenMobile
  );

  useEffect(() => {
    console.log(isMobileModalOpen);
  }, [isMobileModalOpen]);
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
        <div className="RightSideHeader">
          <div className="UserContainer">
            <span className="UserImag">
              <User />
            </span>
            <p className="UserName"></p>
          </div>
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
