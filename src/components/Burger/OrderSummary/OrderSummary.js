import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    //This can be a functional component, doesnt have to be a Class

    componentDidUpdate() {
        console.log('Order Summary: order update')
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}> {igKey} </span>: {this.props.ingredients[igKey]}
                    </li>);
            });

        return (
            <Aux>
                <h3>Order Summary</h3>
                <p>Here are the add-ons:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchasedCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchasedContinued}>CONTINUE</Button>
            </Aux>
        );
    }
};

export default OrderSummary;