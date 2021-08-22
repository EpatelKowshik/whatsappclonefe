import React from 'react'
import Sidebar from './Sidebar';
import OpenConversation from './OpenConversation';
import { useConversations } from '../contexts/ConversationsProvider';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Dashboard({ id }) {
  const { selectedConversation } = useConversations()

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          MessagingApp
        </Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <div className="d-flex" style={{ height: '90vh' }}>
      <Sidebar id={id} />
      {selectedConversation && <OpenConversation />}
    </div>
    </>
  )
}
