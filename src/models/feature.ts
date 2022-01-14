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
