import React from 'react';
import StarsRating from 'components/StarsRating';

export default function Modal(props) {
    return (
        <>
            <input className="modal-state" id="modal-1" type="checkbox" checked={props.open} />
            <div className="modal">
                <label className="modal__bg" onClick={props.onClose} htmlFor="modal-1"></label>
                <div className="modal__inner">
                    <label className="modal__close" onClick={props.onClose} htmlFor="modal-1"></label>
                    <section className="modalContainer">
                        <div className="modalContainer--title">
                            <h1>{props.data.title} </h1>
                        </div>
                        <div className="modalContainer--body">
                            <h2>{props.data.tagline}</h2>
                            <h3><a href={props.data.homepage}>Movies's web page</a></h3>
                            <h3>Popularity: {Math.round(props.data.popularity)}!</h3>
                            <StarsRating value={props.data.vote_average} filterMode={false}/>
                            <div className="modalContainer--body--companies">
                                {props.data.production_companies ? props.data.production_companies.map(companie =>
                                    <>
                                        <img key={companie.name} src={`https://image.tmdb.org/t/p/w200${companie.logo_path}`} alt={companie.name} />
                                    </>
                                ) : null}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}