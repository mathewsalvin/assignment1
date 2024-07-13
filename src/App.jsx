import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Navbar'
import Record from './Record'
import Product from './Product'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Record/>}></Route>
      <Route path='/add' element={<Product/>}></Route>
      </Routes>
      
    </>
  )
}

export default App