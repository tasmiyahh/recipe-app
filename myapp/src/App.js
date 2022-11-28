import logo from './logo.svg';
import './App.css';
import Recipe from './components/recipe';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import Navbar from './components/router';
import Login from './components/signup';
import Logout from './components/logout';
import Signup from './components/login';

function App() {
  return (
    <div>
        <div>
           <Router>
            <Navbar/>


             <Routes>
                <Route path="/" element={<Signup/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/recipe" element={<Recipe/>} />
                <Route path="/logout" element={<Logout/>} />
                   
                
             </Routes>


           </Router>

        </div>
      </div>
  );
}

export default App;
