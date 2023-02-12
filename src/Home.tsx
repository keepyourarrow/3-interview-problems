import { Link } from "react-router-dom";

const Home = () => {
    const parts = [
        "Реализовать компонент кнопки.",
        "Реализуйте компонент выпадающего списка dropDown.",
        "Создать приложение, которое получает список элементов из любого открытого API ",
    ];
    return (
        <div>
            {parts.map((part, index) => (
                <div className="home-item">
                    {`${index + 1}) `}
                    <Link to={`part${index + 1}`}>{part}</Link>
                </div>
            ))}
        </div>
    );
};

export default Home;
