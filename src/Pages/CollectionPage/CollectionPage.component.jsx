import CollectionItem from '../../Components/CollectionItem/CollectionItem.component';
import { connect } from 'react-redux';
import { selectCollection } from '../../Redux/shop/shop.selectors';

import './CollectionPage.styles.scss';

const CollectionPage = ({collection}) => {
    const {title, items, background} = collection;
    return (
        <div className='collection-page'>
            <h2 className='title' style={{color: `${background}`}}>{title}</h2>
            <div className='items'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);