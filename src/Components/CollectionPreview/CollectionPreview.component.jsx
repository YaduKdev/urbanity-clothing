import CollectionItem from '../CollectionItem/CollectionItem.component';
import { Link } from 'react-router-dom';
import './CollectionPreview.styles.scss';

const CollectionPreview = ({routeName, title, items, background}) => (
    <div className='collection-preview'>
        <div className='collection-item-container'>
            
                <h1 className='collection-heading' style={{background: `${background}`}}>
                <Link className='collection-heading-font' to={routeName}>
                {title}
                </Link>
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

export default CollectionPreview;