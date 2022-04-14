import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';


const auth = getAuth(app)

const Products = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h2>This is product page</h2>
            <h3>Current user: {user?.displayName}</h3>
        </div>
    );
};

export default Products;