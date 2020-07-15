import React from 'react'

export default function SearchInput(props) {
    return (
        <div className="searchInputContainer" style={props.style}>
            <input className="searchInput" type="text" placeholder="Search Movie..." />
            <img src="/scopeIcon.svg" alt="scope icon" className="scopeIcon"/>
        </div>
    )
}
