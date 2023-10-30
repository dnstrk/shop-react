import React from "react";

export default function Card({ srcImg, sneakName, price }) {
    return (
        <div className="card d-flex flex-column">
            <div className="favorite">
                <img
                    width={32}
                    height={32}
                    src="/img/heart_unliked.svg"
                    alt=""
                />
            </div>
            <img
                className="mb-15"
                width={133}
                height={112}
                src={srcImg}
                alt="sneakers"
            />
            <p className="mb-15">{sneakName}</p>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span className="text-uppercase">Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <button className="button">
                    <img
                        width={32}
                        height={32}
                        src="/img/cardFav.svg"
                        alt="button"
                    />
                </button>
            </div>
        </div>
    );
}
