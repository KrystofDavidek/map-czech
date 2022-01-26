export type Feature = {
	type: 'Feature';
	properties: Properties;
	geometry: {
		type: string;
		coordinates: number[] | number[][][];
	};
	id: string;
};

export type FeatureCollection = {
	type: 'FeatureCollection';
	features: Feature[];
};

export type Properties = {
	shape: string;
	radius?: number;
	name: string;
	category: string;
};

export type FirestoreCoords = number[] | FirestorePolygonCoords[];

export type FirestorePolygonCoords = {
	[key: number]: { [key: number]: number };
};

export type FirestoreFeature = {
	type: 'Feature';
	properties: Properties;
	geometry: {
		type: string;
		coordinates: FirestoreCoords;
	};
	id: string;
};
