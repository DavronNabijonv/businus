import { Route, Routes } from 'react-router-dom'
import './App.css'
import AOS from "aos";
import Footer from './layouts/footer'
import Navbar from './layouts/navbar'
import Section1 from './layouts/section1'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify';

function App() {

   // aos animation 
   useEffect(() => {
    AOS.init({
      duration: 1000, // animatsiya davomiyligi (ms)
      once: true, // har doim emas, faqat birinchi ko‘rinishda
    });
  }, []);

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
      <ToastContainer />
    </>
  )
}

export default App
