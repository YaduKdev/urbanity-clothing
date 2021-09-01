import './MenuItem.styles.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const MenuItem2 = (props) => {
    const [buttonColor, setButtonColor] = useState('');

    const handleHoverEffect= (color) => {
        setButtonColor(color)
    }

    return (
    <div className={props.style}>
    <div className='main-item'>
        <img className='menu-item-image' src={process.env.PUBLIC_URL+`${props.backgroundImage}`} alt='menu-item' />
        <div className='item-content' style={{background: `${props.background}`}}>
            <h2 className='item-title'>{props.title}</h2>
                    <span className='item-button'>
                    <Link onMouseEnter={()=>handleHoverEffect(props.background)} onMouseOut={()=>handleHoverEffect('#FFFF')} style={{color: `${buttonColor}`}} className='item-button-font' to= {props.routeName}>
                        SHOP NOW
                    </Link>
                    </span>
        </div>
    </div>
    </div>
)}

export default MenuItem2;