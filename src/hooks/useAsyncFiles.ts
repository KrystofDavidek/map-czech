import { useEffect, useState } from 'react';

import { getImagePath } from '../utils/firebase';

const useAsyncFiles = (names: string[] | undefined) => {
	const [urls, setUrls] = useState<(string | undefined)[] | undefined>([]);

	useEffect(() => {
		const fetchFiles = async () => {
			if (names) {
				const pathPromise = [getImagePath(names[0])];
				return Promise.all(pathPromise);
			}
		};

		const loadImages = async () => {
			const urls = await fetchFiles();
			setUrls(urls);
		};
		loadImages();
	}, [names]);

	return { urls };
};

export default useAsyncFiles;
