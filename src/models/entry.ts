export type Entry = {
	// ? what ID type? -- Check firebase
	id: string;
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
	distanceFromPrag?: number;
};

export type Record = {
	url: string;
	transcript?: string;
	comments?: string;
	urlToNorm?: string;
	otherSources?: string[];
};

export type Details = {
	record?: Record;
	history?: { title: string; text: string }[];
	current?: { title: string; text: string }[];
};

export type Extra = {
	projects?: Media[];
	offers?: string[];
	attractions?: string[];
	resources?: string[];
	contact?: string;
};
