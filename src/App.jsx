
import { Routes,Route,  } from 'react-router'
import './App.css'
import Home from './components/Home/Home'

import NavBar from './components/NavBar/NavBar'
import PageError from './components/PageError/PageError'

import ListedBooks from './components/ListerBooks/ListedBooks'


function App() {
 

  return (
    <>

<div>

</div>

    <NavBar></NavBar>


     <Routes>
      
      <Route path='/'element={<Home></Home>}/>
     
      <Route path='/listBook'element={<ListedBooks></ListedBooks>}/>


      <Route path='/*'element={<PageError></PageError>}/>
     </Routes>
  
    </>
  )
}

export default App
