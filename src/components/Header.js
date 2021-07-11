import React from 'react'
import { Navbar, Nav, Container, Row, FormControl, Form, Col } from 'react-bootstrap'
import './Header.css'

const Header = ({keyword, setKeyword}) => {


    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Row className="w-100 mx-auto">
                        <Col>
                            <Form className="w-100 mx-auto" inline>
                                <FormControl onChange={(e) => setKeyword(e.target.value)} value={keyword} type="text" placeholder="Search TV Series..." className="w-100" />
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Navbar>

        </header>
    )
}

export default Header
