import { useEffect, useState } from 'react';
import Filters from './components/Filters';
import GameList from './components/GameList';
import Header from './components/Header';
import { URLS } from './constants/api';
import { useFetch } from './hooks/useFetch';
import { useFilters } from './hooks/useFilters';

const App = () => {
	const [orderBy, setOrderBy] = useState('0');
	const {
		search,
		genreSelected,
		platformSelected,
		setSearch,
		setGenre,
		setPlatform
	} = useFilters();

	const [genres, setGenres] = useState(['']);
	const [platforms, setPlatforms] = useState([]);
	const urlToFetch = urlToUse(search, genreSelected, platformSelected);

	useEffect(() => {
		fetchGetAllPlatforms(setPlatforms);
	}, []);

	useEffect(() => {
		fetchGetAllGenres(setGenres);
	}, []);

	const { data: games, loading, error } = useFetch(urlToFetch);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	const filteredGames = sortedBy(games?.results, orderBy);

	return (
		<div className='bg-gray-400 h-screen'>
			<Header setSearch={setSearch} />
			<div className='px-8'>
				<Filters
					setOrderBy={setOrderBy}
					platforms={platforms}
					genres={genres}
					genreSelected={genreSelected}
					setGenre={setGenre}
					platformSelected={platformSelected}
					setPlatform={setPlatform}
				/>
				<GameList games={filteredGames} />
			</div>
		</div>
	);
};
//* Función obtener api según parámetros:

const urlToUse = (search, genreSelected, platformSelected) => {
	if (genreSelected !== 'All') return URLS.GAMES_BY_GENRE + genreSelected;
	if (platformSelected !== 'All')
		return URLS.GAMES_BY_PLATFORM + platformSelected;
	if (!search) return URLS.ALL_GAMES;
	return URLS.SEARCH + search;
};

//* Función obtener plataformas juego desde la api:

const fetchGetAllPlatforms = async setPlatforms => {
	try {
		const response = await fetch(URLS.PLATFORMS);
		const data = await response.json();
		setPlatforms(data.results);
	} catch (error) {
		console.error('Error fetching search results:', error);
	}
};

//* Función obtener los géneros de los juego desde la api:

const fetchGetAllGenres = async setGenres => {
	try {
		const response = await fetch(URLS.GENRES);
		const data = await response.json();
		setGenres(data.results);
	} catch (error) {
		console.error('Error fetching search results:', error);
	}
};

//* Función ordenar: según la opción del select ordeno los juegos

const sortedBy = (games, orderBy) => {
	if (!games) return;
	const sortedGames = [...games];
	if (orderBy === '0') return sortedGames;
	return sortedGames.sort((a, b) => a.name.localeCompare(b.name));
};

export default App;

// Vista de detalles del juego
