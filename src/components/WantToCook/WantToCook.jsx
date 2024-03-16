
const WantToCook = ({ cartItem, wantToCookCount }) => {
    console.log(wantToCookCount);

    return (
        <tr className="bg-[#28282808] mt-10 px-">
            <th>{wantToCookCount}</th>
            <td>rec name</td>
            <td>20 minutes</td>
            <td>400 calories</td>
            <td><button className="btn btn-chef-primary rounded-full">Preparing</button></td>
        </tr>

    );
};

export default WantToCook;