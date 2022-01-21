import { Details, Entry } from '../models/entry';

import featuresJson from './mockFeatures.json';

const mockDetails: Details = {
	record: {
		url: 'brno.mp3',
		transcript: 'Měl jsem velkou žízeň',
		comments:
			'Occaecat velit et nulla exercitation enim elit sit eiusmod sunt proident fugiat labore enim minim. Nostrud ut nisi proident do. In laboris enim aliquip fugiat elit eu anim minim mollit quis.',
		urlToNorm:
			'https://static1.squarespace.com/static/5c69bfa4f4e531370e74fa44/t/5c7564cdf4e1fc3d9a738bba/1551197556163/CompleteGreek.pdf',
		details:
			'Aliquip Lorem enim ad Lorem nulla. Velit veniam minim laboris minim elit incididunt consequat commodo enim quis mollit exercitation esse consectetur. Dolor id exercitation exercitation ad anim cillum aute reprehenderit aliqua dolor veniam commodo laborum. Reprehenderit aute non culpa cupidatat. Id deserunt enim in ut nostrud aliquip deserunt adipisicing et eiusmod pariatur nulla. Laborum ad magna aliquip reprehenderit deserunt aliquip.',
		otherSources: [
			'https://cs.wikipedia.org/wiki/Transkripce_(lingvistika)',
			'https://cs.wikipedia.org/wiki/%C5%98eck%C3%A9_p%C3%ADsmo'
		]
	},
	history: `<h2>Nadpis</h2><p>Tohle je upravený <strong>text</strong>.</p><p>Tohle je odkaz – odkaz&nbsp;</p><h2>Nadpis 2</h2><p>Aliquip Lorem enim ad Lorem nulla. Velit veniam minim laboris minim elit incididunt consequat commodo enim quis mollit exercitation esse consectetur. Dolor id exercitation exercitation ad anim cillum aute reprehenderit aliqua dolor veniam commodo laborum. Reprehenderit aute non culpa cupidatat. Id deserunt enim in ut nostrud aliquip deserunt adipisicing et eiusmod pariatur nulla. Laborum ad magna aliquip reprehenderit deserunt aliquip.</p><ul><li>prvn9 bod</li><li>dryhu bod&nbsp;</li><li>treti bod</li></ul>`,
	current: `<h2>Nadpis</h2><p>Tohle je upravený <strong>text</strong>.</p><p>Tohle je odkaz – odkaz&nbsp;</p><h2>Nadpis 2</h2><p>Aliquip Lorem enim ad Lorem nulla. Velit veniam minim laboris minim elit incididunt consequat commodo enim quis mollit exercitation esse consectetur. Dolor id exercitation exercitation ad anim cillum aute reprehenderit aliqua dolor veniam commodo laborum. Reprehenderit aute non culpa cupidatat. Id deserunt enim in ut nostrud aliquip deserunt adipisicing et eiusmod pariatur nulla. Laborum ad magna aliquip reprehenderit deserunt aliquip.</p><ul><li>prvn9 bod</li><li>dryhu bod&nbsp;</li><li>treti bod</li></ul>`
};

const mockEntry: Entry = {
	id: '63ed34d4-58d0-46bf-aa75-f9db0f89bfc5',
	location: {
		mainLocation: 'Brno',
		secondaryLocation: 'Czech Republic',
		introImage: 'zelny-trh.jpeg',
		demographic: 'Počet obyvatel:	382 405 (2021)',
		distanceFromPrag: 186.67
	},
	details: mockDetails,
	media: {
		images: [
			{ name: 'Mapa Brna', url: 'brno.png' },
			{ name: 'Zelný trh', url: 'zelny-trh.jpeg' },
			{ name: 'Petrov', url: 'petrov.png' },
			{ name: 'Hrad Špilberg', url: 'spilas.jpeg' }
		],
		texts: [
			{
				title: 'Editované dopisy',
				text: 'In sit in laboris ullamco fugiat deserunt. Fugiat sunt ea sint duis aliqua cupidatat dolore ut pariatur cupidatat cillum sint cillum consectetur. Ut qui id pariatur cupidatat ipsum amet proident deserunt commodo occaecat enim. Veniam nisi incididunt minim minim pariatur excepteur. Eiusmod laborum ea dolore aliquip incididunt.'
			},
			{
				title: 'Kroniky',
				text: `Mollit adipisicing pariatur exercitation labore nisi. Id nulla minim tempor ipsum et non ex nisi culpa.\nVeniam non qui ipsum qui est voluptate dolor commodo.`
			},
			{
				title: 'Úryvky',
				text: 'Consectetur Lorem sit eu aliqua.'
			}
		],
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
		audios: [
			{
				name: 'Nářečí',
				url: 'brno.mp3'
			},
			{
				name: 'Nářečí',
				url: 'brno.mp3'
			},
			{
				name: 'Nářečí',
				url: 'brno.mp3'
			}
		],
		others: [
			{
				name: 'Paměť národa – Anastasie Vondra',
				url: 'https://www.pametnaroda.cz/cs/vondra-anastasie-1937'
			}
		]
	},
	extra: {
		projects: [
			{
				name: 'Paměť národa – Anastasie Vondra',
				url: 'https://www.pametnaroda.cz/cs/vondra-anastasie-1937'
			}
		],
		offers: [
			'Minim irure ut voluptate fugiat cillum exercitation enim proident quis laboris est.',
			'Consectetur sint anim deserunt non irure ex.'
		],
		attractions: [
			'Minim irure ut voluptate fugiat cillum exercitation enim proident quis laboris est.',
			'Consectetur sint anim deserunt non irure ex.'
		],
		resources: [
			'ECO, Umberto. Jak napsat diplomovou práci. Přeložil Ivan Seidl. Olomouc: Votobia, 1997. Velká řada, sv. 27. ISBN 80-7198-173-7.',
			'KOTLER, Philip a ARMSTRONG, Gary, 1997. Marketing: an introduction. 4th ed. Upper Saddle River: Prentice-Hall International. ISBN 0-13-263120-2.'
		],
		contact: 'Kryštof Davídek, e-mail: kry.davidek@gmail.com'
	}
};

export { featuresJson, mockEntry };
