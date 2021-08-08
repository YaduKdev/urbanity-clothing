import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopDataForPreview } from '../../Redux/shop/shop.selectors';

import './CollectionOverview.styles.scss';

const CollectionOverview = ({shopData}) => (
    <div className='collection-overview'>
    {
        shopData.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))
    }
</div>
);

const mapStateToProps = createStructuredSelector({
    shopData: selectShopDataForPreview
});

export default connect(mapStateToProps)(CollectionOverview);