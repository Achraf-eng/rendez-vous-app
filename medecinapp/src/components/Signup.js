import React, { useRef, useState } from 'react'
//import Form from 'react-bootstrap/Form'
import { Col, Form, Alert } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"



export default function Signup() {
    const firstname = useRef()
    const lastname = useRef()
    const email = useRef()
    const password = useRef()
    const passwordConfirm = useRef()
    const address = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")
    // const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()


        if (password.current.value !== passwordConfirm.current.value) {
            return setError("Passwords do not match")
        }

        try {
            setError("")
            setLoading(true)
            await signup(email.current.value, password.current.value)
            // history.push("/")
            setMessage("you have successfully completed the registration")


        } catch {
            setError("Failed to create an account")
        }

        setLoading(false)

    }

    return (
        <div style={{
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            padding: "20px",
        }}>
            <Card style={{ width: "35rem" }}>
                <h2 className="text-center mb-4">Sign Up</h2>

                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}


                <Form style={{ padding: "10px" }} onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label htmlFor="inlineFormInputName2">
                                First Name
                            </Form.Label>
                            <Form.Control
                                className="mb-2 mr-sm-2"
                                id="inlineFormInputName2"
                                placeholder="first name"
                                ref={firstname}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label htmlFor="inlineFormInputName2">
                                Last Name
                            </Form.Label>
                            <Form.Control
                                className="mb-2 mr-sm-2"
                                id="inlineFormInputName2"
                                placeholder="last name"
                                ref={lastname}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" ref={email} required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="********" ref={password} required />
                            <Form.Text id="passwordHelpInline" muted>
                                Must be 8-20 characters long.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="********" ref={passwordConfirm} required />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St"
                            ref={address} />
                    </Form.Group>

                    <Button disabled={loading} variant="primary" type="submit" style={{ float: "right" }}>
                        Submit
                    </Button><br></br>
                    <div className="w-100 text-center mt-2">
                        Already have an account? <Link to="/Login">Log In</Link>
                    </div>
                </Form>
            </Card>

        </div>
    )
}


