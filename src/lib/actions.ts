"use server";

import {Genre, MovieSearchResult, TvSearchResult} from "@/lib/types";
import {auth, signIn} from "@/auth";
import {redirect} from "next/navigation";
import {db} from "@/db";
import {bookmarks} from "@/schema";
import {and, eq} from "drizzle-orm";
import {revalidatePath} from "next/cache";

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

export const getGenres = async (type: 'movie' | 'tv') => {
    return await fetch(`https://api.themoviedb.org/3/genre/${type}/list?language=en`, options).then((response) => response.json()).then((result) => result.genres);
}

export const getMovieTvGenres = async (genreIds: Number[], type: 'movie' | 'tv') => {
    const genres: Genre[] = await getGenres(type);

    return genreIds.map((id) => {
        return genres?.find((genre) => genre.id === id);
    });
}

export const getTrendingTvSeries = async () => {
    return await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options).then((response) => response.json()).then((result) => result.results);
}

export const getPopularTvSeries = async () => {
    return await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options).then((response) => response.json()).then((result) => result.results);
}

export const sendMagicLink = async (email: string) => {
    return await signIn('resend', {
        email
    })
}

export const getMovieTvDetailsById = async (id: string, type: 'movie' | 'tv') => {
    return await fetch(`https://api.themoviedb.org/3/${type}/${id}?language=en-US`, options).then((response) => response.json());
}

export const bookmark = async (type: 'movie' | 'tv', tvMovieId: number) => {
    const session = await auth();

    if (!session?.user?.id) {
        redirect('/login')
    }

    const isBookmarked = await checkIfMovieTvBookmarked(tvMovieId, type);

    if (isBookmarked) {
        await db.delete(bookmarks).where(
            and(
                eq(bookmarks.tvMovieId, tvMovieId),
                eq(bookmarks.userId, session.user.id),
                eq(bookmarks.type, type)
            )
        )

        revalidatePath('/bookmarks','page')

        return {
            'message': 'Bookmarked removed successfully',
            'status': 'success'
        }

    } else {
        await db.insert(bookmarks).values({
            userId: session.user.id,
            tvMovieId,
            type,
            createdAt: new Date()
        })

        revalidatePath('/bookmarks','page')

        return {
            'message': 'Bookmarked successfully',
            'status': 'success'
        }
    }


}

export const checkIfMovieTvBookmarked = async (tvMovieId: number, type: 'movie' | 'tv') => {
    const session = await auth();

    if (!session?.user?.id) return false;

    const result = await db.select().from(bookmarks).where(
        and(
            eq(bookmarks.tvMovieId, tvMovieId),
            eq(bookmarks.userId, session.user.id),
            eq(bookmarks.type, type)
        )
    );

    return result.length > 0;
}

export const getUserBookmarks = async () => {
    const session = await auth();

    if (!session?.user?.id) return [];

    const results = await db.select().from(bookmarks).where(
        eq(bookmarks.userId, session.user.id)
    );

    const moviesTv = results.map(async(result) => {
        const movieTv:MovieSearchResult | TvSearchResult = await fetch(`https://api.themoviedb.org/3/${result.type}/${result.tvMovieId}?language=en-US`, options).then((response) => response.json());
        return {
            ...movieTv,
            type: result.type
        }
    });

    return Promise.all(moviesTv);
}