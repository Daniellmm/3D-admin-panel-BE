import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from '../Utili/Auth';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const isAuthenticated = authenticateUser(username, password);

        if (isAuthenticated) {
            navigate('/home');
        } else {
            setError('Invalid credentials');
        }
    }


    return (
        <section className='min-h-screen'>
            <div className='flex justify-center items-center h-screen'>
                <div className='h-[550px] mx-10 w-[600px] rounded-[50px] shadow-xl pb-20 shadow-black flex justify-start bg-black flex-col px-5 md:px-14 py-10'>
                    <div>
                        <h1 className='text-white font-bold text-2xl'> Admin Login </h1>
                    </div>

                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                    <form onSubmit={handleSubmit} action="" className='pt-14'>
                        <div className='flex flex-col gap-y-10'>
                            <div className=''>
                                <label htmlFor="username" className='text-white'>
                                    Username:
                                </label>

                                <div className=''>
                                    <input
                                        id='username'
                                        type='text'
                                        name='username'
                                        placeholder='Enter your username'
                                        value={username}
                                        required
                                        onChange={(e) => setUsername(e.target.value)}
                                        className='w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2'
                                    />
                                </div>
                            </div>
                            <div className=''>
                                <label htmlFor="password" className='text-white'>
                                    Password:
                                </label>

                                <div className=' pt-2'>
                                    <input
                                        id='password'
                                        name='password'
                                        placeholder='Enter your password'
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className='w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2'
                                    />
                                </div>
                            </div>

                            <button type='submit' className='text-black bg-white rounded-2xl h-12 font-bold text-2xl mt-8 shadow-md shadow-white'>Login</button>

                        </div>
                    </form>
                </div>

            </div>
        </section>

        
    )
}

export default Login
