import React,{useState} from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import "./index.css"
import Home from './pages/home/Home'

const App = () => {
  const [focusInSearch,setFocusInSearch] = useState(false)
  return (
    <BrowserRouter>
      <Routes>
          <Route path = "/" element = {<Home focusInSearch = {focusInSearch} setFocusInSearch = {setFocusInSearch}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
