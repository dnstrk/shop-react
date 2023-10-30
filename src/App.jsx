import "./App.scss";
import "macro-css";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

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
                    <Card
                        srcImg={"/img/sneakers/sneak1.jpg"}
                        sneakName={"Мужские Кроссовки Nike Blazer Mid Suede"}
                        price={"12 999"}
                    />
                    <Card
                        srcImg={"/img/sneakers/sneak2.jpg"}
                        sneakName={"Мужские Кроссовки Nike Air Max 270"}
                        price={"12 999"}
                    />
                    <Card
                        srcImg={"/img/sneakers/sneak2.jpg"}
                        sneakName={"Мужские Кроссовки Nike Air Max 270"}
                        price={"12 999"}
                    />
                    <Card
                        srcImg={"/img/sneakers/sneak2.jpg"}
                        sneakName={"Мужские Кроссовки Nike Air Max 270"}
                        price={"12 999"}
                    />
                    <Card
                        srcImg={"/img/sneakers/sneak2.jpg"}
                        sneakName={"Мужские Кроссовки Nike Air Max 270"}
                        price={"12 999"}
                    />
                    <Card
                        srcImg={"/img/sneakers/sneak2.jpg"}
                        sneakName={"Мужские Кроссовки Nike Air Max 270"}
                        price={"12 999"}
                    />
                    <Card
                        srcImg={"/img/sneakers/sneak2.jpg"}
                        sneakName={"Мужские Кроссовки Nike Air Max 270"}
                        price={"12 999"}
                    />
                    <Card
                        srcImg={"/img/sneakers/sneak3.jpg"}
                        sneakName={"Мужские Кроссовки Nike Blazer Mid Suede"}
                        price={"8 499"}
                    />
                    <Card
                        srcImg={"/img/sneakers/sneak4.jpg"}
                        sneakName={"Кроссовки Puma X Aka Boku Future Rider"}
                        price={"8 499"}
                    />
                    
                </div>
            </div>
        </div>
    );
}

export default App;
