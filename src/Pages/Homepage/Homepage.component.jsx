import React from 'react';
import DirectoryMenu from '../../Components/DirectoryMenu/DirectoryMenu.component';
import './Homepage.styles.scss';

class Homepage extends React.Component {
    render () {
        return (
            <div className='homepage'>
                <div className='banner-container'>
                <img src={process.env.PUBLIC_URL+'/Images/banner.jpg'} alt='banner' className='banner' />
                </div>
                <div className='directory-menu-container'>
                    <DirectoryMenu />
                </div>
                <div className='filler' />
            </div>
        )
    }
}

export default Homepage;