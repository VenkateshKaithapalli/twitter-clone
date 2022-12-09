
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyCwYbvtNRWuBc39ql3jefdIzom3fmPYMEM",
	authDomain: "twitter-clone-fe735.firebaseapp.com",
	projectId: "twitter-clone-fe735",
	storageBucket: "twitter-clone-fe735.appspot.com",
	messagingSenderId: "89238391408",
	appId: "1:89238391408:web:7f6b748429c0b2888ec2b5"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

export default db;







