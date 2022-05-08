import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../Login/Sociallogin/SocialLogin';
import Loading from '../Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false)

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        // navigate('/home');
        console.log('user', user)
    }

    const handleRegister = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password    )

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })
        console.log('Update profile')
        navigate('/home')

        // if (agree) {
        //     createUserWithEmailAndPassword(email, password);
        // }

    }

    return (
        <div className='register'>
            <div className='w-50 mx-auto'>
                <div className='register-form'>
                    <h2 style={{ textAlign: 'center' }}>Please Register</h2>
                    <form onSubmit={handleRegister}>
                        <input type="text" name="name" id="" placeholder='Your Name' />

                        <input type="email" name="email" id="" placeholder='Email Address' required />

                        <input type="password" name="password" id="" placeholder='Password' required />
                        <p className='mt-3 align-items-center'>
                            <input onClick={() => setAgree(!agree)} className='m-2' type="checkbox" name="terms" id="terms" />
                            <label className={agree ? 'text-light' : 'text-danger'} htmlFor="terms">Agree with the term and condition </label>

                            {/* <label className={`ps-2  ${agree ? '': 'text-danger'}`} htmlFor="terms">Agree with the term and condition </label> */}
                        </p>

                        <input disabled={!agree} className='btn btn-primary w-50 mx-auto' type="submit" value="Register" />


                    </form>
                    <p><span className='text-light'>Already have an account? </span>  <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>

                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>


    );
};

export default Register;