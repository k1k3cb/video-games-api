const API_KEY = '?key=' + import.meta.env.VITE_API_KEY;

const BASE_URLS = 'https://api.rawg.io/api/';

export const URLS = {
	ALL_GAMES: BASE_URLS + 'games' + API_KEY,
	CHANGE_PAGE: page => BASE_URLS + 'games' + API_KEY + `&page=${page}`,
	SEARCH: BASE_URLS + 'games' + API_KEY + '&search=',
	PLATFORMS: BASE_URLS + 'platforms' + API_KEY,
	GENRES: BASE_URLS + 'genres' + API_KEY,
	GAMES_BY_GENRE: BASE_URLS + 'games' + API_KEY + '&genres=',
	GAMES_BY_PLATFORM: BASE_URLS + 'games' + API_KEY + '&platforms=',
	SINGLE_GAME: id => BASE_URLS + 'games/' + id + API_KEY
};
