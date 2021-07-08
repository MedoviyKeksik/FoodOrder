import React from "react"
import InputField from "../../components/inputField/InputField";

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            surname: '',
            email: '',
            phone: '',
            password: ''
        }

        this.handleNameChange = this.handleChange.bind(this, 'name');
        this.handleSurnameChange = this.handleChange.bind(this, 'surname');
        this.handleEmailChange = this.handleChange.bind(this, 'email');
        this.handlePhoneChange = this.handleChange.bind(this, 'phone');
        this.handlePassswordChange = this.handleChange.bind(this, 'password');
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field, event) {
        const tmp = {};
        tmp[field] = event.target.value;
        this.setState(tmp);
    }

    handleSubmit(event) {
        event.preventDefault();
        // TODO: Submit Registration data
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <InputField title="Name:" type="text" name="name" isRequired={true} onChange={this.handleNameChange} />
                <InputField title="Surname:" type="text" name="name" isRequired={true} onChange={this.handleSurnameChange} />
                <InputField title="Email:" type="email" name="email" isRequired={true} onChange={this.handleEmailChange} />
                <InputField title="Phone:" type="phone" name="phone" isRequired={true} onChange={this.handlePhoneChange} />
                <InputField title="Password:" type="password" name="password" isRequired={true} onChange={this.handlePasswordChange} />
                <input type="submit" />
            </form>
        );
    }
}

export default RegisterForm;