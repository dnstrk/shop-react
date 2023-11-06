import React, { useState } from "react";
import cl from "./Card.module.scss";

export default function Card({
    img,
    price,
    name,
    id,
    onAddToCart,
    onRemoveFromCart,
    onAddToFavorite,
    onRemoveFromFavorite,
}) {
    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const handlePlus = () => {
        if (isAdded) {
            setIsAdded(!isAdded);
            // onRemoveFromCart(id);
        } else {
            onAddToCart({ img, price, name, id});
            setIsAdded(!isAdded);
        }
    };

    const handleFavorite = () => {
        if (isFavorite) {
            setIsFavorite(!isFavorite);
            // onRemoveFromFavorite(id);
        } else {
            setIsFavorite(!isFavorite);
            onAddToFavorite({ img, price, name, id});
        }
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
                src={img}
                alt="sneakers"
            />
            <p className="mb-15">{name}</p>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span className="text-uppercase">Цена:</span>
                    <b>{price} руб.</b>
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
