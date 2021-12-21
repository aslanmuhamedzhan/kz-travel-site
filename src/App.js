import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path='/services' exact element={<Services />} />
            <Route path='/products' exact element={<Products />} />
            <Route path='/sign-up' exact element={<SignUp />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
