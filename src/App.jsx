import "./App.scss";
import "macro-css";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const cards = [
    {
        id: 1,
        img: "/img/sneakers/sneak1.jpg",
        name: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: "12 999",
    },
    {
        id: 2,
        img: "/img/sneakers/sneak2.jpg",
        name: "Мужские Кроссовки Nike Air Max 270",
        price: "12 999",
    },
    {
        id: 3,
        img: "/img/sneakers/sneak3.jpg",
        name: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: "8 499",
    },
    {
        id: 4,
        img: "/img/sneakers/sneak4.jpg",
        name: "Кроссовки Puma X Aka Boku Future Rider",
        price: "8 999",
    },
];

function App() {
    return (
        <div className="wrapper clear">
            <Drawer />
            <Header />
            <div className="content p-40 clear">
                <div className="d-flex justify-between align-center mb-40">
                    <h1 className="">Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="" />
                        <input type="text" placeholder="Поиск..." />
                    </div>
                </div>
                <div className="cards d-flex">
                    {cards.map((card) => (
                        <Card
                            srcImg={card.img}
                            sneakName={card.name}
                            price={card.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
