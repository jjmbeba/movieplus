"use server";

import {Genre} from "@/lib/types";

const options = {
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
    }
};

export const getTrendingMovies = async () => {
    return await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options).then((response) => response.json()).then((result) => result.results);
}

export const getUpcomingMovies = async () => {
    return await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options).then((response) => response.json()).then((result) => result.results);
}

export const getPopularMovies = async () => {
    return await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options).then((response) => response.json()).then((result) => result.results);
}

export const getGenres = async () => {
    return await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options).then((response) => response.json()).then((result) => result.genres);
}

export const getMovieGenres = async (genreIds:Number[]) => {
    const genres:Genre[] = await getGenres();

    return genreIds.map((id) => {
        return genres?.find((genre) => genre.id === id);
    });
}