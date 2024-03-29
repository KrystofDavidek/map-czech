import { defaultFilterState } from '../contexts/FilterContext';
import { Details, Entry } from '../models/entry';

import { filters } from './filters';

const mockDetails: Details = {
	record: {
		url: [''],
		transcript: 'Měl jsem velkou žízeň',
		comments:
			'Occaecat velit et nulla exercitation enim elit sit eiusmod sunt proident fugiat labore enim minim. Nostrud ut nisi proident do. In laboris enim aliquip fugiat elit eu anim minim mollit quis.',
		details:
			'Aliquip Lorem enim ad Lorem nulla. Velit veniam minim laboris minim elit incididunt consequat commodo enim quis mollit exercitation esse consectetur. Dolor id exercitation exercitation ad anim cillum aute reprehenderit aliqua dolor veniam commodo laborum. Reprehenderit aute non culpa cupidatat. Id deserunt enim in ut nostrud aliquip deserunt adipisicing et eiusmod pariatur nulla. Laborum ad magna aliquip reprehenderit deserunt aliquip. https://static1.squarespace.com/static/5c69bfa4f4e531370e74fa44/t/5c7564cdf4e1fc3d9a738bba/1551197556163/CompleteGreek.pdf',
		otherSources:
			'https://cs.wikipedia.org/wiki/Transkripce_(lingvistika), https://cs.wikipedia.org/wiki/%C5%98eck%C3%A9_p%C3%ADsmo'
	},
	history: `<h2>Nadpis</h2><p>Tohle je upravený <strong>text</strong>.</p><p>Tohle je odkaz – odkaz&nbsp;</p><h2>Nadpis 2</h2><p>Aliquip Lorem enim ad Lorem nulla. Velit veniam minim laboris minim elit incididunt consequat commodo enim quis mollit exercitation esse consectetur. Dolor id exercitation exercitation ad anim cillum aute reprehenderit aliqua dolor veniam commodo laborum. Reprehenderit aute non culpa cupidatat. Id deserunt enim in ut nostrud aliquip deserunt adipisicing et eiusmod pariatur nulla. Laborum ad magna aliquip reprehenderit deserunt aliquip.</p><ul><li>prvn9 bod</li><li>dryhu bod&nbsp;</li><li>treti bod</li></ul>`,
	current: `<h2>Nadpis</h2><p>Tohle je upravený <strong>text</strong>.</p><p>Tohle je odkaz – odkaz&nbsp;</p><h2>Nadpis 2</h2><p>Aliquip Lorem enim ad Lorem nulla. Velit veniam minim laboris minim elit incididunt consequat commodo enim quis mollit exercitation esse consectetur. Dolor id exercitation exercitation ad anim cillum aute reprehenderit aliqua dolor veniam commodo laborum. Reprehenderit aute non culpa cupidatat. Id deserunt enim in ut nostrud aliquip deserunt adipisicing et eiusmod pariatur nulla. Laborum ad magna aliquip reprehenderit deserunt aliquip.</p><ul><li>prvn9 bod</li><li>dryhu bod&nbsp;</li><li>treti bod</li></ul>`
};

