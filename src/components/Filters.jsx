import { v4 } from 'uuid';
import Label from './UI/Label';
import Select from './UI/Select';

const Filters = ({
	setOrderBy,
	platforms,
	genres,
	genreSelected,
	setGenre,
	platformSelected,
	setPlatform
}) => {
	const gamesPlatforms = getAllPlatforms(platforms);
	const gamesGenres = getAllGenres(genres);

	return (
		<form className='flex justify-between items-center my-4'>
			<div className='w-1/3 mr-4 mt-auto'>
				<Select onChange={event => handleOrderBy(event, setOrderBy)}>
					<option value='0'>Ordenar por Defecto</option>
					<option value='1'>Ordenar por Nombre</option>
				</Select>
			</div>
			<div className='w-1/3 mr-4'>
				<Label text='Choose a platform' />
				<Select
					value={platformSelected}
					onChange={event => handlePlatform(event, setPlatform)}
				>
					<option value='All'>All</option>
					{gamesPlatforms.map(gamesPlatform => (
						<option key={gamesPlatform.id} value={gamesPlatform.value}>
							{gamesPlatform.name}
						</option>
					))}
				</Select>
			</div>
			<div className='w-1/3 mr-4'>
				<Label text='Choose a Genre' />

				<Select
					value={genreSelected}
					onChange={event => handleGenre(event, setGenre)}
				>
					<option value='All'>All</option>
					{gamesGenres.map(gamesGenre => (
						<option key={gamesGenre.id} value={gamesGenre.value}>
							{gamesGenre.name}
						</option>
					))}
				</Select>
			</div>
		</form>
	);
};

//* Función ordenar: según la opción del select ordeno los juegos
const handleOrderBy = (event, setOrderBy) => {
	const selectedValue = event.target.value;
	setOrderBy(selectedValue);
};

const handlePlatform = (event, setPlatform) => {
	const selectedPlatform = event.target.value;
	setPlatform(selectedPlatform);
};

const handleGenre = (event, setGenre) => {
	const selectedGenre = event.target.value;
	setGenre(selectedGenre);
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

export default Filters;
