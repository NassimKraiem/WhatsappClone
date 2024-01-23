import React from 'react'
import PersonneList from './PersonneList'
import userImg from "../img/pdp.jpg"

export default function Asside() {
    return (
        <div className="left">

            <div className="top_section">
                <div className="conv_left">
                    <img src={userImg} className="conv_icon" />
                </div>
                <div className="conv_right">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <i className="fa-solid fa-message"></i>
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>

            <div className="search-section">
                <i className="fa fa-search search-icon" aria-hidden="true"></i>
                <input type="search" className="search-bar" placeholder="Search or start new chat" />
            </div>
            
            <PersonneList />
        </div>
    )
}
