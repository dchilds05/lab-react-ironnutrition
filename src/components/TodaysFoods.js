import React from "react";

export default function TodaysFoods (props) {

    const {foodState} = props

    const selectedFoods = foodState.filter((food) => food.quantity > 0)

    const calCount = selectedFoods.reduce((calCount, food)=>{return calCount+=food.quantity*food.calories}, 0)

    function deleteFood (event) {
        props.deleteFunction(event.target.name);
    }

    return <div>
        <ul>
            {
            selectedFoods.map(food =>{
                    return <li className = "panel">

                    {food.quantity} {food.name} = {(food.quantity*food.calories)} cal

                    <img name={food.name} onClick={deleteFood} src="/trash.png" alt="trash" style={{width: 20, position: "absolute", right: 40}}/>
                    
                    </li>
                    })
            }
        </ul>
        <br></br>
        <p className = "menu-label title is-4">Total: {calCount} cal</p>
    </div>
}