import Container from "react-bootstrap/Container"

import Header from "./components/Header"

import Landing from "./components/Landing"

import Forms from "./components/Forms"
import FastestPitstops from "./components/FastestPitstops"
import FastestLaps from "./components/FastestLaps"
import { Route, Routes } from "react-router-dom"

import FastestLapsPage from "./pages/FastestLapsPage"
import LandingPage from "./pages/LandingPage"
import PitstopPage from "./pages/PitstopPage"

export default function App() {
  return (
    <Container fluid className='app'>

      <Header />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/fastestlaps" element={<FastestLapsPage/>} />
        <Route path="/pitstops" element={<PitstopPage/>} />

      </Routes>

      {/* <Landing />
      <Forms />
      <br />
      <br />
      <FastestPitstops />
      <FastestLaps /> */}

    </Container>
  )
}
