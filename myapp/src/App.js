import logo from './logo.svg';
import './App.css';
import Recipe from './components/recipe';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate
} from "react-router-dom";
import Navbar from './components/router';
import Signup from './components/signup';


import Login from './components/login';
import Recipecard from './components/recipecard';
import { useContext } from 'react';
import { GlobalContext } from './context';


function App() {
  const {state , dispatch} = useContext(GlobalContext)
  return (

    <div>
        <div>
        <Router>
        <Navbar />

        <Routes>
          {(state.isLogin === true) ?
            <>
              <Route path='/recipe' element={<Recipe />} />
              
              <Route path='*' element={<Navigate to ="/" />}></Route> //agr pg pe kch na dikhy tw home pe lejao

            </> : null}

          {(state.isLogin === false) ?
            <>
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />

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
