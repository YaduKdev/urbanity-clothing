import { useState } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../Redux/cart/cart.actions';
import './CollectionItem.styles.scss';

const CollectionItem = ({item, addItem}) => {
   const [color, setColor] = useState('#FFFF');
   const [font, setfont] = useState('#000');
   const [opacity, setOpacity] = useState('95%');
   const [buttonBorder, setButtonBorder] = useState(true);

   const {name, imageUrl, price, background} = item;

   const clickEffect = () => {
        setButtonBorder(!buttonBorder);
   }

    return (
        <div style={{
            background: `${background}`,
            border: `10px solid ${background}`
            }} className='collection-item'>
            <div className='collection-image' style= {{backgroundImage: `url(${imageUrl})`}} />
            <span onMouseEnter={()=>{
                    setColor(`${background}`);
                    setfont('#FFFF');
                    setOpacity('100%');
                }} 
                onMouseOut={()=>{
                    setColor('#FFFF');
                    setfont('#000');
                    setOpacity('95%');
                    }} 
                style={{
                    background: `${color}`,
                    color: `${font}`,
                    opacity: `${opacity}`,
                    border: `2px ${buttonBorder? 'outset': 'inset'} ${color}`
                    }} className='collection-button' onClick={() => {addItem(item); clickEffect()}}>ADD TO CART</span>
            <div className='collection-item-details'>
                <span className='collection-item-name'>{name}</span>
                <span className='collection-item-price'>$ {price}</span>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);