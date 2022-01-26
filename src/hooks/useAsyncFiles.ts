import { useEffect, useState } from 'react';

import { getFilePath } from '../utils/firebase';

const useAsyncFiles = (names: string[] | undefined) => {
	const [urls, setUrls] = useState<(string | undefined)[] | undefined>([]);

	useEffect(() => {
		const fetchFiles = async () => {
			if (names) {
				const pathPromise = [getFilePath(names[0])];
				return Promise.all(pathPromise);
			}
		};

		const loadFiles = async () => {
			const urls = await fetchFiles();
			setUrls(urls);
		};
		loadFiles();
	}, [names]);

	return { urls };
};

export default useAsyncFiles;
