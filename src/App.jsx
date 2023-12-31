import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Addhouse from './pages/Addhouse';
import Viewhouse from './pages/Viewhouse';

//import './App.css';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
  

      <div className='pages'>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/addHouse"
            element={<Addhouse />}
          />
          <Route
            path="/viewhouse/:id"
            element={<Viewhouse />}
          />
        </Routes>
      </div>
      </BrowserRouter>
     </div>
  );
}

export default App;
