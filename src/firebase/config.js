import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAkEBYNOY8urEGTcaFAemyIH00tSLhF6zs",
  authDomain: "instagram-7f212.firebaseapp.com",
  databaseURL: "https://instagram-7f212.firebaseio.com",
  projectId: "instagram-7f212",
  storageBucket: "instagram-7f212.appspot.com",
  messagingSenderId: "233454180639",
  appId: "1:233454180639:web:588433cb8f194e0269382a",
  measurementId: "G-L3MMNWK8WF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;
//timestamp từ firestore

export { projectFirestore, projectStorage, timestamp };
