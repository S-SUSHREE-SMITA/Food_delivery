import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

function ExploreMenu({category,setCategory}) {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h2>Explore our menu</h2>
      <p className='explore-menu-text'>Choose Your Fav Ones</p>
      <div className='explore-menu-list'>
        {
          menu_list.map((item,index)=>{
            return(
              <div key={index} className='explore-menu-list-item' onClick={()=>setCategory(prev=>prev===item.menu_name?'All':item.menu_name)}> 
                <img src={item.menu_image} className={category===item.menu_name?'active':""}></img>
                <p style={{fontSize:'25px'}}>{item.menu_name}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ExploreMenu