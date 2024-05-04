import logo from './logo.svg';
import './App.css';

import Nav from './components/navbar/Nav';

import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Stack from './components/stack/Stack';
import Events from './components/events/Events';
import Partners from './components/partners/Partners';
import Register from './components/register/Register';

function App() {
  return (
    <div>
      <Nav/>
      <Home/>
      <Stack/>
      <Events/>
      <Partners/>
      <Register/>
      <Footer/>       
    </div>
  );
}

export default App;
