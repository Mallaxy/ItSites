import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

export const Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.logo}>
                <NavLink to='/list'>
                    <img src="https://i.pinimg.com/originals/e4/9d/ab/e49dabbdf15dc0ad2a6d039c0e785440.png"
                         alt="Ups...("/>
                </NavLink>
            </div>
            <div className={s.navbar}>
                <NavLink to={'/favorite'}>
                    <div>Favorite</div>
                </NavLink>
                <NavLink to={'/compare'}>
                    <div>Compare</div>
                </NavLink>
                <NavLink to={'/cart'}>
                    <div>Cart</div>
                </NavLink>
            </div>
        </div>
    )
}