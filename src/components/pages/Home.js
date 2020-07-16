import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getMovieDiscover, getMovieDetail, closeSelectedMovieModal, getSearchMovie } from 'store/actions/moviesActions';
import SearchInput from 'components/SearchInput';
import Modal from 'components/Modal';
import StarsRating from 'components/StarsRating';

export default function Home() {
    const [numberStars, setNumberStars] = useState(0)

    const movies = useSelector(state => state.movies.data);
    const selectedMovie = useSelector(state => state.movies.selectedMovie);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieDiscover());
    }, [])

    useEffect(() => {
        dispatch(getMovieDiscover());
    }, [numberStars])

    const handleArticleClick = (movieId) => {
        dispatch(getMovieDetail(movieId));
    }

    const searchFunction = (text) => {
        dispatch(getSearchMovie(text));
    }


    return (
        <>
            <div className="backgroundImage" />
            <div className="topNavbarContainer">
                <nav className="topNavComponent">
                    <h1 className="pageTitle">Your Local Movie Theater!</h1>
                    <SearchInput style={{ marginRight: "2rem" }} searchFunction={searchFunction} />
                    <div className="absolutePosition">
                        <div className="relativePosition">
                            <div className="fixedPosition ratingFilterContainer" >
                                <StarsRating value={numberStars} onClick={setNumberStars} filterMode={true} />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="homeComponent">
                <h2 className="centerTitle sectionTitle">Discover</h2>
                <section className="movieListContainer">
                    {movies.sort((a, b) => b.vote_average - a.vote_average)
                        .map((movie, i) =>
                            <article onClick={() => handleArticleClick(movie.id)} className={i < 3 ? `itemArticle--popular-${i}` : "itemArticle"} key={`movie-${movie.title}`}>
                                <img className="itemArticle--img" title={movie.title} src={`https://image.tmdb.org/t/p/w${i < 3 ? "500" : "200"}/${movie.poster_path}`} alt={`${movie.title}-poster`} />
                            </article>
                        )}
                    <article className="itemArticle--viewMore">
                        View more
                    </article>
                </section>
            </div>
            <Modal open={selectedMovie.open} data={selectedMovie} onClose={() => dispatch(closeSelectedMovieModal())} title={selectedMovie.title} />
        </>
    )
}
