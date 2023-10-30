import React from "react";

export default function Drawer() {
    return (
        <div style={{ display: "none" }} className="overlay">
            <div className="drawer d-flex flex-column justify-between">
                <h2 className="mb-30">
                    Корзина{" "}
                    <img
                        className="remCartItem cu-p"
                        src="/img/remCartItem.svg"
                        alt="remove"
                    />
                </h2>

                <div className="cartItems">
                    <div className="cartItem d-flex align-end justify-between mb-20">
                        <img
                            className="mr-10"
                            width={70}
                            height={70}
                            src="/img/sneakers/sneak1.jpg"
                            alt="sneak"
                        />
                        <div>
                            <p className="mb-5">
                                Мужские Кроссовки Nike Air Max 270
                            </p>
                            <b>12 999 руб.</b>
                        </div>
                        <img
                            className="remCartItem"
                            src="/img/remCartItem.svg"
                            alt="remove"
                        />
                    </div>
                    <div className="cartItem d-flex align-end justify-between mb-20">
                        <img
                            className="mr-10"
                            width={70}
                            height={70}
                            src="/img/sneakers/sneak2.jpg"
                            alt="sneak"
                        />
                        <div>
                            <p className="mb-5">
                                Мужские Кроссовки Nike Air Max 270
                            </p>
                            <b>12 999 руб.</b>
                        </div>
                        <img
                            className="remCartItem"
                            src="/img/remCartItem.svg"
                            alt="remove"
                        />
                    </div>
                </div>

                <div className="cartTotalBlock mt-20">
                    <ul>
                        <li className="d-flex justify-between">
                            <span>Итого: </span>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li className="d-flex justify-between">
                            <span>Налог 5%: </span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button className="greenButton">
                        Оформить заказ <img src="/img/arrow.svg" alt="" />
                    </button>
                </div>
            </div>{" "}
        </div>
    );
}
