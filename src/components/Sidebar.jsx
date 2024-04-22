import Navbar from 'react-bootstrap/Navbar'

import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'


export default function Sidebar() {
    return (
        <Navbar sticky='top' className='flex-column sidebar' id='sidebar'>
           <Link to="/">Home</Link>
           <Link to="/fastestlaps">Fastest Laps</Link>
           <Link to="/pitstops">Fastest Pit Stops</Link>
        </Navbar>
    )
} 

{/* <Nav.Item>
                <Nav.Link href='/'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href='/fastestlaps'>Fastest Laps</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href='/pitstops'>Fastest Pit Stops</Nav.Link>
            </Nav.Item> */}