import { BrowserRouter, Routes, Route } from 'react-router-dom'

//components
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Nav from './components/Home/Nav';


function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={''}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>      
    </BrowserRouter>
  )
}

export default App
