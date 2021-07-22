
function AccountHistory(props) {
    let content = props.items.map((item) => { 
        let rows = item.food.items.map((item) => 
            <tr>
                <td>item.imageSource</td>
                <td>item.title</td>
                <td>item.count</td>
                <td>item.cost</td>
            </tr>
        );
        return (
            <table>
                <caption>{item.orderId}</caption>
                {rows}
            </table>
        );
    });
    return {content};
}

export default AccountHistory