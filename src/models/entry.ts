export type Entry = {
	id: number;
	location: Location;
	details?: Details;
	media?: {
		images?: Media[];
		videos?: Media[];
		audios?: Media[];
		others?: Media[];
	};
	extra?: Extra;
};

export type Media = { name: string; url: string };

export type Location = {
	mainLocation: string;
	secondaryLocation?: string;
	introImage?: string;
	demographic?: string;
	distanceFromCz?: number;
};

export type Details = {
	record?: {
		url: string;
		transcript?: string;
		comments?: string;
		urlToNorms?: string;
		otherSources?: string[];
	};
	history?: { name: string; desc: string }[];
	current?: string[];
};

export type Extra = {
	projects?: Media[];
	offers?: string[];
	attractions?: string[];
	resources?: string[];
	contact?: string;
};
