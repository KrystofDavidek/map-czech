export type Entry = {
	// ? what ID type? -- Check firebase
	id: string;
	location: Location;
	details?: Details;
	media?: {
		images?: DropZone;
		audios?: DropZone;
		videos?: Media[];
		texts?: string;
		others?: string;
	};
	extra?: Extra;
	feature: string;
};

export type DropZone = {
	files: (File | string)[];
	names: { name: string }[];
};

export type Media = { name: string; url: string };

export type Location = {
	mainLocation: string;
	secondaryLocation?: string;
	introImage?: string | File;
	demographic?: string;
};

export type Record = {
	url: string | File;
	transcript?: string;
	comments?: string;
	details?: string;
	otherSources?: string;
};

export type Details = {
	record?: Record;
	history?: string;
	current?: string;
};

export type Extra = {
	projects?: string;
	offers?: string;
	attractions?: string;
	resources?: string;
	contact?: string;
};
