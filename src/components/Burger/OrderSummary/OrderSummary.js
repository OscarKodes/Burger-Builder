import React, {Component} from "react";
import Aux from "../../../hoc/Awx/Awx";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
    // This could be a functional component, doesn't have to be a class.

    componentDidUpdate() {
        console.log("[OrderSummary] DidUpdate");
    }

    render () {

        const ingredients = this.props.ingredients;
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
                <p>
                    <strong>
                        Total Price: ${this.props.price.toFixed(2)}
                    </strong>
                </p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.cancel}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.continue}>CONTINUE</Button>
            </Aux>
        );
    }
};

export default OrderSummary;