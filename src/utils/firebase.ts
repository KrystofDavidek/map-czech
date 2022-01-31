import { initializeApp } from 'firebase/app';
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	DocumentSnapshot,
	getDoc,
	getDocs,
	getFirestore,
	QuerySnapshot,
	setDoc,
	updateDoc
} from 'firebase/firestore';
import {
	deleteObject,
	getDownloadURL,
	getStorage,
	ref,
	uploadBytes
} from 'firebase/storage';

import { Entry } from '../models/entry';
import {
	Feature,
	FirestoreCoords,
	FirestoreFeature,
	FirestorePolygonCoords
} from '../models/feature';

const firebaseConfig = {
	apiKey: 'AIzaSyDMPF5r56NNiuWJbxicVXzEWzb5niV9M1c',
	authDomain: 'map-czech.firebaseapp.com',
	projectId: 'map-czech',
	storageBucket: 'map-czech.appspot.com',
	messagingSenderId: '261237999719',
	appId: '1:261237999719:web:ad8c3d9930510d5f15ecc2'
};

const app = initializeApp(firebaseConfig);
const storage = getStorage();
const db = getFirestore();

export const deleteEntry = async (id: string) => {
	await deleteDoc(doc(db, 'entries', id));
	await deleteDoc(doc(db, 'features', id));
};

const getArrayDepth = (obj: any): number => {
	if (Array.isArray(obj))
		return 1 + Math.max(...obj.map(t => getArrayDepth(t)));
	else return 0;
};

const serialize = (feature: Feature): FirestoreFeature => {
	if (feature.geometry.coordinates) {
		if (getArrayDepth(feature.geometry.coordinates) === 1) {
			return feature as FirestoreFeature;
		} else {
			const coords: FirestoreCoords = [{}];
			const oldCoords = feature.geometry.coordinates as number[][][];
			oldCoords[0].forEach((coord, i) => {
				coords[0][i] = { 0: coord[0], 1: coord[1] };
			});
			return {
				...feature,
				geometry: { ...feature.geometry, coordinates: coords }
			};
		}
	} else {
		return {} as FirestoreFeature;
	}
};

const deSerialize = (feature: FirestoreFeature): Feature => {
	if (feature.geometry.coordinates) {
		if (Number(feature.geometry.coordinates[0])) {
			return feature as Feature;
		} else {
			const coords: number[][][] = [[]];
			const oldCoords = feature.geometry
				.coordinates as FirestorePolygonCoords[];
			Object.keys(oldCoords[0]).forEach((_value, index) => {
				coords[0].push(Object.values(oldCoords[0][index]));
			});
			return {
				...feature,
				geometry: { ...feature.geometry, coordinates: coords }
			};
		}
	} else {
		return {} as Feature;
	}
};

export const uploadFile = async (file: File) => {
	try {
		const storageRef = ref(storage, file.name);
		await uploadBytes(storageRef, file);
	} catch (e) {
		console.error('Error uploading file: ', e);
	}
};

export const fileExist = async (file: string) => {
	try {
		const url = await getDownloadURL(ref(storage, file));
		return !!url;
		// eslint-disable-next-line no-empty
	} catch (e) {}
};

export const deleteFile = async (file: string | File) => {
	try {
		let storageRef;
		if (file instanceof File) {
			storageRef = ref(storage, file.name);
		} else {
			storageRef = ref(storage, file);
		}
		await deleteObject(storageRef);
	} catch (e) {
		console.error('Error deleting file: ', e);
	}
};

export const getFilePath = (name: string | undefined) => {
	if (name) {
		try {
			return getDownloadURL(ref(storage, name));
		} catch (e) {
			console.error('Error getting file path: ', e);
		}
	}
};

export const addNewEntry = async (entry: Entry) => {
	const feature: Feature = JSON.parse(entry.feature) as Feature;
	const firestoreFeature: FirestoreFeature = serialize(feature);
	if (entry.id) {
		firestoreFeature.id = entry.id;
		await setDoc(doc(db, 'entries', entry.id), entry);
		await setDoc(doc(db, 'features', entry.id), firestoreFeature);
	} else {
		const docRef = await addDoc(collection(db, 'entries'), entry);
		firestoreFeature.id = docRef.id;
		await updateDoc(docRef, {
			id: docRef.id
		});
		await setDoc(doc(db, 'features', docRef.id), firestoreFeature);
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

export const getAllFeatures = async () => {
	const features: Feature[] = [];
	const querySnapshot = (await getDocs(
		collection(db, 'features')
	)) as QuerySnapshot<Feature>;
	querySnapshot.forEach(doc => {
		features.push(deSerialize(doc.data()));
	});
	return features;
};

export const documentExist = async (collection: string, id: string) => {
	const snapshot = (await getDoc(doc(db, collection, id))) as DocumentSnapshot;
	return !!snapshot.exists();
};
