
import React from "react"
import reactLogo from './assets/react.svg'

function Header() {
    return (
        <header>
            <nav className="navBar">
                <img className="react-logo" src={reactLogo} alt="reactLogo" />
                <h3 className="logo-title">ReactFacts</h3>
                <h4 className="rightNavItem">React Course - Project 1</h4>
            </nav>
        </header>
    )
}

export default Header