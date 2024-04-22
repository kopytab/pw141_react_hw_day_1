import { Container } from "react-bootstrap";
import Landing from "../components/Landing";
import Body from "../components/Body";
import Forms from "../components/Forms";


export default function LandingPage() {
  return (
    <Body sidebar>
        <Container className="landingcont">
        <Landing/>
        <Forms/>
        </Container>
        <br/>
        <Container className="formscont">

        </Container>
    </Body>
  )
}
