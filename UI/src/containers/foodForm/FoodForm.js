import React from "react";
import InputField from "../../components/inputField/InputField";
import { store } from "../../store";
import { loadLoclization } from "../localeSwitcher/actions";
import { FOODORDER_FOODFORM_COOKINGTIME, FOODORDER_FOODFORM_COST, FOODORDER_FOODFORM_DESCRIPTION, FOODORDER_FOODFORM_PICTURE, FOODORDER_FOODFORM_TITLE } from "./constants";
import localization from './messages';

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
        store.dispatch(loadLoclization(localization));
    }

    handleChange(field, event) {
        const tmp = {};
        console.log(event);
        tmp[field] = event.target.value;
        this.setState(tmp);
    }

    handleSubmit(event) {
        event.preventDefault();
        // TODO: Submit food form
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <InputField titleDefault="Title: " titleId={FOODORDER_FOODFORM_TITLE} inputType="text" name="title" isRequired={true} onChange={this.handleTitleChange} />
                <InputField titleDefault="Description:" titleId={FOODORDER_FOODFORM_DESCRIPTION} inputType="textarea" name="description" onChange={this.handleDescriptionChange} />
                <InputField titleDefault="Picture:" titleId={FOODORDER_FOODFORM_PICTURE} inputType="file" name="picture" onChange={this.handlePictureChange} />
                <InputField titleDefault="Cost:" titleId={FOODORDER_FOODFORM_COST} inputType="number" name="cost" isRequired={true} onChange={this.handleCostChange} />
                <InputField titleDefault="Cooking time:" titleId={FOODORDER_FOODFORM_COOKINGTIME} inputType="number" name="cookingTime" isRequired={true} onChange={this.handleCookingTimeChange} />
                <input type="submit" value="Add" />
            </form>
        );
    }
}

export default FoodForm;