import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import Recipecard from "../recipecard";







const Recipe = () => {
    let ApiKey = "c41cae27a56d9e2a6ed31b3303018352";
    let AppId = "1e6dcaee";

    const [recipe , setRecipe] = useState("")
    const[data , setData] = useState([])


    
        const submithandler = (e) => {
           e.preventDefault()
    
            axios.get(`https://api.edamam.com/search?q=${recipe}&app =http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_0123456789abcdef0123456789abcdef&app_id=${AppId}&app_key=${ApiKey}`
            )
                .then(function (response) {
                    // handle success
                    console.log(response.data);
                    setData(response.data)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
    
        }
    
    
    

    return (
        <div>
            <form onSubmit={submithandler}>
                <input type="text" 
                onChange={(e)=>{
                    console.log(e.target.value)
                    setRecipe(e.target.value)
                }}
                />
                <button type="submit">search</button>
            </form>

         

            <div className="recipies">
        {data.map((eachRecipe, index) => (
          <Recipecard
            key={index}
            title={eachRecipe.recipe.label}
            calories={eachRecipe.recipe.calories}
            image={eachRecipe.recipe.image}
            ingredients={eachRecipe.recipe.ingredients}
          />
        ))}
      </div>
            
              {/* <div> {data.map((eachrecipe, index) => {
                    return (
                        <Recipecard
                            key={index}
                           
                            title = {eachrecipe.recipe.label}
         
                           
                        />)
                })}
                </div> */}


        </div>

        
    )
}

export default Recipe;