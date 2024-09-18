import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CardList from './components/CardList';
import Contact from './components/Contact';
import About from './components/About';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Profile from './components/Profile';
import Footer from './components/Footer';
import CheckOut from './components/CheckOut';
import Admin from './components/Admin';

function App() {
  return (
    <div id="root">
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AddToCart' element={<CardList />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
