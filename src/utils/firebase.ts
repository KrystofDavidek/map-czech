import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDMPF5r56NNiuWJbxicVXzEWzb5niV9M1c',
	authDomain: 'map-czech.firebaseapp.com',
	projectId: 'map-czech',
	storageBucket: 'map-czech.appspot.com',
	messagingSenderId: '261237999719',
	appId: '1:261237999719:web:ad8c3d9930510d5f15ecc2'
};

const app = initializeApp(firebaseConfig);

// Firestore database
const db = getFirestore();
