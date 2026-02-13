import { useState } from 'react'
import Header from './components/header'


import './App.css'
import HERO from './components/hero'
import ExploreOpportunities from './components/ExploreOpportunities'
import BuiltBySection from './components/builtbysection'
import Contact from './components/contactus'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <HERO/>
      <ExploreOpportunities/>
      <BuiltBySection/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
