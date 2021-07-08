import React from "react"
import InputField from "../../components/inputField/InputField";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: ''
        }

        this.handleLoginChange = this.handleChange.bind(this, 'login');
        this.handlePasswordChange = this.handleChange.bind(this, 'password');
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(field, event) {
        const tmp = {};
        tmp[field] = event.target.value;
        this.setState(tmp);
    }

    handleSubmit(event) {
        // TODO: Login submit
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <InputField title="Phone/Email:" type="text" name="login" isRequired={true} onChange={this.handleLoginChange} />
                <InputField title="Password:" type="password" name="password" isRequired={true} onChange={this.handlePasswordChange} />
                <input type="submit" />
            </form>
        )
    }
}

export default LoginForm;