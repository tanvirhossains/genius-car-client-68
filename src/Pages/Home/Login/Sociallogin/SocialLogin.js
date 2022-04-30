import React from 'react';
import google from '../../../../images/social/google.png'
import facebook from '../../../../images/social/facebook.png'
import github from '../../../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, gi, error1] = useSignInWithGithub(auth);

    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate(auth)
    let errorValue;
    if (error || error1) {
        errorValue = (
            <div>
                <p>Error: {error?.message} {error1.message}</p>
            </div>
        );
    }
    if (user || user1) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-light w-50 '></div>
                <p className='m-2 text-light'>or</p>
                <div style={{ height: '1px' }} className='bg-light w-50'></div>
            </div>
            <p>{errorValue}</p>
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary w-50 d-block mx-auto  my-3'>
                    <img src={google} alt="" />
                    <span className='p-3'>Google sigh in</span>  </button>
            </div>
            <div>
                <button className='btn btn-danger w-50 d-block mx-auto  my-3'>
                    <img src={facebook} alt="" />
                    <span className='p-3'>  Facebook sigh in</span> </button>
            </div>
            <div>
                <button onClick={() => signInWithGithub()} className='btn btn-primary w-50 d-block mx-auto  my-3'>
                    <img src={github} alt="" />
                    <span className='p-3'>github sigh in</span>   </button>
            </div>
        </div>

    );
};

export default SocialLogin;