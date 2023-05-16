import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBOO1s0WYksAtOKE3JOf1eaZ99ttnRiRY8',
  authDomain: 'newsletter-df797.firebaseapp.com',
  databaseURL: 'https://newsletter-df797-default-rtdb.firebaseio.com',
  projectId: 'newsletter-df797',
  storageBucket: 'newsletter-df797.appspot.com',
  messagingSenderId: '815467522119',
  appId: '1:815467522119:web:acf56c8386699a9cc82962',
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();
