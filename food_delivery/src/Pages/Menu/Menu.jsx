import React, { useState } from 'react'
import ExploreMenu from '../../files/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../files/FoodDisplay/FoodDisplay'

function Menu() {

  const [category, setCategory] = useState("All");

  return (
    <div>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  )
}

export default Menu