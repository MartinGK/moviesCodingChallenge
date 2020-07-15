import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getMovieDiscover } from 'store/actions/moviesActions';
import SearchInput from 'components/SearchInput';

export default function Home() {

    const movies = useSelector(state => state.movies.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieDiscover());
    }, [])

    return (
        <>
        <div className="backgroundImage" />
        <div className="homeComponent">
            <nav className="topNavComponent">
                <h1 className="pageTitle">Your Local Movie Theater!</h1>
                <SearchInput style={{marginRight:"2rem"}}/>
            </nav>
            <h2 className="centerTitle">Recomendations</h2>
            <section className="movieListContainer">
                {movies.map((movie) =>
                    <article key={`movie-${movie.title}`}>
                        <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`${movie.title}-poster`} />
                        {movie.title} - {movie.vote_average}
                    </article>
                )}
            </section>
        </div>
        </>
    )
}
