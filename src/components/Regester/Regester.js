import React from 'react';

const Regester = () => {
    return (
        <div>
            <h2 className='mb-4'>Plz regester now</h2>
            <form>
                <input type="text" placeholder='Your name' />
                <br />
                <input type="email" placeholder='Your email' />
                <br />
                <input type="passwird" placeholder='Your password' />
                <br />
                <input type="submit" value="Regester" />
            </form>
        </div>
    );
};

export default Regester;