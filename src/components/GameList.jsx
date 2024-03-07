import GameCard from './UI/GameCard';

const GameList = ({ games }) => {
	if (games && games.length === 0) return <h1>Loading...</h1>;

	return (
		<>
			<div className='flex flex-wrap'>
				{games?.map(game => (
					<GameCard game={game} key={game.id} />
				))}
			</div>
			<div className='mx-auto mb-6 flex justify-center'>
				<button>Adelante</button>
				<button>Atrás</button>
			</div>
			{/* <Pagination/> */}
		</>
	);
};

export default GameList;
