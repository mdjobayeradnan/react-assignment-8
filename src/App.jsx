
import { Routes,Route,  } from 'react-router'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import NavBar from './components/NavBar/NavBar'
import PageError from './components/PageError/PageError'


function App() {
 

  return (
    <>

<div>

</div>

    <NavBar></NavBar>

     <Routes>
      {/* <Route path='/'element={<Home></Home>}/>
     
      <Route path='/about'element={<About></About>}/>
      <Route path='/*'element={<PageError></PageError>}/> */}
     </Routes>
  
    </>
  )
}

export default App
