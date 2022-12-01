import logo from './logo.svg';
import './App.css';
import Recipe from './components/recipe';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Navbar from './components/router';
import Signup from './components/signup';
import axios from 'axios';
import Home from './components/home';


import Login from './components/login';
import Recipecard from './components/recipecard';
import { useContext , useEffect } from 'react';
import { GlobalContext } from './context';


function App() {
  let {state , dispatch} = useContext(GlobalContext)
  


  useEffect(() => {  //pg load hoty he profile ajaye chahy refresh kre issliye ye app ki file me dala h

    const getProfile = async () => {
      let baseUrl = "http://localhost:5000";
      try {
        let response = await axios({
          url: `${baseUrl}/profile`,
          method: "get",
          withCredentials: true
        })
        if (response.status === 200) {
          console.log("response: ", response.data);
          dispatch({  //ye relaod ya refresh pe pe data show profile ka isliye use is me nav bar kch nh aya coz hum ne route pe null likhha h 
            type: "USER_LOGIN",
            payload: response.data
          })
        } else {
          dispatch({
            type: "USER_LOGOUT"
          })
        }
      } catch (e) {
        console.log("Error in api call: ", e);
        dispatch({
          type: "USER_LOGOUT"
        })
      }
    }
    getProfile();
  }, [])
  return (

    <div >
        <div >
        <Router>
        <Navbar/>

        <Routes>           
          {(state.isLogin === true) ?
            <>
             
             <Route path='/recipe' element={<Recipe />} ></Route>
             <Route path='/' element={<Home />} ></Route>
             <Route path='*' element={<Navigate to ="/" />}></Route> 
            

            </> : null
}

{/* hmy navigation krne kliye firstly dekhna hoga kya wo pg login peavailable h like login ki surat me home dikhy ga tw navigate hoga wrna error ayen g */}

          {(state.isLogin === false) ?
            <>
              <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<Signup />} />
              <Route path='*' element={<Navigate to ="/signup" />}></Route>
        

            </> : null}



          {(state.isLogin === null) ?
            <>
              <Route path="*" element={<h1>loading</h1>}></Route>
             
            </> :
            null}

        </Routes>
      </Router>

          {/* <Router>
            <Navbar/>
         <Routes>

          <Route path='/' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/recipe' element={<Recipe/>}/>
         


          
         </Routes>


          </Router>
           */}

        </div>
      </div>
  );
}

export default App;
