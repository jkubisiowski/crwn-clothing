import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAeBVl1CnTbe4_dweoqimicxciQT3LHSl4',
  authDomain: 'crwn-clothing-988ae.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-988ae.firebaseio.com',
  projectId: 'crwn-clothing-988ae',
  storageBucket: '',
  messagingSenderId: '54310999397',
  appId: '1:54310999397:web:f64f25768f9fb9af'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
