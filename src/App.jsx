import "./App.scss";
import "macro-css";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";
import axios from "axios";

async function fetch(setItems) {
    try {
        const response = await axios.get(
            "https://65415029f0b8287df1fe3a27.mockapi.io/items"
        );
        setItems(response.data);
    } catch (e) {
        console.log(e);
    }
}

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartOpened, setCartOpened] = useState(false);
    

    const onAddToCart = (obj) => {
        setCartItems((prev) => [...prev, obj]);
    };

    useEffect(() => {
        fetch(setItems);
    }, []);

    const handleCart = () => {
        setCartOpened(!cartOpened);
    };

    return (
        <div className="wrapper clear">
            {cartOpened && (
                <Drawer
                    handleCart={handleCart}
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                />
            )}
            <Header handleCart={handleCart} />
            <div className="content p-40 clear">
                <div className="d-flex justify-between align-center mb-40">
                    <h1 className="">Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="" />
                        <input type="text" placeholder="Поиск..." />
                    </div>
                </div>
                <div className="cards d-flex">
                    {items.map((item) => (
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
