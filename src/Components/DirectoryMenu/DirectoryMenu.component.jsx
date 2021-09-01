import './DirectoryMenu.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopDataForPreview } from '../../Redux/shop/shop.selectors';
import MenuItem from '../MenuItem/MenuItem.component';


const DirectoryMenu = ({shopData}) => {
    return (
    <div className='directory-menu'>   
        {shopData.slice(0).reverse().map(({id, ...otherProps})=>
            <MenuItem key={id} {...otherProps} />
        )}
    </div>
)}

const mapStateToProps = createStructuredSelector({
    shopData: selectShopDataForPreview
});

export default connect(mapStateToProps)(DirectoryMenu);