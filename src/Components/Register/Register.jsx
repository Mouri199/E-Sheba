import Lottie from 'lottie-react';
import animation from './login.json'
import { Link, useNavigate } from 'react-router-dom';
import UseAuth from '../Hook/UseAuth';
import { useState } from 'react';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser, updateUser, load } = UseAuth()
    const registerNavi = useNavigate()
    const [signError, setSignError] = useState();
    const [signSuccess, setSignSuccess] = useState();
    const handleSignup = e => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;


        console.log(name, photo, email, password);

        setSignError(" ");
        setSignSuccess(" ");

        if (password.length < 6) {
            setSignError(" Password should be at least 6 characters ")
            return;
        } else if (!/[A-Z]/.test(password)) {
            setSignError('you should use one uppercase character.')
            return;
        } else if (!/[!@#$%^&*]/.test(password))
            setSignError('you should a special character')

        createUser(email, password)
            .then(result => {
                console.log(result);
                setSignSuccess("User Create Succesfully!")
                e.target.reset()
                registerNavi('/login')
                Swal.fire({
                    icon: "success",
                    title: "Sign Up Successful",
                    text: "You have successfully signed in!"
                })
            })
            .catch(error => {
                console.error(error);
                setSignError(error.message);
                Swal.fire({
                    icon: "error",
                    title: "Sign Up Failed",
                    text: "An error occurred during sign in. Please try again."
                })
            })
    }



    return (
        <div>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="max-w-4xl w-full mx-auto bg-white p-8 border border-gray-200 rounded-lg shadow-lg flex  items-center overflow-hidden">
                    <div className="w-2/5 bg-blue-50 p-8 items-center justify-center lg:block hidden">
                        <Lottie animationData={animation}></Lottie>
                    </div>
                    <div className="lg:w-3/5 p-8">
                        <h1 className="text-2xl font-bold mb-2">MedCareHub</h1>
                        <h2 className="text-xl mb-8">Create a new Account</h2>
                        <form onSubmit={handleSignup} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    User Name
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                    placeholder="User name"
                                    type="name" name='name'
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    User Photo URL
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                    placeholder="User name"
                                    type="name" name='photo'

                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    User Email
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                    placeholder="User email"
                                    type="email" name='email'

                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    New Password
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                    placeholder="User new password"
                                    type="password" name='password'

                                />
                            </div>
                            <button className="btn bg-[#0360D9] text-white w-full">Sign up</button>
                        </form>


                        <div className="mt-6 flex flex-col space-y-2">
                            <a className="text-sm" href="#">
                                Already have an account? <Link to='/login'> Login here</Link>
                            </a>
                        </div>
                        <p className="mt-6 text-xs text-gray-600">
                            By logging into the Prominent application you are agreeing to the{" "}
                            <a className="text-blue-600" href="#">
                                Terms &amp; Conditions
                            </a>
                            .
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;