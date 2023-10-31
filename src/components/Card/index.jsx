import React, { useEffect, useState } from "react";
import cl from "./Card.module.scss";

export default function Card(props) {
    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const handlePlus = () => {
        setIsAdded(!isAdded);
    };

    const handleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={cl.card}>
            <div className={cl.favorite}>
                <img
                    width={32}
                    height={32}
                    src={
                        isFavorite
                            ? "/img/heart_liked.svg"
                            : "/img/heart_unliked.svg"
                    }
                    alt=""
                    onClick={handleFavorite}
                />
            </div>
            <img
                className="mb-15"
                width={133}
                height={112}
                src={props.srcImg}
                alt="sneakers"
            />
            <p className="mb-15">{props.sneakName}</p>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span className="text-uppercase">Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <img
                    className={cl.plus}
                    width={32}
                    height={32}
                    src={
                        isAdded
                            ? "/img/addCartItemActive.svg"
                            : "/img/addCartItem.svg"
                    }
                    alt="button"
                    onClick={handlePlus}
                />
            </div>
        </div>
    );
}
