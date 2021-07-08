import React from "react"

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: ''
        }

        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleLoginChange(event) {
        this.setState({login: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        // TODO: Login submit
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Phone/Email:
                    <input onChange={this.handleLoginChange} type="phone" name="phone" />
                </label>
                <label>
                    Password:
                    <input onChange={this.handlePasswordChange} type="password" name="password" />
                </label>
                <input type="submit" />
            </form>
        )
    }
}

export default LoginForm;