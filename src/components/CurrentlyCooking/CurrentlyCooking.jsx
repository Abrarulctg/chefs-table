import PropTypes from 'prop-types';


const CurrentlyCooking = ({ currentlyCooking, cookingItem }) => {
    console.log(currentlyCooking.length)
    // const { calories, preparing_time, recipe_name, recipe_id } = cookingItem;
    console.log(cookingItem)
    return (
        <tr className="bg-[#28282808] mt-10 px-0">
            <h2>cooking item here</h2>
        </tr>
    );
};



CurrentlyCooking.propTypes = {
    currentlyCooking: PropTypes.func
}

export default CurrentlyCooking;