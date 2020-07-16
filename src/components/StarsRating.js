import React from 'react';

export default function StarsRating(props) {

    const starsLimit = [...Array(10).keys()];

    const hoveringStars = (starId) => {
        starsLimit.map(id => {
            id <= starId ?
                document.querySelector(`#star-${id}`).style.background = "orange" :
                document.querySelector(`#star-${id}`).style.background = "#c4c4c4"
        })
    }

    const handleClickStar = (numberStar) => {
        if (props.value === numberStar) {
            props.onClick(-1);
            hoveringStars(-1);
        } else {
            props.onClick(numberStar);
        }

    }

    return (
        props.filterMode ?
            <div
                className="starsRatingContainer"
                onMouseLeave={() => hoveringStars(props.value)}>
                {
                    starsLimit.map(i =>
                        i % 2 ?
                            <div
                                key={`star-${i}`}
                                className={i + 1 <= props.value ? "star star--right star--checked" : "star star--right star--notChecked"} id={`star-${i}`} onMouseOver={() => hoveringStars(i)}
                                onClick={() => handleClickStar(i)} />
                            :
                            <div
                                key={`star-${i}`}
                                className={i + 1 <= props.value ? "star star--left star--checked" : "star star--left star--notChecked"}
                                id={`star-${i}`}
                                onMouseOver={() => hoveringStars(i)} onClick={() => handleClickStar(i)} />
                    )
                }
            </div>
            :
            <div className="starsRatingContainer">
                {
                    starsLimit.map(i =>
                        i % 2 ?
                            <div key={`star-${i}`} className={i + 1 <= props.value ? "star star--right star--checked" : "star star--right star--notChecked"} id={`star-${i}`} />
                            :
                            <div key={`star-${i}`} className={i + 1 <= props.value ? "star star--left star--checked" : "star star--left star--notChecked"} id={`star-${i}`} />
                    )
                }
                <span className="starsValue">{props.value}</span>
            </div>
    )
}
