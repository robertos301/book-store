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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
