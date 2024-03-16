import './Card.css';

const Card = ({ cards }) => {
    // console.log(cards)
    const { calories, ingredients, preparing_time, recipe_image, recipe_name, short_description } = cards;
    console.log(ingredients)
    return (
        <div className="border-2 p-4 gap-x-4 rounded-xl">
            <img src={recipe_image} alt="" />
            <h1 className="text-xl font-semibold text-[#282828]">{recipe_name}</h1>
            <p className="text-[#878787] text-base font-firaSans">{short_description}</p>
            <h2>Ingredients: <span>{ingredients.length}</span></h2>
            <ul className="indredient-list">
                {
                    ingredients.map(ingredient => <li>{ingredient}</li>)
                }
            </ul>
        </div>
    );
};

export default Card;