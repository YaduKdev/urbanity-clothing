import CollectionOverview from '../../Components/CollectionOverview/CollectionOverview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../CollectionPage/CollectionPage.component';
import './ShopPage.styles.scss';

const ShopPage = ({match}) => (
    <div className='shop-page'>
        <Route exact path= {`${match.path}`} component={CollectionOverview} />
        <Route path= {`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
);


export default ShopPage;