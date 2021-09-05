import './DirectoryMenu.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../Redux/directory/directory.selectors';
import MenuItem from '../MenuItem/MenuItem.component';


const DirectoryMenu = ({ sections }) => {
    return (
    <div className='directory-menu'>   
        {sections.slice(0).reverse().map(({id, ...otherProps})=>
            <MenuItem key={id} {...otherProps} />
        )}
    </div>
)}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
  });

export default connect(mapStateToProps)(DirectoryMenu);