import React from "react";
import InputField from "../../components/inputField/InputField";
import { loadLocalization } from "../localeSwitcher/actions";
import { addFoodToCatalog } from "./actions";
import { FOODORDER_FOODFORM_ADDBUTTON, FOODORDER_FOODFORM_COOKINGTIME, FOODORDER_FOODFORM_COST, FOODORDER_FOODFORM_DESCRIPTION, FOODORDER_FOODFORM_PICTURE, FOODORDER_FOODFORM_TITLE } from "./constants";
import localization from './messages';
import './FoodForm.scss';
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";

class FoodForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
            picture: "",
            cost: 0,
            cookingTime: 0,
            file: null
        }

        this.handlePictureChange = this.handlePictureChange.bind(this);
        this.handleTitleChange = this.handleChange.bind(this, "title");
        this.handleDescriptionChange = this.handleChange.bind(this, "description");
        this.handleCostChange = this.handleChange.bind(this, "cost");
        this.handleCookingTimeChange = this.handleChange.bind(this, "cookingTime");
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.loadLoclization(localization);
    }

    handlePictureChange(event) {
        this.setState({
            file: event.target.files[0]
        });
    }

    toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = () => resolve(btoa(reader.result));
        reader.onerror = error => reject(error);
    });

    handleChange(field, event) {
        const tmp = {};
        tmp[field] = event.target.value;
        this.setState(tmp);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.toBase64(this.state.file).then(imageBase64 => {
            this.props.addFoodToCatalog({
                locales: [
                    { 
                        locale: "en",
                        title: this.state.title,
                        description: this.state.description 
                    }
                ],
                defaultLocale: "en",
                cost: this.state.cost,
                timeToCook: this.state.cookingTime,
                filename: this.state.file.name,
                image: imageBase64
            });
        });
    }

    render() {
        return (
            <form className="food-form" onSubmit={this.handleSubmit}>
                <InputField 
                    label={<FormattedMessage defaultMessage="Title: " id={FOODORDER_FOODFORM_TITLE} />} 
                    inputType="text" 
                    name="title" 
                    isRequired={true} 
                    onChange={this.handleTitleChange} 
                />
                <InputField 
                    label={<FormattedMessage defaultMessage="Description:" id={FOODORDER_FOODFORM_DESCRIPTION} />} 
                    inputType="textarea" 
                    name="description" 
                    onChange={this.handleDescriptionChange} 
                />
                <InputField 
                    label={<FormattedMessage defaultMessage="Picture:" id={FOODORDER_FOODFORM_PICTURE} />} 
                    inputType="file" 
                    name="picture" 
                    onChange={this.handlePictureChange} 
                />
                <InputField 
                    label={<FormattedMessage defaultMessage="Cost:" id={FOODORDER_FOODFORM_COST} />} 
                    inputType="number" 
                    name="cost" 
                    isRequired={true} 
                    onChange={this.handleCostChange} 
                />
                <InputField 
                    label={<FormattedMessage defaultMessage="Cooking time:" id={FOODORDER_FOODFORM_COOKINGTIME} />} 
                    inputType="number" 
                    name="cookingTime" 
                    isRequired={true} 
                    onChange={this.handleCookingTimeChange} 
                />
                <button type="submit">
                    <FormattedMessage defaultMessage="Add" id={FOODORDER_FOODFORM_ADDBUTTON} />
                </button>
            </form>
        );
    }
}

const mapDispatchToProps = {
    loadLoclization: loadLocalization,
    addFoodToCatalog
}

export default connect(null, mapDispatchToProps)(FoodForm);