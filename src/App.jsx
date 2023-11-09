import "./App.scss";
import "macro-css";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favoriteItems, setFavoriteItems] = useState([]);
    const [cartOpened, setCartOpened] = useState(false);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios
            .get("https://65415029f0b8287df1fe3a27.mockapi.io/items")
            .then((res) => setItems(res.data));
    }, []);

    /*ПЕРЕНЕСЕНО ИЗ ОСНОВНОГО USEFFECT ЧТОБЫ ОБНОВЛЕНИЕ id ЭЛЕМЕНТОВ КОРЗИНЫ
    ПРОИЗВОДИЛОСЬ СРАЗУ ПОСЛЕ ДОБАВЛЕНИЯ ЭЛЕМЕНТА
    */
    useEffect(() => {
        axios
            .get("https://65415029f0b8287df1fe3a27.mockapi.io/cart")
            .then((res) => setCartItems(res.data));
    }, [cartOpened]);

    //ДОБАВЛЕНИЕ ЭЛЕМЕНТА В MOCKAPI /CART
    //ОБНОВЛЕНИЕ cartItems ДЛЯ ОТОБРАЖЕНИЯ
    const onAddToCart = (obj) => {
        axios.post("https://65415029f0b8287df1fe3a27.mockapi.io/cart", obj);
        setCartItems((prev) => [...prev, obj]);
    };

    //УДАЛЕНИЕ ЭЛЕМЕНТА В MOCKAPI /CART
    const onRemoveFromCart = (id) => {
        axios.delete(`https://65415029f0b8287df1fe3a27.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    //ДОБАВЛЕНИЕ ЭЛЕМЕНТА В MOCKAPI /FAVORITE
    //ОБНОВЛЕНИЕ favoriteItems ДЛЯ ОТОБРАЖЕНИЯ
    const onAddToFavorite = (obj) => {
        axios.post("https://6549399bdd8ebcd4ab245c9f.mockapi.io/favorite", obj);
        setFavoriteItems((prev) => [...prev, obj]);
    };

    const onRemoveFromFavorite = (id) => {
        axios.delete(
            `https://6549399bdd8ebcd4ab245c9f.mockapi.io/favorite/${id}`
        );
    };

    const handleCart = () => {
        setCartOpened(!cartOpened);
    };

    const onChangeFilterInput = (e) => {
        setFilter(e.target.value);
    };

    return (
        <div className="wrapper clear">
            {cartOpened && (
                <Drawer
                    handleCart={handleCart}
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    onRemoveFromCart={onRemoveFromCart}
                />
            )}
            <Header handleCart={handleCart} />
            <Routes>
                <Route path="test" element={'!-----------!'} />
            </Routes>
            <div className="content p-40 clear">
                <div className="d-flex justify-between align-center mb-40">
                    <h1>
                        {filter
                            ? `Поиск по запросу: ${filter}`
                            : "Все кроссовки"}
                    </h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="" />
                        <input
                            type="text"
                            placeholder="Поиск..."
                            value={filter}
                            onChange={onChangeFilterInput}
                        />
                        <img
                            className="cu-p"
                            onClick={() => setFilter("")}
                            src="/img/remCartItem.svg"
                            alt="close"
                        />
                    </div>
                </div>
                <div className="cards d-flex">
                    {items
                        .filter((item) =>
                            item.name
                                .toLowerCase()
                                .includes(filter.toLowerCase())
                        )
                        .map((item) => (
                            <Card
                                key={item.id}
                                id={item.id}
                                img={item.img}
                                name={item.name}
                                price={item.price}
                                onAddToCart={onAddToCart}
                                onRemoveFromCart={onRemoveFromCart}
                                onAddToFavorite={onAddToFavorite}
                                onRemoveFromFavorite={onRemoveFromFavorite}
                                cartItems={cartItems}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default App;
