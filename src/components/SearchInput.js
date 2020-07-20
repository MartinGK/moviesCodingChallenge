import React, { useState } from 'react';
import { PAGE_URL } from 'helpers/constants';

export default function SearchInput(props) {
    const [text, setText] = useState("")


    const handleKeyDown = e => {
        if (e.keyCode === 13) {
            props.searchFunction(text);
        }
    }

    return (
        <div className="searchInputContainer" style={props.style ? props.style : {}}>
            <input onChange={(e)=>setText(e.target.value)} value={text} className="searchInput" type="text" placeholder="Search Movie..." onKeyDown={handleKeyDown} />
            <img src={PAGE_URL + "/static/scopeIcon.svg"} alt="scope icon" className="scopeIcon" onClick={() => props.searchFunction(text)} />
        </div>
    )
}
