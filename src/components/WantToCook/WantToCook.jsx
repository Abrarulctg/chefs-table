import PropTypes from 'prop-types';


const WantToCook = ({ cartItem, handlePreparing, id }) => {
    // console.log(wantToCookCount);
    const { calories, preparing_time, recipe_name, recipe_id } = cartItem;

    return (
        <tr className="bg-[#28282808] mt-10 px-0">
            <th>{id + 1}</th>
            <td>{recipe_name}</td>
            <td>{preparing_time} minutes</td>
            <td>{calories} calories</td>
            <td><button onClick={() => handlePreparing(cartItem, recipe_id)} className="btn btn-chef-primary rounded-full">Preparing</button></td>
        </tr>

    );
};



WantToCook.propTypes = {
    cartItem: PropTypes.object,
    handlePreparing: PropTypes.func,
    id: PropTypes.number
}


export default WantToCook;