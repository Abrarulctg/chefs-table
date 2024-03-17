import PropTypes from 'prop-types';


const CurrentlyCooking = ({ cookingItem, id }) => {
    // console.log(CookingItem.length)
    // const { calories, preparing_time, recipe_name, recipe_id } = cookingItem;
    console.log(cookingItem)
    const { recipe_name, preparing_time, calories } = cookingItem;
    return (
        <tr className="bg-[#28282808] mt-10 px-0">
            <th>{id + 1}</th>
            <td>{recipe_name}</td>
            <td>{preparing_time} minutes</td>
            <td>{calories} calories</td>
        </tr>
    );
};

CurrentlyCooking.propTypes = {
    currentlyCooking: PropTypes.func,
    cookingItem: PropTypes.object,
    id: PropTypes.number
}

export default CurrentlyCooking;