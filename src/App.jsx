import { Link } from 'react-router-dom';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import About from '../component/About';
import './App.css';
import { useState } from 'react';

function App() {
  const [searchParams,setSearchParams] = useSearchParams();
  const id = searchParams.get('id');
  const name = searchParams.get('name');
  const navigate=useNavigate();
  // Log values to the console (optional for debugging)
  console.log('ID:', id);
  console.log('Name:', name);
  const handleClick = () => {
    navigate('/about', { state: { id: 7, name: 'priyam' } });
  };
  const handleparam=()=>
  {
    setSearchParams({ id: 7, name: 'priyam' });
  }
  return (
    <div>
      <h1>URL Parameters</h1>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <Routes>
        <Route path='/about' element={<About />} />
      </Routes>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleparam}>param</button>
      <Link to="/about">About</Link>

    </div>
  );
}

export default App;
