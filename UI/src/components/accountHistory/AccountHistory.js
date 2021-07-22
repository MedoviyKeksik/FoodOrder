
function AccountHistory(props) {
    let rows = props.items.map((item) => 
        <tr>
            <td>{item.imageSource}</td>
            <td>{item.title}</td>
            <td>{item.count}</td>
            <td>{item.cost}</td>
        </tr>
    );
    if (rows.length > 0)
        return (
            <table>
                {rows}
            </table>
        );
    else 
        return <></>
}

export default AccountHistory