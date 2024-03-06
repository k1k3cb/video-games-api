import { useEffect, useState } from 'react';
import AsideFilters from './components/aside-filter/AsideFilters';
import GameList from './components/game-list/GameList';
import Header from './components/header/Header';
import { url, urlPlatforms, urlSearch } from './constants/api';
import { useFetch } from './hooks/useFetch';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	const [orderBy, setOrderBy] = useState('0');
	const [search, setSearch] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const [platforms, setPlatforms] = useState([]);
	const urlToFetch = search ? urlSearch + search : url;

	

	useEffect(() => {
		fetchSearchResults(search, setSearchResults);
	}, [search]);

	useEffect(() => {
		fetchGetAllPlatforms(setPlatforms);
	}, []);

	const { data: games, loading, error } = useFetch(urlToFetch);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	// let filteredGames = filterByName(games.results, search);
	const filteredGames = games ? sortedBy(games.results, orderBy) : [];

	return (
		<>
			<GlobalStyles />
			<Header setSearch={setSearch} />
			<AsideFilters setOrderBy={setOrderBy} platforms={platforms} />
			<GameList games={filteredGames} searchResults={searchResults} />
		</>
	);
};

//* Función búsqueda juego a través de la api

const fetchSearchResults = async (search, setSearchResults) => {
	try {
		const response = await fetch(urlSearch + search);
		const data = await response.json();
		setSearchResults(data.results);
	} catch (error) {
		console.error('Error fetching search results:', error);
	}
};

//* Función obtener plataformas juego desde la api:

const fetchGetAllPlatforms = async setPlatforms => {
	try {
		const response = await fetch(urlPlatforms);
		const data = await response.json();
		setPlatforms(data.results);
	} catch (error) {
		console.error('Error fetching search results:', error);
	}
};

//* Función ordenar: según la opción del select ordeno los juegos

const sortedBy = (games, orderBy) => {
	const sortedGames = games;

	console.log('orderBy', orderBy);
	if (orderBy === '0') return sortedGames;
	else if (orderBy === '1')
		return sortedGames.sort((a, b) => a.name.localeCompare(b.name));
};



export default App;

// Buscador de videojuegos (por nombre)
// Filtro por plataforma
// Filtro por género
// Vista de detalles del juego
