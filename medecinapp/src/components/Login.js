import React, { useRef, useState } from 'react'
import Card from 'react-bootstrap/Card';
import image from '../image/1.jpg';
import { Form, Button, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const divStyle = {

    height: "100vh",
    display: "flex",
    overflow: "hidden",
    justifyContent: "center",
    alignContent: "center",
    padding: "60px"
};
const cardstyle = {
    width: '25rem',
    height: '30rem',

}

export default function Login() {
    const email = useRef()
    const password = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(email.current.value, password.current.value)
            history.push("/")
        } catch {
            setError("Failed to log in")
        }

        setLoading(false)
    }
    return (
        <div className="form-group" style={divStyle}>

            <Card.Img variant="top" src={image} style={{
                width: '30rem',
                height: '30rem',
                backgroundColor: 'black',
                borderRadius: '10px',
            }} />

            <Card style={cardstyle}>

                <Card.Body>
                    <h1 style={{ textAlign: "center", marginTop: "15%", }}>Espace Client</h1><br></br>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="example@email.org" ref={email} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="********" ref={password} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">
                            Log In
                        </Button>
                    </Form>
                    <div className="w-100 text-center mt-2">
                        Need an account? <Link to="/Signup">Sign Up</Link>
                    </div>

                </Card.Body>
            </Card>

        </div >
    )
}


