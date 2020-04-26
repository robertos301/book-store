const INITIAL_STATE = {
  sections: [
    {
      title: "Classics",
      imageURL:
        "https://assets.lifesitenews.com/images/made/images/remote/https_www.lifesitenews.com/images/shutterstock/shakespeare_skull_810_500_75_s_c1.jpg",
      id: 1,
      linkURL: "shop/classics",
    },
    {
      title: "Science Fiction",
      imageURL: "https://img.aullidos.com/imagenes/noticias/tw-33600.jpg",
      id: 2,
      linkURL: "shop/sciencefiction",
    },
    {
      title: "Fantasy",
      imageURL:
        "https://i.pinimg.com/originals/b8/6a/e8/b86ae82ebbe13ff78cd1aea3b42e3b89.jpg",
      id: 3,
      linkURL: "shop/fantasy",
    },
    {
      title: "Fiction",
      imageURL:
        "https://d2i5t58cb8fkm0.cloudfront.net/wp-content/uploads/2017/01/19163841/5ThingsThatWillHappenWhenYouReadMoreNonFiction-1024x500.jpg",
      id: 4,
      linkURL: "shop/fiction",
    },

    {
      title: "Self Development",
      imageURL:
        "https://d19d5sz0wkl0lu.cloudfront.net/dims4/default/d475c4d/2147483647/resize/800x%3E/quality/90/?url=https%3A%2F%2Fatd-brightspot.s3.amazonaws.com%2Fcf%2Fbc%2F7aaa39744c52840ec3c2c19cb759%2Foperations-webinar-recap-header-2x.png",
      id: 5,
      linkURL: "shop/selfdevelopment",
    },
    {
      title: "Children",
      imageURL:
        "https://www.thechildrensbookreview.com/wp-content/uploads/2009/07/What-Can-Families-Do-to-Keep-Children-Reading-During-the-Summer.jpg",
      id: 6,
      linkURL: "shop/children",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;