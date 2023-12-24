
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login'

const App=()=> {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

// const App=()=>{
//   return(
//   <>
//   <Home/>
//   </>
//   )
// }

export default App;
