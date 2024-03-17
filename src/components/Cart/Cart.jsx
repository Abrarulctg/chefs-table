import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";
import WantToCook from "../WantToCook/WantToCook";
import PropTypes from 'prop-types';


const Cart = ({ carts, handlePreparing }) => {
    console.log(carts);
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
                            {/* <!-- row 1 --> */}
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

            <CurrentlyCooking></CurrentlyCooking>
        </div>
    );
};



Cart.propTypes = {
    carts: PropTypes.object,
    handlePreparing: PropTypes.func
}

export default Cart;