import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
  } from "react-router-dom";
  import Recipe from "../recipe";

  const Navbar = ()=>{
    return(
        <div>
          
             <ul>
                <li><NavLink to="/">Signup</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/Recipe">Recipe</NavLink></li>
                <li><NavLink to="/logout">Logout</NavLink></li>
             </ul>


          
        </div>
    )
  }

  export default Navbar;