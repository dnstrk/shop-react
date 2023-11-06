import React, { useEffect, useState } from "react";
import cl from "./Drawer.module.scss";

export default function Drawer({
    handleCart,
    cartItems = [],
    onRemoveFromCart,
}) {
    const [summ, setSumm] = useState(0)

    function test() {
        var res = 0
        cartItems.map(item=>{
            res += item.price
        })
        setSumm(res)
    }

    useEffect(()=>{
        test()
    }, [cartItems])

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
                {cartItems.length > 0 ? (
                    <div className={cl.cartMain}>
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
                                        onClick={() =>
                                            onRemoveFromCart(item.id)
                                        }
                                    />
                                </div>
                            ))}
                        </div>

                        <div className={cl.cartTotalBlock}>
                            <ul>
                                <li className="d-flex justify-between">
                                    <span>Итого: </span>
                                    <div></div>
                                    <b>{summ} руб. </b>
                                </li>
                                <li className="d-flex justify-between">
                                    <span>Налог 5%: </span>
                                    <div></div>
                                    <b>{summ/100*5} руб. </b>
                                </li>
                            </ul>
                            <button className={cl.greenButton}>
                                Оформить заказ{" "}
                                <img src="/img/arrow.svg" alt="" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className={cl.cartEmpty}>
                        <img src="/img/empty_cart.jpg" alt="empty-cart" />
                        <h5>Корзина пустая</h5>
                        <span>
                            Добавьте хотя бы одну пару кроссовок, чтобы сделать
                            заказ.
                        </span>
                        <button onClick={handleCart}>
                            <img src="/img/arrow_left.svg" alt="" />
                            Вернуться назад
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
