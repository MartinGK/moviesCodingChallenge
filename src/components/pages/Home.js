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
            <div className="topNavbarContainer">
                <nav className="topNavComponent">
                    <h1 className="pageTitle">Your Local Movie Theater!</h1>
                    <SearchInput style={{ marginRight: "2rem" }} />
                </nav>
            </div>
            <div className="homeComponent">
                <h2 className="centerTitle sectionTitle">Recomendations</h2>
                <section className="movieListContainer">
                    {movies.sort((a, b) => b.vote_average - a.vote_average)
                        .map((movie, i) =>
                        <article className={i < 3 ? `itemArticle--popular-${i}`: "itemArticle"} key={`movie-${movie.title}`}>
                            <img className="itemArticle--img" src={`https://image.tmdb.org/t/p/w${i<3?"500":"200"}/${movie.poster_path}`} alt={`${movie.title}-poster`} />
                        </article>
                    )}
                    <article className="itemArticle--viewMore">
                        View more ->
                    </article>
                </section>
            </div>
        </>
    )
}
