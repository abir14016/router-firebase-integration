import React from 'react';
import app from '../../firebase.init';
import { getAuth } from 'firebase/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app)
const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    const location = useLocation();
    console.log(location)
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true });
            })

    }
    return (
        <div>
            <h2 className='mb-4'>Plz Login</h2>
            <button onClick={handleGoogleSignIn} className="mb-5">google sign in</button>
            <form>
                <input type="email" placeholder='Your email' />
                <br />
                <input type="passwird" placeholder='Your password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;