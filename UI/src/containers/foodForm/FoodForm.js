import React from "react";

class FoodForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <label>
                    Title:
                    <input type="text" name="title" />
                </label>
                <label>
                    Description:
                    <textarea name="title"></textarea>
                </label>
                <label>
                    Pictures:
                    <input type="file" name="pictures" />
                </label>
                <label>
                    Cost:
                    <input type="number" name="cost" />
                </label>
                <label>
                    Cooking time:
                    <input type="number" name="cookingTime" />
                </label>
                <input type="submit" value="Add" />
            </form>
        );
    }
}

export default FoodForm;