import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import AppContext from "../context";

export default function Orders() {
    const {onAddToCart, onAddToFavorite} = useContext(AppContext)
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true)
                const { data } = await axios.get(
                    "https://6549399bdd8ebcd4ab245c9f.mockapi.io/orders"
                );
                setOrders(data.map(obj=>obj.items).flat())
                setIsLoading(false)

            } catch (error) {
                console.log('Ошибка получения заказов');
            }
        })()
    }, []);
    return (
        <div className="content p-40 clear">
            <div className="d-flex justify-between align-center mb-40">
                <h1>Мои заказы</h1>
            </div>
            <div className="cards d-flex">
                <div className="cards d-flex">
                    {(isLoading ? [...Array(4)] : orders).map((item, index) => (
                        <Card
                            key={index}
                            {...item} //аналог передачи значений
                            favorite={false}
                            loading={isLoading}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
