import './Login.css';
import { Container, Form, Row, Button } from 'react-bootstrap'

const Login = () => {
    return (
        <Container className='login-section' >
            <Form className='main-login-form col-md-6 offset-3'>
                <Form.Group as={Row} controlId="formPlaintextEmail" className='mb-3'>
                    <Form.Label column sm="2">Email</Form.Label>
                    <Form.Control type="text" placeholder="Email" />
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword" className='mb-4'>
                    <Form.Label column sm="2">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className='login-btn offset-5' type='button'>Login</Button>
            </Form>
        </Container>
    )
}

export default Login