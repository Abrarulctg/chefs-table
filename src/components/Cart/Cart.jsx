import { parse } from "postcss";
import WantToCook from "../WantToCook/WantToCook";

const Cart = ({ carts, wantToCookCount }) => {
    console.log(carts);
    // const { calories, ingredients, preparing_time, recipe_image, recipe_id, recipe_name, short_description } = carts;
    return (
        <div className="border-2 p-4">
            <div>
                <h1 className="text-2xl font-semibold text-[#282828] text-center">Want to cook: <span>{carts.length}</span></h1>
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
                        <tbody className="p-0">
                            {/* <!-- row 1 --> */}
                            {
                                carts.map((p, idx) => <WantToCook key={idx} cartItem={p} wantToCookCount={wantToCookCount}></WantToCook>)
                            }




                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;