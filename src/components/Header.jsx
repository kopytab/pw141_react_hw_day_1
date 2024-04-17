import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container"

export default function Header() {
  return (
    <Navbar data-bs-theme='dark' className='main-heading'>
      <Container>
        <Navbar.Brand className='headtext'>Bryce's Portal</Navbar.Brand>
      </Container>
    </Navbar>
  )
}
