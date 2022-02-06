import { useEffect, useState } from 'react';

import { getFilePath } from '../utils/firebase';

const useAsyncFiles = (isSingle?: boolean) => {
	const [urls, setUrls] = useState<(string | undefined)[] | undefined>([]);
	const [names, setNames] = useState<string[]>([]);

	useEffect(() => {
		const fetchFiles = async () => {
			if (names.length > 0) {
				const pathPromise: (Promise<string> | undefined)[] = [];
				if (isSingle) {
					pathPromise.push(getFilePath(names[0]));
				} else {
					names.forEach(name => pathPromise.push(getFilePath(name)));
				}
				return Promise.all(pathPromise);
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
