import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyCrIDnAVDhF77QLgxC-d4rJg987EhjwLrs",
  authDomain: "book-store-e2194.firebaseapp.com",
  databaseURL: "https://book-store-e2194.firebaseio.com",
  projectId: "book-store-e2194",
  storageBucket: "book-store-e2194.appspot.com",
  messagingSenderId: "52694274245",
  appId: "1:52694274245:web:b62099aeaf1b5f155be0ac",
  measurementId: "G-64JRCZW0QK",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  

  const snapShot = await userRef.get();
  

  //check if the data is present in the database, if no, create a new data
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  
  const batch = firestore.batch();
  objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc(obj.title);
   //generates a document inside the collection with an unique id
   batch.set(newDocRef, obj);
});

  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map( doc => {
    const {title, items} = doc.data();

    return{
      routeName: encodeURI(title.toLowerCase().trim()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCollection.reduce( (accumulator, collection)=>{
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
};

export const getCurrentUser = () => {
  return new Promise ((resolve, reject) =>{
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
