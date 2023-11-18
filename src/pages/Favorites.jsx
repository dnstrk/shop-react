import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import AppContext from "../context";

export default function Favorites({ onAddToCart, onAddToFavorite }) {
    const state = useContext(AppContext);
    return (
        <div className="content p-40 clear">
            <div className="d-flex justify-between align-center mb-40">
                <h1>Избранное</h1>
            </div>
            <div className="cards d-flex">
                {state.favoriteItems.map((item) => (
                    <Card
                        key={item.id}
                        {...item} //аналог передачи значений
                        favorite={true}
                        onAddToCart={onAddToCart}
                        onAddToFavorite={onAddToFavorite}
                    />
                ))}
            </div>
        </div>
    );
}
