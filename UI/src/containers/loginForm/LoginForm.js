import React from "react"

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <label>
                    Phone:
                    <input type="phone" name="phone" />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <input type="submit" />
            </form>
        )
    }
}

export default LoginForm;