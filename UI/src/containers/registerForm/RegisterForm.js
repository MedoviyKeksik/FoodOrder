import React from "react"

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Surname:
                    <input type="text" name="surname" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Phone:
                    <input type="phone" name="phone" />
                </label>
                <input type="submit" />
            </form>
        );
    }
}

export default RegisterForm;