import './MenuItem.styles.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const MenuItem = (props) => {
    const [buttonColor, setButtonColor] = useState('');

    const handleHoverEffect= (color) => {
        setButtonColor(color)
    }

    const backgroundImageStyles= {
        top: `${props.imageTop}`,
        left: `${props.imageLeft}`,
        right: `${props.imageRight}`,
        width: `${props.imageWidth}`,
        height: `${props.imageHeight}`,
        boxShadow: `${props.boxShadow}`
    }

    const itemContentStyles = {
        background: `${props.background}`,
        top: `${props.top}`,
        left: `${props.left}`,
        right: `${props.right}`,
        alignItems: `${props.alignItems}`,
        justifyContent: `${props.justifyContent}`,
        width: `${props.width}`,
        height: `${props.height}`
    }


    return (
    <div className='menu-item'>
    <div className='main-item'>
        <img className='menu-item-image' src={process.env.PUBLIC_URL+`${props.backgroundImage}`} style={backgroundImageStyles} alt='menu-item' />
        <div style={itemContentStyles} className='item-content'>
            <h2 className='item-title'>{props.title}</h2>
                    <span style={{margin: `${props.margin}`}} className='item-button'>
                    <Link onMouseEnter={()=>handleHoverEffect(props.background)} onMouseOut={()=>handleHoverEffect('#FFFF')} style={{color: `${buttonColor}`}} className='item-button-font' to= {props.routeName}>
                        SHOP NOW
                    </Link>
                    </span>
        </div>
    </div>
    </div>
)}

export default MenuItem;