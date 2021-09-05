const INITIAL_STATE = {
    sections: [
      {
        id: 1,
        title: 'Hats',
        routeName: 'shop/hats',
        background: '#FFC107',
        style: 'menu-item',
        backgroundImage: '/Images/hats.jpg'
      },
      {
        id: 3,
        title: 'Jackets',
        routeName: 'shop/jackets',
        background: '#CC313D',
        style: 'menu-item',
        backgroundImage: '/Images/jackets.jpg'
      },
      {
        id: 2,
        title: 'Sneakers',
        routeName: 'shop/sneakers',
        background: '#fc7233',
        style: 'menu-item',
        backgroundImage: '/Images/sneakers.jpg'
      },
      {
        id: 4,
        title: 'Womens',
        routeName: 'shop/womens',
        background: '#FDDB27FF',
        style: 'womens',
        backgroundImage: '/Images/womens.jpg'
      },
      {
        id: 5,
        title: 'Mens',
        routeName: 'shop/mens',
        background: '#00B1D2FF',
        style: 'mens',
        backgroundImage: '/Images/mens.jpg'
      }
    ]
  };
  
  const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default directoryReducer;