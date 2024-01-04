
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login' 
import SignUp from './screens/SignUp'
import CartProvider from './components/ContextReducer';

const App=()=> { 
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/createuser' element={<SignUp/>}/>
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}


export default App;
