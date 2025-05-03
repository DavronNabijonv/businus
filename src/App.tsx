import { Route, Routes } from 'react-router-dom'
import './App.css'
import AOS from "aos";
import Footer from './layouts/footer'
import Navbar from './layouts/navbar'
import Section1 from './layouts/section1'
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';

// determine context type
type LangContextType = {
  lang:string,
  setLang:React.Dispatch<React.SetStateAction<string>>;
}

export const ChangeLanguageValue = React.createContext<LangContextType>({
  lang:'uz',
  setLang:()=>{}
});


function App() {

  const [lang,setLang] = useState('uz');

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
    <ChangeLanguageValue.Provider value={{lang ,setLang}} >
      <Navbar/>
      <Routes>
        {routes.map(({ id, ...rest }) => (
          <Route key={id} {...rest} />
        ))}
      </Routes>
      <Footer/>
      <ToastContainer />
    </ChangeLanguageValue.Provider>
    </>
  )
}

export default App
