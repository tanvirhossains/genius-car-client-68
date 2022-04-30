import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from './Sociallogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import axios from 'axios';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);
    let errorElement;

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()

    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const handleSubmit = async (event) => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        await signInWithEmailAndPassword(email, password)
        const {data} = await axios.post('http://localhost:5000/login', {email});
        localStorage.setItem('accessToken', data.accessToken)
        navigate(from ,{replace:true})
    }



    const resetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email ')
        }
    }
    
    if (loading || sending) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p>Error: {error?.message}</p>
    }
    if (user) {
        // navigate(from, { replace: true });
    }



    const handleRegister = event => {
        navigate('/register')
    }

    return (
        <div className='w-50 mx-auto '>
            <PageTitle title='login'></PageTitle>
            <h2 className='text-primary text-center mt-2'>Log in page!!!!!</h2>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                    <p className='text-danger'> {errorElement}</p>
                </Form.Group>

                <p>Register in Genius car service? <span onClick={handleRegister} className='text-primary'>Register </span></p>
                <p>Forget password? <span onClick={resetPassword} className='text-primary'>Reset password </span></p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;