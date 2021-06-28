
import Fcalendar from './calendar/Fcalendar'
import Eventcal from './calendar/Eventcal'
import Navbar from 'react-bootstrap/Navbar'
import React, { useState } from "react"
import {  Button, Alert } from "react-bootstrap"
import { useAuth } from "../context/AuthContext"
import {  useHistory } from "react-router-dom"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
  
      <Button variant="primary" onClick={handleLogout} style={{float:"right",marginLeft:"1050px"}}>
          Log Out
        </Button>
    
  </Navbar.Collapse>
</Navbar>
      {error && <Alert variant="danger">{error}</Alert>}
      
      <div style={{display:"flex",
                    justifyContent: "center",
                    alignContent: "center",
                    marginTop:"15px"}}>
            <Fcalendar />
            <Eventcal />
        </div>
    </>
  )
}