const mockEntry: Entry = {
	id: '',
	location: {
		mainLocation: 'Praha',
		secondaryLocation: 'Czech Republic',
		introImage: [''],
		demographic: 'Počet obyvatel:	382 405 (2021)',
		filters: {
			arrivalTimes: ['1550-1620'],
			extinctionPeriod: ['před 1620'],
			communitySize: ['méně než 10'],
			dialectBase: ['městská mluva'],
			numOfGenerations: ['1'],
			motivation: ['náboženská (cca do 1850)'],
			existMedia: ['ano'],
			religion: ['protestantská komunita'],
			reemigration: ['po 1. světové válce'],
			typeOfEmigration: ['primární']
		}
	},
	details: mockDetails,
	media: {
		copyright:
			'Minim irure ut voluptate fugiat cillum exercitation enim proident quis laboris est. Consectetur sint anim deserunt non irure ex.',
		images: { files: [], names: [] },
		texts:
			'Editované dopisy, In sit in laboris ullamco fugiat deserunt. Fugiat sunt ea sint duis aliqua cupidatat dolore ut pariatur cupidatat cillum sint cillum consectetur. Ut qui id pariatur cupidatat ipsum amet proident deserunt commodo occaecat enim. Veniam nisi incididunt minim minim pariatur excepteur. Eiusmod laborum ea dolore aliquip incididunt.',
		videos: [
			{
				name: 'O Brně',
				url: 'https://www.youtube.com/watch?v=mxoJE93DNzg&ab_channel=Lily%27sChannel-Aroundtheworld'
			},
			{
				name: 'O Brně',
				url: 'https://www.youtube.com/watch?v=mxoJE93DNzg&ab_channel=Lily%27sChannel-Aroundtheworld'
			},
			{
				name: 'O Brně',
				url: 'https://www.youtube.com/watch?v=mxoJE93DNzg&ab_channel=Lily%27sChannel-Aroundtheworld'
			}
		],
		audios: {
			files: [],
			names: []
		},
		others:
			'Paměť národa – Anastasie Vondra https://www.pametnaroda.cz/cs/vondra-anastasie-1937'
	},
	extra: {
		projects:
			'Paměť národa – Anastasie Vondra https://www.pametnaroda.cz/cs/vondra-anastasie-1937',
		offers:
			'Minim irure ut voluptate fugiat cillum exercitation enim proident quis laboris est. Consectetur sint anim deserunt non irure ex.',
		attractions:
			'Minim irure ut voluptate fugiat cillum exercitation enim proident quis laboris est. Consectetur sint anim deserunt non irure ex.',
		facts:
			'Minim irure ut voluptate fugiat cillum exercitation enim proident quis laboris est. Consectetur sint anim deserunt non irure ex.',
		resources:
			'ECO, Umberto. Jak napsat diplomovou práci. Přeložil Ivan Seidl. Olomouc: Votobia, 1997. Velká řada, sv. 27. ISBN 80-7198-173-7 KOTLER, Philip a ARMSTRONG, Gary, 1997. Marketing: an introduction. 4th ed. Upper Saddle River: Prentice-Hall International. ISBN 0-13-263120-2.',

		contact: 'Kryštof Davídek, e-mail: kry.davidek@gmail.com'
	},
	feature: `{
		type: 'Feature',
		properties: {
			shape: 'Polygon',
			name: 'Unnamed Layer',
			category: 'default'
		},
		geometry: {
			type: 'Polygon',
			coordinates: [
				[
					[16.566353, 49.265788],
					[16.521378, 49.240466],
					[16.504211, 49.211318],
					[16.496315, 49.175195],
					[16.566353, 49.137249],
					[16.656303, 49.137249],
					[16.700249, 49.175419],
					[16.700249, 49.237328],
					[16.566353, 49.265788]
				]
			]
		},
		id: '391fa1d1-4210-454f-abce-5f67fbda5c22'
	}`
};

const defaultDetails: Details = {
	record: {
		url: [''],
		transcript: '',
		comments: '',
		details: '',
		otherSources: ''
	},
	history: ``,
	current: ``
};

const defaultEntry: Entry = {
	id: '',
	location: {
		mainLocation: '',
		secondaryLocation: '',
		introImage: [],
		demographic: '',
		filters: defaultFilterState
	},
	details: defaultDetails,
	media: {
		copyright: '',
		images: { files: [], names: [] },
		texts: '',
		videos: [],
		audios: {
			files: [],
			names: []
		},
		others: ''
	},
	extra: {
		projects: '',
		offers: '',
		attractions: '',
		facts: '',
		resources: '',

		contact: ''
	},
	feature: ``
};

export { mockEntry, defaultEntry, filters };
