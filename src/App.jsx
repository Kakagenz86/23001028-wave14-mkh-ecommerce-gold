import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import DetailCarPage from './pages/DetailCarPage';
import NotFound from './pages/NotFound';
import SignInPages from './components/Sign-In/signIn';
import SearchResult from './pages/SearchResult';
import SignUpPages from './components/Sign-Up/signup';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/signin" element={<SignInPages/>}/>
          <Route path="/signup" element={<SignUpPages/>}/>
          <Route path="/search" element={<SearchResult/>}/>
          <Route path="/detail/:id" element={<DetailCarPage/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
