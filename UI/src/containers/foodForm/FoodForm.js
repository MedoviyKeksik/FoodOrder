import React from "react";
import InputField from "../../components/inputField/InputField";
import { loadLoclization } from "../localeSwitcher/actions";
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
            pictures: "",
            cost: 0,
            cookingTime: 0
        }

        this.handleTitleChange = this.handleChange.bind(this, "title");
        this.handleDescriptionChange = this.handleChange.bind(this, "description");
        this.handlePictureChange = this.handleChange.bind(this, "picture");
        this.handleCostChange = this.handleChange.bind(this, "cost");
        this.handleCookingTimeChange = this.handleChange.bind(this, "cookingTime");
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.loadLoclization(localization);
    }

    handleChange(field, event) {
        const tmp = {};
        console.log(event);
        tmp[field] = event.target.value;
        this.setState(tmp);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addFoodToCatalog({
            title: this.state.title,
            description: this.state.description,
            cost: this.state.cookingTime,
            cookingTime: this.state.cookingTime
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
    loadLoclization,
    addFoodToCatalog
}

export default connect(null, mapDispatchToProps)(FoodForm);