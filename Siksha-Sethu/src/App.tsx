import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"
import HERO from "./components/hero"
import ExploreOpportunities from "./components/ExploreOpportunities"
import BuiltBySection from "./components/builtbysection"
import Contact from "./components/contactus"
import MainPage from "./pages/mainpage"

function HomePage() {
  return (
    <>
    <Header />
      <HERO />
      <ExploreOpportunities />
      <BuiltBySection />
      <Contact />
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/opportunities" element={<MainPage />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
