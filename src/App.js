import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Shared/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>

    </div>
  );
}

export default App;
