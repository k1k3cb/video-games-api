import { v4 } from 'uuid';

const AsideFilters = ({ setOrderBy, platforms }) => {
	const gamesPlatforms = getAllPlatforms(platforms);

	return (
		<form>
			<select onChange={event => handleOrderBy(event, setOrderBy)}>
				<option value='0'>Ordenar por Defecto</option>
				<option value='1'>Ordenar por Nombre</option>
			</select>
			<select onChange={event => handlePlatform(event)}>
				<option value='All'>All</option>
				{gamesPlatforms.map(gamesPlatform => (
					<option key={gamesPlatform.id} value={gamesPlatform.name}>
						{gamesPlatform.name}
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
	// console.log(selectedValue);
};

const handlePlatform = event => {
	const selectedPlatform = event.target.value;
	console.log(selectedPlatform);
};

//* Función obtener plataformas del array
const getAllPlatforms = platformsArray => {
	const platformData = [];
	platformsArray.forEach(platform => {
		const platformWithId = {
			id: v4(),
			name: platform.name
		};
		platformData.push(platformWithId);
	});

	return platformData;
};

export default AsideFilters;
