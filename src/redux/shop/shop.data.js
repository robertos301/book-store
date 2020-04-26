const SHOP_DATA = {
  classics: {
    id: 1,
    title: 'Classics',
    routeName: 'classics',
    items: [
      {
        id: 1,
        name: '1984',
        imageUrl: 'https://m.media-amazon.com/images/I/51ueoexgYqL.jpg',
        price: 25
      },
      {
        id: 2,
        name: 'Pride and Prejudice',
        imageUrl: 'https://whitcoulls-co-nz.imgix.net/products/17/15/6381517_MAIN~1552017581.jpg?w=416&h=620&fit=fill&auto=format&fill=solid&fill-color=ffffff&s=9fc84288f9128c788ff036d67e5e7a61',
        price: 18
      },
      {
        id: 3,
        name: 'The picture of dorian gray',
        imageUrl: 'https://hanabooktopia.com/wp-content/uploads/2020/02/Screenshot_2020-02-21-English-Classics-The-Picture-of-Dorian-Gray-Gramedia-Pustaka-Utama.png',
        price: 35
      },
      {
        id: 4,
        name: 'One Hundred Years of Solitude',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/6152SClqZ6L._SX318_BO1,204,203,200_.jpg',
        price: 25
      },
      {
        id: 5,
        name: 'War and Peace',
        imageUrl: 'https://images.penguinrandomhouse.com/cover/9781400079988',
        price: 18
      },
      {
        id: 6,
        name: 'Anna Karenina',
        imageUrl: 'https://pictures.abebooks.com/isbn/9781582881058-uk.jpg',
        price: 14
      },
      {
        id: 7,
        name: 'The Red and the Black',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51aMogAGExL._SX384_BO1,204,203,200_.jpg',
        price: 18
      },
      {
        id: 8,
        name: 'The Catcher in the Rye',
        imageUrl: 'https://wordery.com/jackets/e6c04264/m/the-catcher-in-the-rye-j-d-salinger-9780241950425.jpg',
        price: 14
      },
      {
        id: 9,
        name: 'To Kill a Mockingbird',
        imageUrl: 'https://prodimage.images-bn.com/pimages/9780446310789_p0_v6_s1200x630.jpg',
        price: 16
      }
    ]
  },
  sciencefiction:{
    id: 2,
    title: 'Science Fiction',
    routeName: 'sciencefiction',
    items: [
      {
        id: 10,
        name: 'Red Rising',
        imageUrl: 'https://cdn.dc5.ro/img-prod/264762-0.jpeg',
        price: 26
      },
      {
        id: 11,
        name: 'Skyward',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91WalCe0LyL.jpg',
        price: 32
      },
      {
        id: 12,
        name: 'Artemis',
        imageUrl: 'https://images.squarespace-cdn.com/content/5459265fe4b003569098a14f/1517614972282-Y8TB0VL7V32FF0BSHB5Y/artemis.jpg?content-type=image%2Fjpeg',
        price: 14
      },
      {
        id: 13,
        name: 'Metro 2033',
        imageUrl: 'https://i0.books-express.ro/be/9780575086258/metro-2033.jpg',
        price: 23
      },
      {
        id: 14,
        name: 'Neuromancer',
        imageUrl: 'https://ryanyarber.files.wordpress.com/2017/11/neuromancer.jpg?w=615',
        price: 20
      },
      {
        id: 15,
        name: 'Ready Player One',
        imageUrl: 'https://images.penguinrandomhouse.com/cover/9780804190138',
        price: 14
      },
      {
        id: 16,
        name: 'Dune',
        imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555447414l/44767458.jpg',
        price: 30
      },
      {
        id: 17,
        name: 'Dark Age',
        imageUrl: 'https://i1.books-express.ro/be/9781473646766/dark-age.jpg',
        price: 25
      }
    ]
  },
  fantasy:{
    id: 3,
    title: 'Fantasy',
    routeName: 'fantasy',
    items: [
      {
        id: 18,
        name: 'Lord of the RIngs',
        imageUrl: 'https://www.itprojektid.ee/testulesanne/wp/martin-raba/wp-content/uploads/2017/10/lord.jpg',
        price: 15
      },
      {
        id: 19,
        name: 'A Game of Thrones',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81q1AybR-ZL.jpg',
        price: 25
      },
      {
        id: 20,
        name: 'The Way of Kings',
        imageUrl: 'https://i2.books-express.ro/be/9780765365279/the-way-of-kings.jpg',
        price: 33
      },
      {
        id: 21,
        name: 'Mistborn',
        imageUrl: 'https://i3.books-express.ro/be/9780765377135/mistborn.jpg',
        price: 16
      },
      {
        id: 22,
        name: 'Blood of Elves',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51bcWeEIMwL._SX298_BO1,204,203,200_.jpg',
        price: 25
      },
      {
        id:36,
        name: 'The Name of the Wind',
        imageUrl: 'https://i0.books-express.ro/be/9780575081406/the-name-of-the-wind.jpg',
        price: 31
      },
      {
        id:37,
        name: 'The Gunslinger',
        imageUrl:'https://covers.openlibrary.org/b/id/8397487-L.jpg',
        price: 22
      }
    ]
  },
  fiction:{
    id: 4,
    title: 'Fiction',
    routeName: 'fiction',
    items: [
      {
        id: 23,
        name: '1Q84',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71OQmqENFgL.jpg',
        price: 25
      },
      {
        id: 24,
        name: 'The Humans',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51-vBpG1ztL._SX324_BO1,204,203,200_.jpg',
        price: 20
      },
      {
        id: 25,
        name: 'American Gods',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51Pb-OAREFL._SX327_BO1,204,203,200_.jpg',
        price: 42
      },
      {
        id: 26,
        name: 'Station Eleven',
        imageUrl: 'https://mcdn.elefant.ro/mnresize/1500/1500/images/86/1213786/station-eleven-hardcover_1_fullsize.jpg',
        price: 32
      },
      {
        id: 27,
        name: 'All the Light We Cannot See',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81v5wp2zeQL.jpg',
        price: 27
      },
      {
        id: 28,
        name: 'Brave New World',
        imageUrl: 'https://ih0.redbubble.net/image.349104734.5875/flat,550x550,075,f.jpg',
        price: 15
      },
      {
        id: 29,
        name: 'Norwegian Wood',
        imageUrl: 'https://mcdn.elefant.ro/mnresize/1500/1500/is/product-images/cartero/a146d56c/0e0f/4264/b124/fb7a750f72f6/a146d56c-0e0f-4264-b124-fb7a750f72f6_1.jpg',
        price: 20
      }
    ]
  },
 selfdevelopment: {
    id: 5,
    title: 'Self Development',
    routeName: 'selfdevelopment',
    items: [
      {
        id: 30,
        name: 'Emotional Intelligence',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81boBok4oJL.jpg',
        price: 25
      },
      {
        id: 31,
        name: 'How to Win Friends and Influence People',
        imageUrl: 'https://i0.books-express.ro/be/9780091906351/how-to-win-friends-and-influence-people.jpg',
        price: 20
      },
      {
        id: 32,
        name: 'The Power of Habit',
        imageUrl: 'https://i4.books-express.ro/be/9781847946249/the-power-of-habit.jpg',
        price: 25
      },
      {
        id: 33,
        name: 'Mindset',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81dzW8COWCL.jpg',
        price: 25
      },
      {
        id: 34,
        name: 'The Power of Now',
        imageUrl: 'https://www.dubraybooks.ie/images/thumbs/008/0082932_9780340733509_625.jpeg',
        price: 40
      },
      {
        id: 35,
        name: 'Ego is the Enemy',
        imageUrl: 'https://i2.books-express.ro/be/9781781257029/ego-is-the-enemy.jpg',
        price: 25
      }
    ]
  },
  children: {
    id:6,
    title:'Children',
    routeName:'children',
    items:[
      {
        id:38,
        name:'Atlas of the World - Pictures',
        imageUrl:'https://usborne-media.azureedge.net/cdn-imagecache/4/e/9/8/e/2/4e98e25dab52aeaeee58fde8e6c2748e514178a3.jpg',
        price: 18
      },
      {
        id:39,
        name:'Hey Warrior',
        imageUrl:'https://www.heysigmund.com/wp-content/uploads/Hey-Warrior-Title-for-Website-800x1044.png',
        price: 20
      },
      {
        id:40,
        name:'The Happy Lemon',
        imageUrl:'https://marketplace.canva.com/EADaiDo2aSo/1/0/1003w/canva-yellow-lemon-children-book-cover-cse6GBuXy78.jpg',
        price: 24
      },
      {
        id:42,
        name:'The Railway Children',
        imageUrl:'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1413/9780141321608.jpg',
        price: 16
      },
      {
       id:43,
       name:'Wonder',
       imageUrl:'https://images.squarespace-cdn.com/content/v1/5bb74928d86cc9740786f3a5/1552259999423-C1WCARMEJQKGW0XO2QZI/ke17ZwdGBToddI8pDm48kOKg-tW4Gl9JcdMFs16rnLRZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHhJnhISClUI9cxXW2oae7AfeH-uJN30JXrywMMdx45flCjiIQTTnXuXft9IwGL6S4/image-3.jpg',
        price:23
      }
    ]
  }
};

export default SHOP_DATA;
