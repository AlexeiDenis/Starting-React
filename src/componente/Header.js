import React from "react"
import logo192 from "../imagini/logo192.png"

export default function Header(){
    return (
        <header className="header">
            <nav className="nav-flex-container">
                <div className="logo-wrapper">
                    <img src={logo192} alt="iamge lgoo" className="image"></img>
                    <p className="title">ReactFacts</p>
                </div>
                <p className="title2">React Course - Project 1</p>
            </nav>
        </header>
    )
}