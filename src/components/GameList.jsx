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
			
		</>
	);
};

export default GameList;
