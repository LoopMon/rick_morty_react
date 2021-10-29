import { HiMenu } from 'react-icons/hi'
import React, { useState } from 'react'
import './style.css'

export function HeaderResponsive() {
    const [active, setActive] = useState(false)
    function openMenu(event) {
        event.preventDefault()
        setActive(!active)
    }

    return (
        <div className="header">
            <div className="menu-hamburguer" onClick={openMenu}>
                <HiMenu color="#f4f4f4" size="30px"/>
            </div>
            <ul className={`menu-options${active ? ' active' : '' }`}>
                <li><a href="/">Home</a></li>
                <li><a href="/">Personagens</a></li>
                <li><a href="/">Episódios</a></li>
                <li><a href="/">Sobre</a></li>
            </ul>
        </div>
    )
}