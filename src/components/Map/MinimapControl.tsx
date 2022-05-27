import { useCallback, useMemo, useState } from 'react';
import { useEventHandlers } from '@react-leaflet/core';
import {
	MapContainer,
	Rectangle,
	TileLayer,
	useMap,
	useMapEvent
} from 'react-leaflet';
import { Map } from 'leaflet';
import './MapWrapper.css';

// Classes used by Leaflet to position controls
const POSITION_CLASSES = {
	bottomleft: 'leaflet-bottom leaflet-left',
	bottomright: 'leaflet-bottom leaflet-right',
	topleft: 'leaflet-top leaflet-left',
	topright: 'leaflet-top leaflet-right'
};

const BOUNDS_STYLE = { weight: 1 };

type MinimapBoundsProps = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	parentMap: Map;
	zoom: number;
};

const MinimapBounds = ({ parentMap, zoom }: MinimapBoundsProps) => {
	const minimap = useMap();

	// Clicking a point on the minimap sets the parent's map center
	const onClick = useCallback(
		e => {
			parentMap.setView(e.latlng, parentMap.getZoom());
		},
		[parentMap]
	);
	useMapEvent('click', onClick);

	// Keep track of bounds in state to trigger renders
	const [bounds, setBounds] = useState(parentMap.getBounds());
	const onChange = useCallback(() => {
		setBounds(parentMap.getBounds());
		// Update the minimap's view to match the parent map's center and zoom
		minimap.setView(parentMap.getCenter(), zoom);
	}, [minimap, parentMap, zoom]);

	// Listen to events on the parent map
	const handlers = useMemo(() => ({ move: onChange, zoom: onChange }), []);
	useEventHandlers({ instance: parentMap } as never, handlers);

	return <Rectangle bounds={bounds} pathOptions={BOUNDS_STYLE} />;
};

type MinimapProps = {
	position: string;
	zoom?: number;
};

const MinimapControl = ({ position, zoom }: MinimapProps) => {
	const parentMap = useMap();
	const mapZoom = zoom ?? 0;

	// Memoize the minimap so it's not affected by position changes
	const minimap = useMemo(
		() => (
			<MapContainer
				className="minimap"
				style={{
					height: 80,
					width: 80,
					border: 0
				}}
				center={parentMap.getCenter()}
				zoom={mapZoom}
				dragging={false}
				doubleClickZoom={false}
				scrollWheelZoom={false}
				attributionControl={false}
				zoomControl={false}
			>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				<MinimapBounds parentMap={parentMap} zoom={mapZoom} />
			</MapContainer>
		),
		[]
	);

	const positionClass =
		(position && (POSITION_CLASSES as never)[position]) ||
		POSITION_CLASSES.topright;

	return (
		<div className={positionClass}>
			<div className="leaflet-control leaflet-bar">{minimap}</div>
		</div>
	);
};

export default MinimapControl;
