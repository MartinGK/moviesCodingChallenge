import React from 'react';

export default function StarsRating(props) {


    const starsLimit = [ ...Array(10).keys() ];

    const hoveringStars = (starId) =>{
        // starsLimit.map(id=>{
        //     id <= starId ?
        //     document.querySelector(`#star-${id}`).style.background = "orange" :
        //     document.querySelector(`#star-${id}`).style.background = "#c4c4c4"
        // })
    }

    return (
        <div className="starsRatingContainer">
            {
                starsLimit.map(i =>
                    i % 2 ?
                        <div className={i+1 <= props.value ? "star star--right star--checked" : "star star--right star--notChecked" } id={`star-${i}`} onMouseOver={()=>hoveringStars(i)} onClick={() => { console.log("R") }} />
                        :
                        <div className={i+1 <= props.value ? "star star--left star--checked" : "star star--left star--notChecked" } id={`star-${i}`} onMouseOver={()=>hoveringStars(i)} onClick={() => { console.log("L") }} />
                )
            }
            <span className="starsValue">{props.value}</span>
        </div>
    )
}
