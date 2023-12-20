import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Courses from "./components/Courses"
import Reviews from "./components/Reviews"
import Footer from "./components/Footer"
function App() {


  return (
    <>
    <Navbar/>
    <main>
      <div  id="home">
        <Home/>
      </div>
      <div id="about">
        <About/>
      </div>
      <div id="courses">
        <Courses/>
      </div>
      <div id="reviews">
        <Reviews/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
      <div id="footer">
        <Footer/>
      </div>
    </main>
    </>
  )
}

export default App
