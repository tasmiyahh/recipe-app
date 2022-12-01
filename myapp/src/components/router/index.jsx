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
      <>
      <div className="userName"><h3>{state?.user?.firstName} {state?.user?.lastName}</h3>

      </div>
         <div className="navbar">
            {(state.isLogin === true)? 
          <div>
          <ul>
              <li>
            <Link to="/recipe">Recipe</Link> </li>
           <li> <Link to="/">home</Link> </li>
            <li><Link to= "/"  className="logout" onClick={logoutHandler}>logout</Link></li>
            
          
          </ul>
          </div>
          
          : null
          }
         

         {(state.isLogin === false)? 
         <div>
         <ul>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/login">Login</Link></li>
   

         </ul>
         </div>
         :
         null
         }
         
         

        
       
         {/* <div>
           <ul>
             <li>
              <Link to="/">signup  </Link>
          
         


           </li>
            <li>
         <Link to="/login">login </Link>
            </li>
             <li>
            <Link to="/recipe">recipe </Link>
            </li>
            <li><Link  className="logout" onClick={logoutHandler}>logout</Link></li>
          </ul>

        </div> */}

        </div>
        </>
    )
  }

  export default Navbar;