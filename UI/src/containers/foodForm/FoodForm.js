import React from "react";
import InputField from "../../components/inputField/InputField";

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
                <InputField title="Title:" type="text" name="title" isRequired={true} onChange={this.handleTitleChange} />
                <InputField title="Description:" type="textarea" name="description" onChange={this.handleDescriptionChange} />
                <InputField title="Picture:" type="file" name="picture" onChange={this.handlePictureChange} />
                <InputField title="Cost:" type="number" name="cost" isRequired={true} onChange={this.handleCostChange} />
                <InputField title="Cooking time:" type="number" name="cookingTime" isRequired={true} onChange={this.handleCookingTimeChange} />
                <input type="submit" value="Add" />
            </form>
        );
    }
}

export default FoodForm;