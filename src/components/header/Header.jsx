const Header = ({ setSearch }) => {
	return (
		<form>
			<div>
				<input
					type='text'
					// value=''
					placeholder='Busqueda por nombre'
					onChange={event => handleSearchChange(event, setSearch)}
				/>
			</div>
		</form>
	);
};

//* Función ordenar por búsqueda

const handleSearchChange = (event, setSearch) => {
	setSearch(event.target.value);
	console.log(event.target.value)
};

export default Header;
