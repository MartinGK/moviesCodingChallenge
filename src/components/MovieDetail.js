import React from 'react';
import { useSelector } from 'react-redux';
import StarsRating from 'components/StarsRating';

export default function MovieDetail() {
    const selectedMovie = useSelector(state => state.movies.selectedMovie)

    return (
        <>
            <div className="modalContainer--title">
                <h1>{selectedMovie.title} </h1>
            </div>
            <div className="modalContainer--body">
                <h2>{selectedMovie.tagline}</h2>
                <h3>{selectedMovie.overview}</h3>
                <h3><a href={selectedMovie.homepage}>Movies's web page</a></h3>
                <h3>Popularity: {Math.round(selectedMovie.popularity)}!</h3>
                <StarsRating value={selectedMovie.vote_average} filterMode={false} />
                <div className="modalContainer--body--companies">
                    {selectedMovie.production_companies ? selectedMovie.production_companies.map(companie =>
                        companie.logo_path && companie.name ? <img key={companie.name} src={`https://image.tmdb.org/t/p/w200${companie.logo_path}`} alt={companie.name} /> : null
                    ) : null}
                </div>
            </div>
        </>
    )
}
