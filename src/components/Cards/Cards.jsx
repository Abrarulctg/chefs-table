import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('recipeData.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, []);

    console.log(cards)
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {
                cards.map(cards => <Card
                    key={cards.recipe_id}
                    cards={cards}
                ></Card>)
            }

        </div>
    );
};

export default Cards;