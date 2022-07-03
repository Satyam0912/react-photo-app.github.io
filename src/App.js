import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import NavbarComponent from './Components/NavbarComponent';
import Photos from './Components/Photos/Photos';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import EnlargeImage from './Components/EnlargeImage';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Notfound from './Components/Notfound';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent className="navbar" />
        <Routes>
          <Route path='/' element={<Photos />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/photo/:id' element={<EnlargeImage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Notfound />} />
          {/* <Route path='enlargeImage' element={<EnlargeImage />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;