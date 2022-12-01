import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import Recipe from "../recipe";
  import "./index.css"
  import axios from "axios";
  import { useContext } from "react";
  import { GlobalContext } from "../../context";

  const Navbar = ()=>{
  

    const {state , dispatch } = useContext(GlobalContext)

    
      const logoutHandler = async () => {
         let baseUrl = "http://localhost:5000";
         try {
           let response = await axios.post(`${baseUrl}/logout`, {},
             {
               withCredentials: true
             })
           console.log("response: ", response.data);

           dispatch({
            type : "USER_LOGOUT"
           })
             
            
         
     
         } catch (e) {
           console.log("Error in api call: ", e);
         }
       }
     
     
    
    return(
         <div className="navbar">
           {(state.isLogin === true)? 
          <>
          <ul>
              <li>
            <Link to="/recipe">recipe</Link> </li>
            <li><Link  className="logout" onClick={logoutHandler}>logout</Link></li>
            
          
          </ul>
          </> 
          : null
          }
         

         {(state.isLogin === false)? 
         <>
         <ul>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/login">Login</Link></li>

         </ul>
         </>
         :
         null
         }
         
         

        
        
       
        {/* // <div>
        //   <ul>
        //     <li>
        //      <NavLink to="/">signup  </NavLink>
          
         


        //     </li>
        //     <li>
        //     <NavLink to="/login">login </NavLink>
        //     </li>
        //     <li>
        //     <NavLink to="/recipe">recipe </NavLink>
        //     </li>
        //   </ul>

        // </div> */}

        </div>
    )
  }

  export default Navbar;