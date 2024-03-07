import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Filters from '../components/Filters';
import GameList from '../components/GameList';
import { URLS } from '../constants/api';
import { useFetch } from '../hooks/useFetch';

const Home = () => {
	const [orderBy, setOrderBy] = useState('0');
	const { search, genreSelected, platformSelected, setGenre, setPlatform } =
		useOutletContext();

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

	console.log('games', games);
	const filteredGames = sortedBy(games?.results, orderBy);

	return (
		<div>
			{/* <Header setSearch={setSearch} /> */}
			<div className='flex justify-center'>
				<div className='w-4/5'>
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

export default Home;

// paginacion
// subir a render
