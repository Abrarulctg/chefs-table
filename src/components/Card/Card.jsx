import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ cards, handleWantToCock }) => {
    // console.log(cards)
    const { calories, ingredients, preparing_time, recipe_image, recipe_name, short_description, recipe_id } = cards;
    // console.log(ingredients)

    return (
        <div className="border-2 p-4 gap-x-4 rounded-xl">
            <img className="rounded-xl mb-6 w-full" src={recipe_image} alt="" />
            <h1 className="text-xl font-semibold text-[#282828]">{recipe_name}</h1>
            <p className="text-[#878787] text-base font-firaSans my-4">{short_description}</p>
            <hr className="text-[#878787] mb-4" />
            <h2 className="text-[18px] font-[500] mb-4">Ingredients: <span>{ingredients.length}</span></h2>
            <ul className="ingredient-list text-base">
                {
                    ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)
                }
            </ul>
            <hr className="text-[#878787] my-4" />
            <div className="flex text-[#282828cc] text-base">
                <p><i className="fa fa-regular fa-clock"> </i><span> {preparing_time}</span> minutes</p>
                <p className="ml-4"><i className="fa fa-thin fa-fire-flame-curved"></i><span> {calories}</span> calories</p>
            </div>
            <button onClick={() => handleWantToCock(cards, recipe_id)} className="btn btn-chef-primary rounded-full my-6">Want to Cook</button>
        </div>
    );
};


Card.propTypes = {
    cards: PropTypes.object,
    handleWantToCock: PropTypes.func
}

export default Card;