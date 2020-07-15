import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getMovieDiscover } from 'store/actions/moviesActions';

export default function Home() {

    const movies = useSelector(state => state.movies.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieDiscover());
    }, [])

    return (
        <div className="homeComponent">
            <nav className="topNavComponent">Discover</nav>
            <h1 className="centerTitle">Recomendations</h1>
            <section className="movieListContainer">
                {movies.map((movie)=>
                    <article>
                    {movie.title} - {movie.vote_average} 
                    </article>
                )}
            </section>
        </div>
    )
}
