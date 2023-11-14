import React, { useEffect, useState } from "react";
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
    cartItems,
    favorite = false,
    added = false,
}) {
    //маркер добавленного в корзину
    const [isAdded, setIsAdded] = useState(added);
    //маркер добавленного в избранное
    const [isFavorite, setIsFavorite] = useState(favorite);

    //снимает маркеры если корзина пуста
    // useEffect(() => {
    //     if (cartItems.length == 0) {
    //         setIsAdded(false);
    //     }
    // }, [cartItems]);

    //добавляет элемент в КОРЗИНУ  проверяя маркер
    const handlePlus = () => {
        onAddToCart({ img, price, name, id }); //добавляет элемент в корзину!!!
        setIsAdded(!isAdded);
    };

    //добавляет элемент в ИЗБРАННОЕ проверяя маркер
    const handleFavorite = () => {
        onAddToFavorite({ img, price, name, id }); //добавляет элемент в избранное!!!
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
