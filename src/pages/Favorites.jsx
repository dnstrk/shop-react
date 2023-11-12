import React, { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Favorites({
    favoriteItems,
    onAddToCart,
    onAddToFavorite,
}) {
    return (
        <div className="content p-40 clear">
            <div className="d-flex justify-between align-center mb-40">
                <h1>Избранное</h1>
            </div>
            <div className="cards d-flex">
                {favoriteItems.map((item) => (
                    <Card
                    key={item.id}
                        // id={item.id}
                        // img={item.img}
                        // name={item.name}
                        // price={item.price}
                        {...item}                   //аналог передачи значений
                        favorite={true}
                        onAddToCart={onAddToCart}
                        onAddToFavorite={onAddToFavorite}
                    />
                ))}
            </div>
        </div>
    );
}
