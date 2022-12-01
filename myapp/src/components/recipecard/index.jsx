
import React from 'react';
import { useState } from 'react';
import "./index.css"

const Recipecard = ({ title, calories, ingredients, image }) => {
  
  return (
    <>
    <div>
    <div className='recipe'>
      
      <h2 className='title'> {title}</h2>
      
     
    <div className="ingredients">
    <p >
        <h4>Ingredients</h4>
        {ingredients.map((eachitem)=>(
          
           <ol>
            <li> { eachitem.text }</li>
           </ol>
            
        ))}
    
      </p>
      <p>
      <img src={image} alt="" />
      </p>
    </div>
      
    </div>
    </div>
    </>
  )
}

export default Recipecard;