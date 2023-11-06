import "./App.scss";
import "macro-css";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    // const [favoriteItems, setFavoriteItems] = useState([]);
    const [cartOpened, setCartOpened] = useState(false);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios
            .get("https://65415029f0b8287df1fe3a27.mockapi.io/items")
            .then((res) => setItems(res.data));

        axios
            .get("https://65415029f0b8287df1fe3a27.mockapi.io/cart")
            .then((res) => setCartItems(res.data));
    }, []);

    const onAddToCart = (obj) => {
        axios.post("https://65415029f0b8287df1fe3a27.mockapi.io/cart", obj);
        setCartItems((prev) => [...prev, obj]);
    };

    const onRemoveFromCart = (id) => {
        axios.delete(`https://65415029f0b8287df1fe3a27.mockapi.io/cart/${id}`);
        setCartItems(prev=>prev.filter(item=>item.id!==id))
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
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default App;
