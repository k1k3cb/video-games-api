import { Link, useParams } from 'react-router-dom';
import { URLS } from '../constants/api';
import { useFetch } from '../hooks/useFetch';

// const singleGame = {
// 	id: 3328,
// 	slug: 'the-witcher-3-wild-hunt',
// 	name: 'The Witcher 3: Wild Hunt',
// 	name_original: 'The Witcher 3: Wild Hunt',
// 	description:
// 		'<p>The third game in a series, it holds nothing back from the player. Open world adventures of the renowned monster slayer Geralt of Rivia are now even on a larger scale. Following the source material more accurately, this time Geralt is trying to find the child of the prophecy, Ciri while making a quick coin from various contracts on the side. Great attention to the world building above all creates an immersive story, where your decisions will shape the world around you.</p>\n<p>CD Project Red are infamous for the amount of work they put into their games, and it shows, because aside from classic third-person action RPG base game they provided 2 massive DLCs with unique questlines and 16 smaller DLCs, containing extra quests and items.</p>\n<p>Players praise the game for its atmosphere and a wide open world that finds the balance between fantasy elements and realistic and believable mechanics, and the game deserved numerous awards for every aspect of the game, from music to direction.</p>',
// 	metacritic: 92,
// 	metacritic_platforms: [
// 		{
// 			metascore: 91,
// 			url: 'https://www.metacritic.com/game/xbox-one/the-witcher-3-wild-hunt',
// 			platform: {
// 				platform: 1,
// 				name: 'Xbox One',
// 				slug: 'xbox-one'
// 			}
// 		},
// 		{
// 			metascore: 93,
// 			url: 'https://www.metacritic.com/game/pc/the-witcher-3-wild-hunt',
// 			platform: {
// 				platform: 4,
// 				name: 'PC',
// 				slug: 'pc'
// 			}
// 		},
// 		{
// 			metascore: 92,
// 			url: 'https://www.metacritic.com/game/playstation-4/the-witcher-3-wild-hunt',
// 			platform: {
// 				platform: 18,
// 				name: 'PlayStation 4',
// 				slug: 'playstation4'
// 			}
// 		}
// 	],
// 	released: '2015-05-18',
// 	tba: false,
// 	updated: '2024-03-06T17:41:05',
// 	background_image:
// 		'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
// 	background_image_additional:
// 		'https://media.rawg.io/media/screenshots/3e4/3e4576a772b3df47bfc52b86e4cf7e03.jpg',
// 	website: 'https://thewitcher.com/en/witcher3',
// 	rating: 4.65,
// 	rating_top: 5,
// 	ratings: [
// 		{
// 			id: 5,
// 			title: 'exceptional',
// 			count: 5069,
// 			percent: 77.12
// 		},
// 		{
// 			id: 4,
// 			title: 'recommended',
// 			count: 1060,
// 			percent: 16.13
// 		},
// 		{
// 			id: 3,
// 			title: 'meh',
// 			count: 278,
// 			percent: 4.23
// 		},
// 		{
// 			id: 1,
// 			title: 'skip',
// 			count: 166,
// 			percent: 2.53
// 		}
// 	],
// 	reactions: {
// 		1: 59,
// 		2: 15,
// 		3: 54,
// 		4: 26,
// 		5: 15,
// 		6: 8,
// 		7: 16,
// 		10: 15,
// 		11: 16,
// 		12: 19,
// 		14: 1,
// 		15: 1,
// 		16: 3,
// 		21: 1
// 	},
// 	added: 19866,
// 	added_by_status: {
// 		yet: 1113,
// 		owned: 11413,
// 		beaten: 4767,
// 		toplay: 776,
// 		dropped: 932,
// 		playing: 865
// 	},
// 	playtime: 46,
// 	screenshots_count: 107,
// 	movies_count: 0,
// 	creators_count: 34,
// 	achievements_count: 684,
// 	parent_achievements_count: 49,
// 	reddit_url: 'https://www.reddit.com/r/thewitcher3/',
// 	reddit_name: '',
// 	reddit_description: '',
// 	reddit_logo: '',
// 	reddit_count: 8646,
// 	twitch_count: 103,
// 	youtube_count: 1000000,
// 	reviews_text_count: 106,
// 	ratings_count: 6467,
// 	suggestions_count: 675,
// 	alternative_names: [],
// 	metacritic_url:
// 		'https://www.metacritic.com/game/playstation-4/the-witcher-3-wild-hunt',
// 	parents_count: 0,
// 	additions_count: 3,
// 	game_series_count: 8,
// 	user_game: null,
// 	reviews_count: 6573,
// 	saturated_color: '0f0f0f',
// 	dominant_color: '0f0f0f',
// 	parent_platforms: [
// 		{
// 			platform: {
// 				id: 1,
// 				name: 'PC',
// 				slug: 'pc'
// 			}
// 		},
// 		{
// 			platform: {
// 				id: 2,
// 				name: 'PlayStation',
// 				slug: 'playstation'
// 			}
// 		},
// 		{
// 			platform: {
// 				id: 3,
// 				name: 'Xbox',
// 				slug: 'xbox'
// 			}
// 		},
// 		{
// 			platform: {
// 				id: 5,
// 				name: 'Apple Macintosh',
// 				slug: 'mac'
// 			}
// 		},
// 		{
// 			platform: {
// 				id: 7,
// 				name: 'Nintendo',
// 				slug: 'nintendo'
// 			}
// 		}
// 	],
// 	platforms: [
// 		{
// 			platform: {
// 				id: 186,
// 				name: 'Xbox Series S/X',
// 				slug: 'xbox-series-x',
// 				image: null,
// 				year_end: null,
// 				year_start: 2020,
// 				games_count: 881,
// 				image_background:
// 					'https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg'
// 			},
// 			released_at: '2015-05-18',
// 			requirements: {}
// 		},
// 		{
// 			platform: {
// 				id: 187,
// 				name: 'PlayStation 5',
// 				slug: 'playstation5',
// 				image: null,
// 				year_end: null,
// 				year_start: 2020,
// 				games_count: 1015,
// 				image_background:
// 					'https://media.rawg.io/media/games/909/909974d1c7863c2027241e265fe7011f.jpg'
// 			},
// 			released_at: '2015-05-18',
// 			requirements: {}
// 		},
// 		{
// 			platform: {
// 				id: 5,
// 				name: 'macOS',
// 				slug: 'macos',
// 				image: null,
// 				year_end: null,
// 				year_start: null,
// 				games_count: 103400,
// 				image_background:
// 					'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg'
// 			},
// 			released_at: '2015-05-18',
// 			requirements: {}
// 		},
// 		{
// 			platform: {
// 				id: 18,
// 				name: 'PlayStation 4',
// 				slug: 'playstation4',
// 				image: null,
// 				year_end: null,
// 				year_start: null,
// 				games_count: 6767,
// 				image_background:
// 					'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg'
// 			},
// 			released_at: '2015-05-18',
// 			requirements: {}
// 		},
// 		{
// 			platform: {
// 				id: 7,
// 				name: 'Nintendo Switch',
// 				slug: 'nintendo-switch',
// 				image: null,
// 				year_end: null,
// 				year_start: null,
// 				games_count: 5406,
// 				image_background:
// 					'https://media.rawg.io/media/games/5eb/5eb49eb2fa0738fdb5bacea557b1bc57.jpg'
// 			},
// 			released_at: '2015-05-18',
// 			requirements: {}
// 		},
// 		{
// 			platform: {
// 				id: 4,
// 				name: 'PC',
// 				slug: 'pc',
// 				image: null,
// 				year_end: null,
// 				year_start: null,
// 				games_count: 525904,
// 				image_background:
// 					'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg'
// 			},
// 			released_at: '2015-05-18',
// 			requirements: {}
// 		},
// 		{
// 			platform: {
// 				id: 1,
// 				name: 'Xbox One',
// 				slug: 'xbox-one',
// 				image: null,
// 				year_end: null,
// 				year_start: null,
// 				games_count: 5590,
// 				image_background:
// 					'https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg'
// 			},
// 			released_at: '2015-05-18',
// 			requirements: {}
// 		}
// 	],
// 	stores: [
// 		{
// 			id: 354780,
// 			url: '',
// 			store: {
// 				id: 5,
// 				name: 'GOG',
// 				slug: 'gog',
// 				domain: 'gog.com',
// 				games_count: 5817,
// 				image_background:
// 					'https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg'
// 			}
// 		},
// 		{
// 			id: 3565,
// 			url: '',
// 			store: {
// 				id: 3,
// 				name: 'PlayStation Store',
// 				slug: 'playstation-store',
// 				domain: 'store.playstation.com',
// 				games_count: 7900,
// 				image_background:
// 					'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg'
// 			}
// 		},
// 		{
// 			id: 305376,
// 			url: '',
// 			store: {
// 				id: 1,
// 				name: 'Steam',
// 				slug: 'steam',
// 				domain: 'store.steampowered.com',
// 				games_count: 89063,
// 				image_background:
// 					'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg'
// 			}
// 		},
// 		{
// 			id: 312313,
// 			url: '',
// 			store: {
// 				id: 2,
// 				name: 'Xbox Store',
// 				slug: 'xbox-store',
// 				domain: 'microsoft.com',
// 				games_count: 4813,
// 				image_background:
// 					'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg'
// 			}
// 		},
// 		{
// 			id: 676022,
// 			url: '',
// 			store: {
// 				id: 6,
// 				name: 'Nintendo Store',
// 				slug: 'nintendo',
// 				domain: 'nintendo.com',
// 				games_count: 8966,
// 				image_background:
// 					'https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg'
// 			}
// 		}
// 	],
// 	developers: [
// 		{
// 			id: 9023,
// 			name: 'CD PROJEKT RED',
// 			slug: 'cd-projekt-red',
// 			games_count: 24,
// 			image_background:
// 				'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg'
// 		}
// 	],
// 	genres: [
// 		{
// 			id: 4,
// 			name: 'Action',
// 			slug: 'action',
// 			games_count: 178358,
// 			image_background:
// 				'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg'
// 		},
// 		{
// 			id: 5,
// 			name: 'RPG',
// 			slug: 'role-playing-games-rpg',
// 			games_count: 55107,
// 			image_background:
// 				'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg'
// 		}
// 	],
// 	tags: [
// 		{
// 			id: 31,
// 			name: 'Singleplayer',
// 			slug: 'singleplayer',
// 			language: 'eng',
// 			games_count: 218199,
// 			image_background:
// 				'https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg'
// 		},
// 		{
// 			id: 40836,
// 			name: 'Full controller support',
// 			slug: 'full-controller-support',
// 			language: 'eng',
// 			games_count: 16746,
// 			image_background:
// 				'https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg'
// 		},
// 		{
// 			id: 13,
// 			name: 'Atmospheric',
// 			slug: 'atmospheric',
// 			language: 'eng',
// 			games_count: 32044,
// 			image_background:
// 				'https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg'
// 		},
// 		{
// 			id: 42,
// 			name: 'Great Soundtrack',
// 			slug: 'great-soundtrack',
// 			language: 'eng',
// 			games_count: 3386,
// 			image_background:
// 				'https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg'
// 		},
// 		{
// 			id: 24,
// 			name: 'RPG',
// 			slug: 'rpg',
// 			language: 'eng',
// 			games_count: 19865,
// 			image_background:
// 				'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg'
// 		},
// 		{
// 			id: 118,
// 			name: 'Story Rich',
// 			slug: 'story-rich',
// 			language: 'eng',
// 			games_count: 20561,
// 			image_background:
// 				'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg'
// 		},
// 		{
// 			id: 36,
// 			name: 'Open World',
// 			slug: 'open-world',
// 			language: 'eng',
// 			games_count: 7102,
// 			image_background:
// 				'https://media.rawg.io/media/games/00d/00d374f12a3ab5f96c500a2cfa901e15.jpg'
// 		},
// 		{
// 			id: 149,
// 			name: 'Third Person',
// 			slug: 'third-person',
// 			language: 'eng',
// 			games_count: 10861,
// 			image_background:
// 				'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg'
// 		},
// 		{
// 			id: 64,
// 			name: 'Fantasy',
// 			slug: 'fantasy',
// 			language: 'eng',
// 			games_count: 26770,
// 			image_background:
// 				'https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg'
// 		},
// 		{
// 			id: 37,
// 			name: 'Sandbox',
// 			slug: 'sandbox',
// 			language: 'eng',
// 			games_count: 6607,
// 			image_background:
// 				'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg'
// 		},
// 		{
// 			id: 97,
// 			name: 'Action RPG',
// 			slug: 'action-rpg',
// 			language: 'eng',
// 			games_count: 6501,
// 			image_background:
// 				'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg'
// 		},
// 		{
// 			id: 41,
// 			name: 'Dark',
// 			slug: 'dark',
// 			language: 'eng',
// 			games_count: 15192,
// 			image_background:
// 				'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg'
// 		},
// 		{
// 			id: 44,
// 			name: 'Nudity',
// 			slug: 'nudity',
// 			language: 'eng',
// 			games_count: 6072,
// 			image_background:
// 				'https://media.rawg.io/media/games/260/26023c855f1769a93411d6a7ea084632.jpeg'
// 		},
// 		{
// 			id: 336,
// 			name: 'controller support',
// 			slug: 'controller-support',
// 			language: 'eng',
// 			games_count: 293,
// 			image_background:
// 				'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg'
// 		},
// 		{
// 			id: 145,
// 			name: 'Choices Matter',
// 			slug: 'choices-matter',
// 			language: 'eng',
// 			games_count: 4817,
// 			image_background:
// 				'https://media.rawg.io/media/games/883/883bc3050f9a4115d1968ece56bddfc2.jpg'
// 		},
// 		{
// 			id: 192,
// 			name: 'Mature',
// 			slug: 'mature',
// 			language: 'eng',
// 			games_count: 2873,
// 			image_background:
// 				'https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg'
// 		},
// 		{
// 			id: 40,
// 			name: 'Dark Fantasy',
// 			slug: 'dark-fantasy',
// 			language: 'eng',
// 			games_count: 3876,
// 			image_background:
// 				'https://media.rawg.io/media/games/29c/29c6c21cc0c78cff6f45d23631cc82f4.jpg'
// 		},
// 		{
// 			id: 66,
// 			name: 'Medieval',
// 			slug: 'medieval',
// 			language: 'eng',
// 			games_count: 6085,
// 			image_background:
// 				'https://media.rawg.io/media/games/7f0/7f021d4a3577ac9d591a628a431fc2e5.jpg'
// 		},
// 		{
// 			id: 82,
// 			name: 'Magic',
// 			slug: 'magic',
// 			language: 'eng',
// 			games_count: 9018,
// 			image_background:
// 				'https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg'
// 		},
// 		{
// 			id: 218,
// 			name: 'Multiple Endings',
// 			slug: 'multiple-endings',
// 			language: 'eng',
// 			games_count: 8219,
// 			image_background:
// 				'https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg'
// 		}
// 	],
// 	publishers: [
// 		{
// 			id: 7411,
// 			name: 'CD PROJEKT RED',
// 			slug: 'cd-projekt-red',
// 			games_count: 27,
// 			image_background:
// 				'https://media.rawg.io/media/games/22c/22ce391b3096cd46eadae1a890624f39.jpg'
// 		}
// 	],
// 	esrb_rating: {
// 		id: 4,
// 		name: 'Mature',
// 		slug: 'mature'
// 	},
// 	clip: null,
// 	description_raw:
// 		'The third game in a series, it holds nothing back from the player. Open world adventures of the renowned monster slayer Geralt of Rivia are now even on a larger scale. Following the source material more accurately, this time Geralt is trying to find the child of the prophecy, Ciri while making a quick coin from various contracts on the side. Great attention to the world building above all creates an immersive story, where your decisions will shape the world around you.\n\nCD Project Red are infamous for the amount of work they put into their games, and it shows, because aside from classic third-person action RPG base game they provided 2 massive DLCs with unique questlines and 16 smaller DLCs, containing extra quests and items.\n\nPlayers praise the game for its atmosphere and a wide open world that finds the balance between fantasy elements and realistic and believable mechanics, and the game deserved numerous awards for every aspect of the game, from music to direction.'
// };

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
			<div className='max-w-lg w-full lg:max-w-full lg:flex '>
				<div
					className='  "h-48  lg:h-auto lg:w-48
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
				<Link to='/'>Back to Home</Link>
			</div>
		</div>
	);
};

export default GameDetails;
