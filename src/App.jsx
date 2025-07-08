import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmpolyeeComponent from './components/ListEmpolyeeComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
            { /* // http://localhost:3000 */ }
            <Route path="/" element={<ListEmpolyeeComponent />}></Route>
            { /* // http://localhost:3000/employees */ }
            <Route path="/employees" element={<ListEmpolyeeComponent />}></Route>
            { /* // http://localhost:3000/add-employee */ }
            <Route path="/add-employee" element={ <EmployeeComponent />}></Route>
          </Routes>
        {/* Footer */}
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
