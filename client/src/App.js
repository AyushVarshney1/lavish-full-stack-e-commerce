import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {ProtectedRoute, Register, Home, Products, Contact} from './pages/index.js';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<ProtectedRoute />}>
          <Route index element = {<Home />} />
          <Route path = 'products' element = {<Products />} />
          <Route path = 'contact' element = {<Contact />} />
        </Route>
        <Route path = '/register' element = {<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
