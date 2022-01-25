import { initializeApp } from 'firebase/app';
import {
	addDoc,
	collection,
	doc,
	DocumentSnapshot,
	getDoc,
	getFirestore,
	setDoc,
	updateDoc
} from 'firebase/firestore';

import { Entry } from '../models/entry';
import { Feature } from '../models/feature';

const firebaseConfig = {
	apiKey: 'AIzaSyDMPF5r56NNiuWJbxicVXzEWzb5niV9M1c',
	authDomain: 'map-czech.firebaseapp.com',
	projectId: 'map-czech',
	storageBucket: 'map-czech.appspot.com',
	messagingSenderId: '261237999719',
	appId: '1:261237999719:web:ad8c3d9930510d5f15ecc2'
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const addNewEntry = async (entry: Entry) => {
	try {
		const feature: Feature = JSON.parse(entry.feature) as Feature;

		if (entry.id) {
			await setDoc(doc(db, 'entries', entry.id), entry);
			await setDoc(doc(db, 'features', entry.id), feature);
		} else {
			const docRef = await addDoc(collection(db, 'entries'), entry);
			await updateDoc(docRef, {
				id: docRef.id
			});
			await setDoc(doc(db, 'features', docRef.id), feature);
		}
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

export const getEntry = async (id: string) => {
	const snapshot = (await getDoc(
		doc(db, 'entries', id)
	)) as DocumentSnapshot<Entry>;
	if (snapshot.exists()) {
		return snapshot.data();
	} else {
		return Promise.reject(Error(`No such document: ${id}`));
	}
};

export const documentExist = async (collection: string, id: string) => {
	const snapshot = (await getDoc(doc(db, collection, id))) as DocumentSnapshot;
	return !!snapshot.exists();
};
