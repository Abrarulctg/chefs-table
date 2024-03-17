import WantToCook from "../WantToCook/WantToCook";
import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";
import PropTypes from 'prop-types';


const Cart = ({ carts, handlePreparing, currentlyCookingItem, preparingTime, caloriesSum }) => {
    // console.log("Want To Cook Items are: ", carts);

    return (
        <div className="border-2 py-4 w-auto rounded-xl">
            <div>
                <h1 className="text-2xl font-semibold text-[#282828] text-center mb-4">Want to cook: <span>{carts.length}</span></h1>
                <hr />
            </div>
            <div className="">
                <div className="overflow-x-visible">
                    <table className="table font-firaSans w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody className="p-0 mb-4">
                            {/* <!-- row 1 ::: WantToCook Table row --> */}
                            {
                                carts.map((p, idx) => <WantToCook
                                    key={p.recipe_id}
                                    id={idx}
                                    cartItem={p}
                                    handlePreparing={handlePreparing}
                                ></WantToCook>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

            {/* Currently Cooking Table */}
            <div>
                <div>
                    <h1 className="text-2xl font-semibold text-[#282828] text-center my-4">Currently Cooking: <span>{currentlyCookingItem.length}</span></h1>
                    <hr />
                </div>
                <div className="overflow-x-visible">
                    <table className="table font-firaSans w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody className="p-0 mb-4">
                            {/* <!-- row 1 ::: WantToCook Table row --> */}
                            {
                                currentlyCookingItem.map((rItem, idx) =>
                                    <CurrentlyCooking
                                        key={rItem.recipe_id}
                                        id={idx}
                                        cookingItem={rItem}

                                    ></CurrentlyCooking>)
                            }
                            <tr>
                                <td></td>
                                <td></td>
                                <th>Total Time: <span className="text-base">{preparingTime}</span> minutes </th>
                                <th>Total Calories: {caloriesSum} Calories</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};



Cart.propTypes = {
    carts: PropTypes.array,
    handlePreparing: PropTypes.func,
    currentlyCookingItem: PropTypes.array,
    preparingTime: PropTypes.number,
    caloriesSum: PropTypes.number

}

export default Cart;