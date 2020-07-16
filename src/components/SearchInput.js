import React, { useState } from 'react'

export default function SearchInput(props) {
    const [text, setText] = useState("")


    const handleKeyDown = e => {
        if (e.keyCode === 13) {
            props.searchFunction(text);
        }
    }

    return (
        <div className="searchInputContainer" style={props.style}>
            <input onChange={(e)=>setText(e.target.value)} className="searchInput" type="text" placeholder="Search Movie..." onKeyDown={handleKeyDown} />
            <img src="/scopeIcon.svg" alt="scope icon" className="scopeIcon" onClick={() => props.searchFunction(text)} />
        </div>
    )
}
