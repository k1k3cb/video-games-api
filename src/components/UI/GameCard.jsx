import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
	const { id, name, background_image: bgImage } = game;

	const fontSize = name.length > 18 ? 'text-sm' : 'text-lg';

	return (
		<div className='flex flex-col justify-center items-center max-w-sm mx-auto my-8'>
			<div
				style={{
					backgroundImage: `url(${bgImage})`
				}}
				className='bg-gray-300 h-32 w-4/5 rounded-lg shadow-md bg-cover bg-center '
			></div>
			<div className='w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden'>
				<div
					className={`py-2 text-center font-bold uppercase tracking-wide text-gray-800 ${fontSize}`}
				>
					{name}
				</div>
				<div className='flex justify-center items-center py-2 px-3 bg-gray-400'>
					<Link to={`/game/${id}`}>
						<button className='bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700'>
							Details
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default GameCard;
