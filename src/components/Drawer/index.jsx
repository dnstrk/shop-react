import React from "react";
import cl from "./Drawer.module.scss";

export default function Drawer({
    handleCart,
    cartItems = [],
    setCartItems,

}) {
    function find(index) {
        cartItems.splice(index, 1);
        setCartItems((prev) => [...prev]);

    }

    console.log(cartItems);

    return (
        <div style={{ display: "block" }} className={cl.overlay}>
            <div className={cl.drawer}>
                <h2 className="mb-30">
                    Корзина{" "}
                    <img
                        onClick={handleCart}
                        className={cl.remCartItem}
                        src="/img/remCartItem.svg"
                        alt="close"
                    />
                </h2>

                <div className={cl.cartItems}>
                    {cartItems.map((item, index) => (
                        <div className={cl.cartItem} key={item.id}>
                            <img
                                className="mr-10"
                                width={70}
                                height={70}
                                src={item.img}
                                alt="sneak"
                            />
                            <div>
                                <p className="mb-5">{item.name}</p>
                                <b>{item.price} руб.</b>
                            </div>
                            <img
                                className={cl.remCartItem}
                                src="/img/remCartItem.svg"
                                alt="remove"
                                onClick={() => find(index)}
                            />
                        </div>
                    ))}
                </div>

                <div className={cl.cartTotalBlock}>
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
                    <button className={cl.greenButton}>
                        Оформить заказ <img src="/img/arrow.svg" alt="" />
                    </button>
                </div>
            </div>{" "}
        </div>
    );
}
