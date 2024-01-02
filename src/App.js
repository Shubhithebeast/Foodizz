
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login'
import SignUp from './screens/SignUp'

const App=()=> { 
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/createuser' element={<SignUp/>}/>
        </Routes>
      </div>
    </Router>
  );
}


export default App;
