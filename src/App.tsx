import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Hero"
import FAQs from "./components/FAQs"
import About from "./components/About"
import HowItWorks from "./components/HowItWorks"
import RegistrationOptions from "./components/RegistrationOptions"

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <RegistrationOptions />
      <FAQs />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App