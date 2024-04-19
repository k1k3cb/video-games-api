import { Link, useParams } from 'react-router-dom';
import { URLS } from '../constants/api';
import { useFetch } from '../hooks/useFetch';

const GameDetails = () => {
	const { id } = useParams();

	const { data: singleGame, loading, error } = useFetch(URLS.SINGLE_GAME(id));

	if (loading) return <h1>Loading...</h1>;
	console.log('singleGame', singleGame);

	const {
		name,
		background_image: image,
		description_raw: description,
		genres,
		metacritic: points,
		rating
	} = singleGame;
	console.log('genres', genres);

	return (
		<div className='flex justify-center items-center h-screen mt-12 '>
			<div className='max-w-lg w-full  '>
				<div className='mb-2'>
					<Link
						className='bg-black text-white px-2 py-1 rounded cursor-pointer m-3'
						to='/'
					>
						Back to Home
					</Link>
				</div>
				<div
					className='  "h-48  lg:h-auto 
                 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'
				>
					<img src={image} alt='' />
				</div>
				<div className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
					<div className='mb-8'>
						<p className='text-gray-900 font-bold text-xl mb-2'>{name}</p>
						<p className='text-gray-700 text-base'>{description}</p>
					</div>

					<div className='space-y-5 '>
						<div className='text-sm'>
							<p className='text-gray-900 leading-none'>
								Metacritic: <span> {points}</span>
							</p>
						</div>
						<div className='text-sm'>
							<p className='text-gray-900 leading-none'>
								Rating: <span> {rating}</span>
							</p>
						</div>
						<div className='text-sm'>
							{genres.map(genre => (
								<span
									key={genre.id}
									className='bg-black text-white  px-2 py-1 rounded mr-2'
								>
									{genre.name}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GameDetails;
