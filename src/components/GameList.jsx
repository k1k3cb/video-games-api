import GameCard from './UI/GameCard';

const GameList = ({ games }) => {
	if (games && games.length === 0) return <h1>Loading...</h1>;

	return (
		<>
			<GameCard />
			{games.map(game => (
				<div key={game.id}>
					<h4>{game.name}</h4>
				</div>
			))}
		</>
	);
};

export default GameList;
