import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' }, 
    { label: 'Bacon', type: 'bacon' }, 
    { label: 'Cheese', type: 'cheese' }, 
    { label: 'Meat', type: 'meat' }, 
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>

        <p><strong>Total: </strong> {props.price.toFixed(2)}</p>

        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} // 'salad', 'bacon'...
            />
        ))}
        <button onClick={props.ordered} disabled={props.purchasable} className={classes.OrderButton}>CHECKOUT</button>

    </div>

);

export default buildControls;