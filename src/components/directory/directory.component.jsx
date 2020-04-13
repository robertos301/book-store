import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "Classics",
          imageURL:
            "https://assets.lifesitenews.com/images/made/images/remote/https_www.lifesitenews.com/images/shutterstock/shakespeare_skull_810_500_75_s_c1.jpg",
          id: 1,
          linkURL:'classics'
        },
        {
          title: "Science Fiction",
          imageURL: "https://img.aullidos.com/imagenes/noticias/tw-33600.jpg",
          id: 2,
          linkURL:''
        },
        {
          title: "Fantasy",
          imageURL:
            "https://i.pinimg.com/originals/b8/6a/e8/b86ae82ebbe13ff78cd1aea3b42e3b89.jpg",
          id: 3,
          linkURL:''
        },
        {
          title: "Fiction",
          imageURL:
            "https://d2i5t58cb8fkm0.cloudfront.net/wp-content/uploads/2017/01/19163841/5ThingsThatWillHappenWhenYouReadMoreNonFiction-1024x500.jpg",
          id: 4,
          linkURL:''
        },

        {
          title: "Self Development",
          imageURL:
            "https://d19d5sz0wkl0lu.cloudfront.net/dims4/default/d475c4d/2147483647/resize/800x%3E/quality/90/?url=https%3A%2F%2Fatd-brightspot.s3.amazonaws.com%2Fcf%2Fbc%2F7aaa39744c52840ec3c2c19cb759%2Foperations-webinar-recap-header-2x.png",
          id: 5,
          linkURL:''
        },
        {
          title: "Children",
          imageURL:
            "https://www.thechildrensbookreview.com/wp-content/uploads/2009/07/What-Can-Families-Do-to-Keep-Children-Reading-During-the-Summer.jpg",
          id: 6,
          linkURL:''
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({  id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps}/>
        ))}
      </div>
    );
  }
}

export default Directory;
