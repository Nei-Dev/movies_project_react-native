import { useState, useEffect } from 'react';
import movieDB from "../api/movieDB";
import { MovieFull } from "../interfaces/movieInterface";
import { Cast, CreditsResponse } from "../interfaces/creditsInterface";

interface MovieDetails {
    cast: Cast[];
    isLoading: boolean;
    movieFull?: MovieFull;
}

export const useMovieDetails = (movieId: number) => {
    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    const getMovieDetails = async () =>{

        const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
        const movieCastPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);

        const [cast, movieDetails] = await Promise.all([movieCastPromise, movieDetailsPromise]);
        setState({
            cast: cast.data.cast,
            isLoading: false,
            movieFull: movieDetails.data
        });
    }

    useEffect(() => {
        getMovieDetails();
    }, []);

    return { 
        ...state
    }
};
