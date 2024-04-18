import Container from "react-bootstrap/Container"

import Header from "./components/Header"

import Landing from "./components/Landing"

import Forms from "./components/Forms"
import FastestPitstops from "./components/FastestPitstops"
import FastestLaps from "./components/FastestLaps"


export default function App() {
  return (
    <Container fluid className='app'>
      <Header />
      <Landing/>
      <Forms/>
      <br/>
      <br/>
      <FastestPitstops/>
      <FastestLaps/>

     </Container> 
  )
}
