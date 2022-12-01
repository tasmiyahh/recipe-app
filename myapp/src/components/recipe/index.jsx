import axios from "axios"
import "./index.css"
import { useState } from "react";
import { useEffect } from "react";
import Recipecard from "../recipecard";








const Recipe = () => {
    let ApiKey = "c41cae27a56d9e2a6ed31b3303018352";
    let AppId = "1e6dcaee";

    const [query , setquery] = useState("chicken")
    const[data , setData] = useState([])
    const [search , setSearch] = useState("")


    useEffect(()=>{
     getRecipe()
    } , [query]

    )
        
    const getRecipe = () => {
        
 
         axios.get(`https://api.edamam.com/search?q=${query}&app =http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_0123456789abcdef0123456789abcdef&app_id=${AppId}&app_key=${ApiKey}`
         )
             .then(function (response) {
                 // handle success
                 console.log(response.data.hits);
                 setData(response.data.hits)
             })
             .catch(function (error) {
                 // handle error
                 console.log(error);
             })
             .then(function () {
                 // always executed
             });
 
     }


     const getSearch =(e)=>{
        e.preventDefault()
        setquery(search)
     }
    
    

    return (
        <div>
            <form onSubmit={getSearch} className="recipeform">
                <input type="text"
                value= {search} className="input"
                onChange={(e)=>{
                    console.log(e.target.value)
                    setSearch(e.target.value)
                }}
                />
                <button type="submit">search</button>
            </form>

            <div className="recipe">
                <h1>RECIPE LIST</h1>
            <ol className="list">
                <li>Chicken Vesuvio</li>
                <li>Chicken Paprikash</li>
                <li>Baked Chicken</li>
                <li>Catalan Chicken</li>
                <li>Chicken Stew</li>
                <li>Chicken Liver pate</li>
                <li>Persian Chicken</li>
                <li>Kreplach (Chicken Dumplings)</li>
                <li>Chicken cacciatore</li>
            </ol>
        </div>

         

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