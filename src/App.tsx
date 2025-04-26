import './App.css'
import Footer from './layouts/footer'
import Navbar from './layouts/navbar'

function App() {

  const routs = [
    {
      id:1,
      path:'/',
      element:''
    }
  ]

  return (
    <>
      <Navbar/>
      <Footer/>
    </>
  )
}

export default App
