import { v4 } from 'uuid';

const AsideFilters = ({
	setOrderBy,
	platforms,
	genres,
	genreSelected,
	setGenreSelected,
	platformSelected,
	setPlatformSelected
}) => {
	const gamesPlatforms = getAllPlatforms(platforms);
	const gamesGenres = getAllGenres(genres);

	return (
		<form>
			<select onChange={event => handleOrderBy(event, setOrderBy)}>
				<option value='0'>Ordenar por Defecto</option>
				<option value='1'>Ordenar por Nombre</option>
			</select>
			<select
				value={platformSelected}
				onChange={event => handlePlatform(event, setPlatformSelected)}
			>
				<option value='All'>All</option>
				{gamesPlatforms.map(gamesPlatform => (
					<option key={gamesPlatform.id} value={gamesPlatform.value}>
						{gamesPlatform.name}
					</option>
				))}
			</select>

			<select
				value={genreSelected}
				onChange={event => handleGenre(event, setGenreSelected)}
			>
				<option value='All'>All</option>
				{gamesGenres.map(gamesGenre => (
					<option key={gamesGenre.id} value={gamesGenre.value}>
						{gamesGenre.name}
					</option>
				))}
			</select>
		</form>
	);
};

//* Función ordenar: según la opción del select ordeno los juegos
const handleOrderBy = (event, setOrderBy) => {
	const selectedValue = event.target.value;
	setOrderBy(selectedValue);
};

const handlePlatform = (event, setPlatformSelected) => {
	const selectedPlatform = event.target.value;
	setPlatformSelected(selectedPlatform);
};

const handleGenre = (event, setGenreSelected) => {
	const selectedGenre = event.target.value;
	setGenreSelected(selectedGenre);
};

//* Función obtener plataformas del array
const getAllPlatforms = platformsArray => {
	const platformData = [];
	platformsArray.forEach(platform => {
		const platformWithId = {
			id: v4(),
			value: platform.id,
			name: platform.name
		};
		platformData.push(platformWithId);
	});

	return platformData;
};

//* Función obtener géneros de los juegos
const getAllGenres = genresArray => {
	const genresData = [];
	genresArray.forEach(genre => {
		const genresWithId = {
			id: v4(),
			value: genre.id,
			name: genre.name
		};
		genresData.push(genresWithId);
	});

	return genresData;
};

export default AsideFilters;
