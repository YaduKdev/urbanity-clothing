import { Link } from "react-router-dom";
import { auth } from "../../Firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../Redux/user/user.selector";
import { selectCartHidden } from "../../Redux/cart/cart.selectors";
import CartIcon from "../CartIcon/CartIcon.component";
import CartDropDown from "../CartDropDown/CartDropDown.component";
import { ReactComponent as HamburgerMenu } from "../../Assets/hamburger-menu.svg";
import { ReactComponent as Delete } from "../../Assets/delete.svg";
import "./Header.styles.scss";
import { useState } from "react";

const Header2 = ({ currentUser, hidden }) => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="header">
      <div className="mobile-menu">
        <div className="menu-button-container" onClick={showMenu}>
          {menu ? <Delete /> : <HamburgerMenu />}
        </div>
        {menu ? (
          <div className="mobile-options">
            <Link className="mobile-option" to="/shop">
              <span className="mobile-shop-option" onClick={showMenu}>
                SHOP
              </span>
            </Link>
            <Link className="mobile-option" to="/contact">
              <span className="mobile-contact-option" onClick={showMenu}>
                CONTACT
              </span>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
      <Link className="logo-container" to="/">
        <h1 className="logo">URBANITY</h1>
      </Link>
      <div className="options">
        <Link className="option menu-option" to="/shop">
          <span className="shop-option">SHOP</span>
        </Link>
        <Link className="option menu-option" to="/contact">
          <span className="contact-option">CONTACT</span>
        </Link>
        {currentUser ? (
          <div className="option sign-in-option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option sign-in-option" to="/sign-in">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header2);
