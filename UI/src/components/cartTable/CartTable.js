import CartRow from "../../containers/cartRow/CartRow";


function CartTable(props) {
    let rows = props.food.map((food) => 
        <CartRow
            imageSource={food.imageSource}
            title={food.title}
            count={food.count}
            cost={food.cost}
        />
    );
    return (
        <table className="cart-table">
            <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Count</th>
                <th>Cost</th>
                <th>Time</th>
                <th>CancellationButton</th>
            </tr>
            {rows}
        </table>
    );
}

export default CartTable;