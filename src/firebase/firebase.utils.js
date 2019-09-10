import firebase from "firebase";
require("firebase/auth");
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBzSMmj69oGJ-0aCAf7cgA6-G6TkSxto0Q",
  authDomain: "bad-clothing-db.firebaseapp.com",
  databaseURL: "https://bad-clothing-db.firebaseio.com",
  projectId: "bad-clothing-db",
  storageBucket: "",
  messagingSenderId: "964788585054",
  appId: "1:964788585054:web:44a3c5bc74d646ddbf6acf"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
