import React from "react"
import InputField from "../../components/inputField/InputField";
import { store } from "../../store";
import { loadLoclization } from "../localeSwitcher/actions";
import { userLogin } from "./actions";
import { FOODORDER_LOGINFORM_LOGIN, FOODORDER_LOGINFORM_PASSWORRD } from "./constants";
import localization from './messages'

store.dispatch(loadLoclization(localization));

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
        store.dispatch(userLogin({
            login: this.state.login,
            password: this.state.password
        }));
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <InputField titleDefault="Phone/Email:" titleId={FOODORDER_LOGINFORM_LOGIN} type="text" name="login" isRequired={true} onChange={this.handleLoginChange} />
                <InputField titleDefault="Password:" titleId={FOODORDER_LOGINFORM_PASSWORRD} type="password" name="password" isRequired={true} onChange={this.handlePasswordChange} />
                <input type="submit" />
            </form>
        )
    }
}

export default LoginForm;