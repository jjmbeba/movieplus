"use server";

const options = {
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
    }
};

export const getTrendingMovies = async () => {
    return await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options).then((response) => response.json()).then((result) => result.results);
}