import { useEffect, useState } from 'react';
import { fetchData } from '../utils/fetch-data';

export const useFetch = url => {

	const [fetchStatus, setFetchStatus] = useState({
		data: undefined,
		loading: true,
		error: undefined
	});

	useEffect(() => {
		const controller = new AbortController();

		fetchData(url, setFetchStatus, controller.signal);

		return () => controller.abort();
	}, [url]);

	return { ...fetchStatus };
};
