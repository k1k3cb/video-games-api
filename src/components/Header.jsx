const Header = ({ setSearch }) => {
	return (
		<header className="flex items-center justify-between px-8 py-5 bg-black " >
			<span className="text-3xl text-white font-black" >LOGO</span>
			<form className="flex-grow ml-4">
				<div>
					<input
						type='text'
						className="w-full bg-gray-600 text-white rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300  hover:bg-white hover:text-black focus:text-black"
						placeholder='Busqueda por nombre'
						onChange={event => handleSearchChange(event, setSearch)}
					/>
				</div>
			</form>
		</header>
	);
};

//* Función ordenar por búsqueda

const handleSearchChange = (event, setSearch) => {
	setSearch(event.target.value);
};

export default Header;
