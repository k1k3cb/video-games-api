import { Route, Routes } from 'react-router-dom';

import Layout from '../layouts/Layout';
import GameDetails from '../pages/GameDetails';
import Home from '../pages/Home';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/game/:id' element={<GameDetails />} />
			</Route>
		</Routes>
	);
};

export default Router;
