import React, { useState } from 'react'
import './Home.css'
import Header from '../../files/Header/Header'
import ExploreMenu from '../../files/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../files/FoodDisplay/FoodDisplay';

function Home() {
  const [category,setCategory]=useState('All');
  return (
    <div >
      <Header/>
      <div id="explore-menu">
        <ExploreMenu category={category} setCategory={setCategory} />
      </div>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home