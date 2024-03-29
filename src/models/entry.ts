import { EntryFilters } from '../contexts/FilterContext';

export type Entry = {
	id: string;
	location: Location;
	details: Details;
	media: {
		copyright: string;
		images: DropZone;
		audios: DropZone;
		videos: Media[];
		texts: string;
		others: string;
	};
	extra: Extra;
	feature: string;
};

export type DropZone = {
	files: string[];
	names: { name: string }[];
};

export type Media = { name: string; url: string };

export type Location = {
	mainLocation: string;
	secondaryLocation: string;
	introImage: string[];
	demographic: string;
	filters: EntryFilters;
};

export type Record = {
	url: string[];
	transcript: string;
	comments: string;
	details: string;
	otherSources: string;
};

export type Details = {
	record: Record;
	history: string;
	current: string;
};

export type Extra = {
	projects: string;
	offers: string;
	attractions: string;
	facts: string;
	resources: string;
	contact: string;
};
