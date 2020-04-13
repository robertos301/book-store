import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';

const MenuItem = ({title, imageURL, history, linkURL, match}) => (
    
            <div  className='menu-item' onClick={()=> history.push(`${match.url}${linkURL}`)}>

            <div className='background-image' style={{
                backgroundImage: `url(${imageURL})`
            }}></div>
            
            <div className='content'>
                    <h1 className='title'>{title.toUpperCase()}</h1>
                    <span className='subtitle'> SHOP NOW</span>
                </div>
            </div>
);

export default withRouter(MenuItem);