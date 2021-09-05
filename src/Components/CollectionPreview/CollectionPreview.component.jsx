import CollectionItem from '../CollectionItem/CollectionItem.component';
import { withRouter } from 'react-router-dom';
import './CollectionPreview.styles.scss';

const CollectionPreview = ({routeName, history, match, title, items, background}) => (
    <div className='collection-preview'>
        <div className='collection-item-container'>
            
                <h1 className='collection-heading' style={{backgroundColor: `${background}`}} onClick={() => history.push(`${match.path}/${routeName}`)}>
                    {title}
                </h1>
            
            <div className= 'preview'>
                {
                    items.filter((item, idx) =>(idx<4)).map((item)=>(
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    </div>
)

export default withRouter(CollectionPreview);