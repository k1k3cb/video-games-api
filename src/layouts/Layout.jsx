import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { useFilters } from '../hooks/useFilters';

const Layout = () => {
	const {
		search,
		genreSelected,
		platformSelected,
		setSearch,
		setGenre,
		setPlatform
	} = useFilters();
	return (
		<>
			<Header setSearch={setSearch} />
			<Outlet
				context={{
					search,
					genreSelected,
					platformSelected,
					setSearch,
					setGenre,
					setPlatform
				}}
			/>
		</>
	);
};

export default Layout;
