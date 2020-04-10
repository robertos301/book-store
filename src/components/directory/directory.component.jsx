import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'
class Directory extends React.Component{
    constructor(){
        super();
        this.state={
            sections: [{
                title:'Classics',
                imageURL:'https://www.coolcatteacher.com/wp-content/uploads/2016/09/Books-classic-literature-instruction-1.jpg',
                id:1
            },
            {
                title:'Science Fiction',
                imageURL:'https://media.istockphoto.com/photos/alien-spaceship-in-the-universe-spacecraft-flying-in-deep-space-with-picture-id1012823400?k=6&m=1012823400&s=170667a&w=0&h=12TfxjS-doVp20p1nsYdf5-wp2THdPAcjUZMhrHK4mo=',
                id:2
            },
            {
                title:'Fantasy',
                imageURL:'https://cache.desktopnexus.com/thumbseg/2212/2212048-bigthumbnail.jpg',
                id:3
            },
            {
                title:"Fiction",
                imageURL:'https://factsandtrends.net/wp-content/uploads/2018/01/freely-29633.jpg',
                id:4
            },
            {
                title:'Children',
                imageURL:'https://www.letsbegamechangers.com/wp-content/uploads/2018/04/Untitled-1.png',
                id:5
            },
            {
                title:'Self Development',
                imageURL:'https://www.oecd.org/media/oecdorg/directorates/developmentco-operationdirectoratedcd-dac/dcrsection/DCR-SLIDER-profiles-min-min.jpg',
                id:6
            }
        ]
        }
    }

    render(){
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imageURL, id}) => (
                        <MenuItem key={id} title={title} imageURL={imageURL}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;