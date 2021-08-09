import React from 'react';
import DirectoryMenu from '../../Components/DirectoryMenu/DirectoryMenu.component';
import { Banner, BannerContainer, Filler } from './Homepage.styles';

class Homepage extends React.Component {
    render () {
        return (
            <div className='homepage'>
                <BannerContainer>
                <Banner src={process.env.PUBLIC_URL+'/Images/banner.jpg'} alt='banner' />
                </BannerContainer>
                <div className='directory-menu-container'>
                    <DirectoryMenu />
                </div>
                <Filler />
            </div>
        )
    }
}

export default Homepage;