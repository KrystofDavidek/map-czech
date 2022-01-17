import { Details, Entry } from '../models/entry';

import featuresJson from './mockFeatures.json';

const mockDetails: Details = {
	record: {
		url: 'brno.mp3',
		transcript: `
α	γ	δ	ε	ζ	θ	κ	λ	μ	ν	ξ	ο	π	ρ	σ	τ	φ	ψ	ω
a	g	d	e	z	th	k	l	m	n	x	o	p	r	s	t	f	ps	o
`,
		comments:
			'Occaecat velit et nulla exercitation enim elit sit eiusmod sunt proident fugiat labore enim minim. Nostrud ut nisi proident do. In laboris enim aliquip fugiat elit eu anim minim mollit quis.',
		urlToNorm:
			'https://static1.squarespace.com/static/5c69bfa4f4e531370e74fa44/t/5c7564cdf4e1fc3d9a738bba/1551197556163/CompleteGreek.pdf',
		otherSources: [
			'https://cs.wikipedia.org/wiki/Transkripce_(lingvistika)',
			'https://cs.wikipedia.org/wiki/%C5%98eck%C3%A9_p%C3%ADsmo'
		]
	},
	history: [
		{
			title: 'Historie',
			text: 'Anim occaecat mollit nostrud adipisicing deserunt irure sunt laborum officia in velit. Fugiat voluptate ea cupidatat elit id sunt in reprehenderit proident labore qui sit Lorem Lorem. Est laboris sit nulla mollit ea cillum amet quis est cillum nisi exercitation. Laborum sunt laboris ullamco minim ad velit sunt consequat. Dolor sunt eiusmod culpa deserunt minim officia cillum mollit eu excepteur eu deserunt. Velit anim anim ullamco laboris.'
		},
		{
			title: 'Etnologie',
			text: 'Eu cupidatat mollit sunt nisi nulla adipisicing nulla id.'
		}
	],
	current: [
		{
			title: 'Spolky',
			text: 'Eu cupidatat mollit sunt nisi nulla adipisicing nulla id.'
		},
		{
			title: 'Instituce',
			text: 'Eu cupidatat mollit sunt nisi nulla adipisicing nulla id.'
		}
	]
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
