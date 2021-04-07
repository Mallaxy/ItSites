import React from "react";
import s from './ListItem.module.css'


export const ListItem = (props) => {
    return (
        <div className={s.listItem}>
            <div className={s.image}>
                <img
                    src={props.img}
                    alt="Ups...("/>
            </div>
            <h2 className={s.title}>
                {props.title}
            </h2>
            <div className={s.price}>
                {props.price} $
            </div>
            <div className={s.filters}>
                <div>Blade: {props.blade}</div>
                <div>Handle: {props.handle}</div>
                <div>Length: {props.length}</div>
            </div>
            <div className={s.buttons}>
                <div onClick={() => props.toggles.toggleFavorite(props.id)}>{'FAVORITE'}</div>
                <div onClick={() => props.toggles.toggleCompare(props.id)}>{'COMPARE'}</div>
                <div onClick={() => props.toggles.toggleCart(props.id)}>{'CART'}</div>
            </div>
        </div>
    )
}