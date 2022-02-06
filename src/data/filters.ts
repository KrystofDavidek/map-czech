export type Filter = {
	name: string;
	values: string[];
};

export type FilterKeys =
	| 'arrivalTimes'
	| 'extinctionPeriod'
	| 'communitySize'
	| 'dialectBase'
	| 'numOfGenerations'
	| 'motivation'
	| 'existMedia'
	| 'religion'
	| 'reemigration'
	| 'typeOfEmigration';

export type Filters = {
	arrivalTimes: Filter;
	extinctionPeriod: Filter;
	communitySize: Filter;
	dialectBase: Filter;
	numOfGenerations: Filter;
	motivation: Filter;
	existMedia: Filter;
	religion: Filter;
	reemigration: Filter;
	typeOfEmigration: Filter;
};

export const filters: Filters = {
	arrivalTimes: {
		name: 'Doba příchodu česky mluvících osob',
		values: [
			'1550-1620',
			'1620–1700',
			'1700-1800',
			'1800-1850',
			'1850-1914',
			'1914-1930',
			'po 1939',
			'po 1989'
		]
	},
	extinctionPeriod: {
		name: 'Doba zániku',
		values: [
			'před 1620',
			'před 1700',
			'v 18. století',
			'v 19. století',
			'v 1. pol. 20. stol',
			've 2. pol. 20. stol',
			'2000-současnost'
		]
	},
	communitySize: {
		name: 'Velikost komunity',
		values: [
			'méně než 10',
			'10-50',
			'více než 50',
			'více než 500',
			'více než 10 000',
			'více než 50 000'
		]
	},
	dialectBase: {
		name: 'Převládající nářeční základ',
		values: [
			'městská mluva',
			'severovýchodočeská skupina',
			'středočeská',
			'jzč.',
			'střmor.',
			'výchmor.',
			'laš.',
			'českomoravská'
		]
	},
	numOfGenerations: {
		name: 'Počet generací, po které se čeština uchovala',
		values: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
	},
	motivation: {
		name: 'Převládající motivace pro emigraci z českých zemí',
		values: [
			'náboženská (cca do 1850)',
			'hospodářská (1820-1939, po 1989)',
			'politická (zejm. po 1939-1989)'
		]
	},
	existMedia: {
		name: 'Existuje audiomateriál nebo písemná dokumentace jazyka?',
		values: ['ano', 'ne']
	},
	religion: {
		name: 'Převládající náboženství ',
		values: ['protestantská komunita', 'katolická', 'bez vyznání', 'nezjištěno']
	},
	reemigration: {
		name: 'Komunity, odkud je zaznamenána reemigrace',
		values: ['po 1. světové válce', 'po 2. světové válce']
	},
	typeOfEmigration: {
		name: 'Typ migrace',
		values: ['primární', 'sekundární', 'další migrace']
	}
};
