import './App.css';
import Login from './components/Login'
import Register from './components/Register';
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
