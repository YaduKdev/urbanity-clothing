import { Link } from 'react-router-dom';
import { auth } from '../../Firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../Redux/user/user.selector';
import { selectCartHidden } from '../../Redux/cart/cart.selectors';
import CartIcon from '../CartIcon/CartIcon.component';
import CartDropDown from '../CartDropDown/CartDropDown.component';
import './header.styles.scss';


const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <h1 className='logo'>urbanity</h1>
        </Link>
        <div className='options'>
            <div className='header-strip' />
            <Link className='option' to='/shop'>
                <span className='shop-option'>SHOP</span>
            </Link>
            <Link className='option' to='/contact'>
                <span className='contact-option'>CONTACT</span>
            </Link>
            {currentUser ? (
                <div className='option sign-in-option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
            ) : (
                    <Link className='option sign-in-option' to='/sign-in'>
                        SIGN IN
                    </Link>
            )}
            <CartIcon />
        </div>
        {hidden? null : <CartDropDown />}
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);