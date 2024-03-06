
const API_KEY = import.meta.env.VITE_API_KEY ;
export const url = `https://api.rawg.io/api/games?page_size=30&key=${API_KEY}`;
export const urlSearch = `https://api.rawg.io/api/games?key=${API_KEY}&search=`;
export const urlPlatforms = `https://api.rawg.io/api/platforms?key=${API_KEY}`;
