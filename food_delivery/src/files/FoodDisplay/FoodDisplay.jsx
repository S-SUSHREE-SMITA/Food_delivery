import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

function FoodDisplay({category}) {
    const {food_list} = useContext(StoreContext)
    return (
        <div className='food-display' id='food-display'>
            <h2 style={{textAlign:"center", color:"maroon"}}>Top Dishes for you</h2>
            <div className='food-display-list'>
                {food_list.map((item,index)=>{
                    if(category==='All' || category.toLowerCase() === item.category.toLowerCase()){
                        return <FoodItem key={index} id={item.id} name={item.name} price={item.price} category={item.category} image={item.image} />
                    }
                })}
            </div>
        </div>
    )
}

export default FoodDisplay