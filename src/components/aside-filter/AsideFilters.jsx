const AsideFilters = ({setOrderBy}) => {
	return (
		<form>
			
			<select onChange={event => handleOrderBy(event, setOrderBy)}>
				<option value='0'>Por Defecto</option>
				<option value='1'>Por Nombre</option>
			</select>
		</form>
	);
};

//* Función ordenar: según la opción del select ordeno los usuarios
const handleOrderBy = (event, setOrderBy) => {
	const selectedValue = event.target.value;
	setOrderBy(selectedValue);
	// console.log(selectedValue);
};

export default AsideFilters;
