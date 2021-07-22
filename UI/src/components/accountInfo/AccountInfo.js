

function AccountInfo(props) {
    return (
        <table>
            <tr>
                <td>Name</td>
                <td>{props.name}</td>
            </tr>
            <tr>
                <td>Surname</td>
                <td>{props.surname}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>{props.email}</td>
            </tr>
            <tr>
                <td>Phone</td>
                <td>{props.phone}</td>
            </tr>
        </table>
    );
}

export default AccountInfo;