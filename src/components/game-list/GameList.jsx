const GameList = ({ games }) => {
	console.log('games', games);

	console.log('dato', games[0].games[0].name);

	return (
		<>
			{games.map(platform => {
				// Utilizamos otra llamada a map() para acceder a los nombres de los juegos en cada plataforma
				return platform.games.map(game => {
					return (
						<div key={game.id}>
							<h4>{game.name}</h4>
							<img src={platform.image_background} alt='' />
						</div>
					); // Obtenemos el nombre del juego
				});
			})}
		</>
	);
};

export default GameList;
