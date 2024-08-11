"use server";

import {Genre} from "@/lib/types";
import {signIn} from "@/auth";

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

export const getGenres = async (type:'movie'|'tv') => {
    return await fetch(`https://api.themoviedb.org/3/genre/${type}/list?language=en`, options).then((response) => response.json()).then((result) => result.genres);
}

export const getMovieTvGenres = async (genreIds:Number[], type:'movie'|'tv') => {
    const genres:Genre[] = await getGenres(type);

    return genreIds.map((id) => {
        return genres?.find((genre) => genre.id === id);
    });
}

export const getTrendingTvSeries = async () => {
    return await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US',options).then((response) => response.json()).then((result) => result.results);
}

export const getPopularTvSeries = async () => {
    return await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options).then((response) => response.json()).then((result) => result.results);
}

export const sendMagicLink = async (email:string) => {
    return await signIn('resend', {
        email
    })
}

export const getMovieTvDetailsById = async (id:string, type:'movie'|'tv') => {
    return await fetch(`https://api.themoviedb.org/3/${type}/${id}?language=en-US`, options).then((response) => response.json());
}