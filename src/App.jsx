import { useState } from 'react';
import AsideFilters from './components/aside-filter/AsideFilters';
import GameList from './components/game-list/GameList';
import Header from './components/header/Header';
import { url } from './constants/api';
import { useFetch } from './hooks/useFetch';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	const { data: games, loading, error } = useFetch(url);
	const [orderBy, setOrderBy] = useState('0');
	const [search, setSearch] = useState('');

	
	

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	let filteredGames = filterByName(games.results, search);
	filteredGames = sortedBy(filteredGames, orderBy);
	const platformsGames = getAllPlatforms(games.results);

	// console.log('games', games.results[0].name);
	// console.log('platformsGames', platformsGames);

	return (
		<>
			<GlobalStyles />

			<Header setSearch={setSearch} />
			<AsideFilters setOrderBy={setOrderBy} />
			<GameList games={filteredGames} />
		</>
	);
};

const getAllPlatforms = platforms => {
	const platformNames = [];

	platforms.forEach(platform => {
		platformNames.push(platform.name);
	});

	return platformNames;
};

//* Función ordenar por búsqueda

const filterByName = (games, search) => {
	const searchWord = search.toLowerCase().trim();
	if (!searchWord) return games.flatMap(platform => platform.games);
	return games.flatMap(platform => {
		// Filtramos los juegos de la plataforma por el término de búsqueda
		const filteredGames = platform.games.filter(game =>
			game.name.toLowerCase().includes(searchWord)
		);
		console.log('filteredGames', filteredGames);
		// Retornamos los juegos filtrados de la plataforma actual
		return filteredGames;
	});
};

//* Función ordenar: según la opción del select ordeno los juegos

const sortedBy = (games, orderBy) => {
	const sortedGames = [...games];
	if (orderBy === '0') return games;
	else if (orderBy === '1')
		return games.sort((a, b) => a.name.localeCompare(b.name));
};

export default App;

// Buscador de videojuegos (por nombre)
// Filtro por plataforma
// Filtro por género
// Vista de detalles del juego
