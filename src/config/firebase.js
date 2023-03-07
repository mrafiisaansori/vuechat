import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNC6cEljGG98PjaOXd_pv-XRpeeGTlGTA",
  authDomain: "vuechat-4ea3d.firebaseapp.com",
  projectId: "vuechat-4ea3d",
  storageBucket: "vuechat-4ea3d.appspot.com",
  messagingSenderId: "187224398965",
  appId: "1:187224398965:web:6ae0cedd4f1898acbb2c3c",
  measurementId: "G-W4SN7D8X5W"
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export{ projectAuth,projectFirestore,timestamp }