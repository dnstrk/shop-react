import "./App.scss";
import "macro-css";

function App() {
    return (
        <div className="wrapper clear">
            <header className="d-flex justify-between align-center p-40">
                <div className="d-flex align-center">
                    <img
                        className="mr-15"
                        width={40}
                        height={40}
                        src="/img/logo.svg"
                        alt="logo"
                    />
                    <div className="headerInfo">
                        <h3 className="m-0 text-uppercase">React Sneakers</h3>
                        <p className="opacity-5">Магазин лучших кроссовок</p>
                    </div>
                </div>
                <ul className="d-flex">
                    <li className="mr-30">
                        <img
                            className="mr-10"
                            width={18}
                            height={18}
                            src="/img/card.svg"
                            alt="card"
                        />
                        <span>1205 руб.</span>
                    </li>
                    <li>
                        <img
                            width={18}
                            height={18}
                            src="/img/user.svg"
                            alt="user"
                        />
                    </li>
                </ul>
            </header>
            <div className="content p-40 clear">
                <h1 className="mb-40">Все кроссовки</h1>
                <div className="d-flex">
                    <div className="card d-flex flex-column">
                        <img
                            className="mb-15"
                            width={133}
                            height={112}
                            src="/img/sneakers/sneak1.jpg"
                            alt="sneakers"
                        />
                        <p className="mb-15">
                            Мужские Кроссовки <br />
                            Nike Blazer Mid Suede
                        </p>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span className="text-uppercase">Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img
                                    width={32}
                                    height={32}
                                    src="/img/cardBtn.svg"
                                    alt="button"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="card d-flex flex-column">
                        <img
                            className="mb-15"
                            width={133}
                            height={112}
                            src="/img/sneakers/sneak2.jpg"
                            alt="sneakers"
                        />
                        <p className="mb-15">
                            Мужские Кроссовки <br />
                            Nike Blazer Mid Suede
                        </p>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span className="text-uppercase">Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img
                                    width={32}
                                    height={32}
                                    src="/img/cardBtn.svg"
                                    alt="button"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="card d-flex flex-column">
                        <img
                            className="mb-15"
                            width={133}
                            height={112}
                            src="/img/sneakers/sneak3.jpg"
                            alt="sneakers"
                        />
                        <p className="mb-15">
                            Мужские Кроссовки <br />
                            Nike Blazer Mid Suede
                        </p>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span className="text-uppercase">Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img
                                    width={32}
                                    height={32}
                                    src="/img/cardBtn.svg"
                                    alt="button"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="card d-flex flex-column">
                        <img
                            className="mb-15"
                            width={133}
                            height={112}
                            src="/img/sneakers/sneak4.jpg"
                            alt="sneakers"
                        />
                        <p className="mb-15">
                            Мужские Кроссовки <br />
                            Nike Blazer Mid Suede
                        </p>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span className="text-uppercase">Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img
                                    width={32}
                                    height={32}
                                    src="/img/cardBtn.svg"
                                    alt="button"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
