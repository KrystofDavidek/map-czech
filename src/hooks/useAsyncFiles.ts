import { useEffect, useState } from 'react';

import { getFilePath } from '../utils/firebase';

const useAsyncFiles = (isSingle?: boolean) => {
	const [urls, setUrls] = useState<(string | undefined)[] | undefined>([]);
	const [names, setNames] = useState<string[]>([]);

	useEffect(() => {
		const fetchFiles = async () => {
			if (names.length > 0) {
				if (isSingle) {
					const pathPromise = [getFilePath(names[0])];
					return Promise.all(pathPromise);
				} else {
					return Promise.all([]);
				}
			}
		};

		const loadFiles = async () => {
			const urls = await fetchFiles();
			setUrls(urls);
		};
		loadFiles();
	}, [names]);

	return { urls, setNames };
};

export default useAsyncFiles;
