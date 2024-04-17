import Container from "react-bootstrap/esm/Container";

import { useState } from "react"


export default function Forms() {

    const [ user, setUser] = useState({});

    console.log(user)


return (
    <Container>
        <h2>Sign Up Here!</h2>
        <form action=''>
            <label htmlFor='username'>username</label><br />
            <input type='text' name='username' value={user.username}onChange={(e)=>{ setUser({...user, username:e.target.value})}} /><br />
            <label htmlFor='email'>email</label><br />
            <input type='text' name='email' value={user.email}onChange={(e)=>{ setUser({...user, emai: e.target.value})}} /><br />
            <label htmlFor='password'>password</label><br />
            <input type='text' name='confirm-password' value={user.password}onChange={(e)=>{ setUser({...user, password:e.target.value})}} /><br />
            <label htmlFor='confirm-password'>confirm-password</label><br />
            <input type='text' name='confirm-password' value={user.confirmPassword}onChange={(e)=>{ setUser({...user, confirmPassword: e.target.value})}} /><br />
            <br />
            <input type='button' name='Sign Up' value='Sign Up' className='signupbtn'/>
        </form>
    </Container>
  )
}
