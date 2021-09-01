import React from 'react';
import DirectoryMenu from '../../Components/DirectoryMenu/DirectoryMenu.component';
import './Homepage.styles.scss'

class Homepage extends React.Component {
    render () {
        return (
            <div className='homepage'>
                <div className='banner-container'>
                <img src={process.env.PUBLIC_URL+'/Images/banner.jpg'} className='banner' alt='banner' />
                </div>
                <div className='directory-menu-container'>
                    <DirectoryMenu />
                </div>
            </div>
        )
    }
}

export default Homepage;