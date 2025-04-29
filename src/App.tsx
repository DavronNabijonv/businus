import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './layouts/footer'
import Navbar from './layouts/navbar'
import Section1 from './layouts/section1'

function App() {

  const routes = [
    {
      id:1,
      path:'/',
      element:<Section1/>
    }
  ]

  return (
    <>
      <Navbar/>
      <Routes>
        {routes.map(({ id, ...rest }) => (
          <Route key={id} {...rest} />
        ))}
      </Routes>
      <Footer/>
    </>
  )
}

export default App
