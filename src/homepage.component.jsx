import React from 'react';
import './homepage.styles.scss';
const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Classics</h1>
                    <span className='subtitle'> SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Science Fiction</h1>
                    <span className='subtitle'> SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Fantasy</h1>
                    <span className='subtitle'> SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Fiction</h1>
                    <span className='subtitle'> SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Self Development</h1>
                    <span className='subtitle'> SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;