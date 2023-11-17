import "./App.scss";
import "macro-css";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favoriteItems, setFavoriteItems] = useState([]);
    const [cartOpened, setCartOpened] = useState(false);
    const [filter, setFilter] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const cartResp = await axios.get(
                "https://65415029f0b8287df1fe3a27.mockapi.io/cart"
            );
            const favoriteResp = await axios.get(
                "https://6549399bdd8ebcd4ab245c9f.mockapi.io/favorite"
            );
            const itemResp = await axios.get(
                "https://65415029f0b8287df1fe3a27.mockapi.io/items"
            );

            setIsLoading(false);

            setCartItems(cartResp.data);
            setFavoriteItems(favoriteResp.data);
            setItems(itemResp.data);
        }
        fetchData();
    }, []);

    /*ПЕРЕНЕСЕНО ИЗ ОСНОВНОГО USEFFECT ЧТОБЫ ОБНОВЛЕНИЕ id ЭЛЕМЕНТОВ КОРЗИНЫ
    ПРОИЗВОДИЛОСЬ СРАЗУ ПОСЛЕ ДОБАВЛЕНИЯ ЭЛЕМЕНТА
    */
    // useEffect(() => {
    //     axios
    //         .get("https://65415029f0b8287df1fe3a27.mockapi.io/cart")
    //         .then((res) => setCartItems(res.data));
    // }, [cartOpened]);

    //ДОБАВЛЕНИЕ ЭЛЕМЕНТА В MOCKAPI /CART
    //ОБНОВЛЕНИЕ cartItems ДЛЯ ОТОБРАЖЕНИЯ
    const onAddToCart = async (obj) => {
        try {
            if (cartItems.find((item) => Number(item.id) == Number(obj.id))) {
                axios.delete(
                    `https://65415029f0b8287df1fe3a27.mockapi.io/cart/${obj.id}`
                );
            } else {
                const { data } = await axios.post(
                    "https://65415029f0b8287df1fe3a27.mockapi.io/cart",
                    obj
                );
                setCartItems((prev) => [...prev, data]);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    //УДАЛЕНИЕ в OVERLAY ЭЛЕМЕНТА В MOCKAPI /CART
    const onRemoveFromCart = (id) => {
        axios.delete(`https://65415029f0b8287df1fe3a27.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    //ДОБАВЛЕНИЕ ЭЛЕМЕНТА В MOCKAPI /FAVORITE
    //ОБНОВЛЕНИЕ favoriteItems ДЛЯ ОТОБРАЖЕНИЯ
    const onAddToFavorite = async (obj) => {
        try {
            if (
                favoriteItems.find((item) => Number(item.id) == Number(obj.id))
            ) {
                axios.delete(
                    `https://6549399bdd8ebcd4ab245c9f.mockapi.io/favorite/${obj.id}`
                );
                // setFavoriteItems((prev) =>
                //     prev.filter((item) => item.id !== obj.id)
                // );
            } else {
                const { data } = await axios.post(
                    "https://6549399bdd8ebcd4ab245c9f.mockapi.io/favorite",
                    obj
                );
                setFavoriteItems((prev) => [...prev, data]);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    // const onRemoveFromFavorite = (id) => {
    //     axios.delete(
    //         `https://6549399bdd8ebcd4ab245c9f.mockapi.io/favorite/${id}`
    //     );
    // };

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
                <Route
                    path="/"
                    element={
                        <Home
                            items={items}
                            filter={filter}
                            onChangeFilterInput={onChangeFilterInput}
                            setFilter={setFilter}
                            onAddToCart={onAddToCart}
                            onRemoveFromCart={onRemoveFromCart}
                            onAddToFavorite={onAddToFavorite}
                            cartItems={cartItems}
                            isLoading={isLoading}
                        />
                    }
                    exact
                />
                <Route
                    path="/favorites"
                    element={
                        <Favorites
                            favoriteItems={favoriteItems}
                            onAddToCart={onAddToCart}
                            onAddToFavorite={onAddToFavorite}
                        />
                    }
                />
                <Route path="/orders" />
            </Routes>
        </div>
    );
}

export default App;
