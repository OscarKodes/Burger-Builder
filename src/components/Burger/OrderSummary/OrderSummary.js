import React from "react";
import Aux from "../../../hoc/Awx";

const orderSummary = (props) => {

    const ingredients = props.ingredients;
    const ingredientSummary = Object.keys(ingredients)
        .map(igKey => {

            return (
                <li key={igKey}>
                    <span style={{textTransform: "capitalize"}}>{igKey}</span>
                    : {ingredients[igKey]}
                </li>
            )
        })

    

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    );
};

export default orderSummary;