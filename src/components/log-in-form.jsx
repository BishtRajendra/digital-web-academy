import { useEffect, useState } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../data-access/api/login-user-api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    username: '',
    email: '',
    password: '',
    rememberMe: false
};

const LogInForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [values, setValues] = useState(initialValue);
    const userStore = useSelector((state) => state.user);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(values));
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setValues(prevValues => ({
            ...prevValues,
            [name]: newValue
        }));
    }

    useEffect(() => {
        if (userStore.statuscodes === 201) {
            navigate('/users-data');
            setValues(initialValue);
        }
    }, [userStore.statuscodes, navigate]);

    return (
        <>
            <Row className='justify-content-center align-items-center'>
                <Col lg={4} md={4} sm={8} xs={10}>
                    <h1 className='text-center text-white'>Log In</h1>
                    <Card>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicUserName">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" onChange={handleChange} name='username' value={values.username} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={handleChange} name='email' value={values.email} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={handleChange} name='password' value={values.password} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" onChange={handleChange} name='rememberMe' checked={values.rememberMe} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default LogInForm;
