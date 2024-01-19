import Lottie from 'lottie-react';
import loginAnimation from './login.json'
import { Link } from 'react-router-dom';
const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    return (
        <div>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="max-w-4xl w-full mx-auto bg-white p-8 border border-gray-200 rounded-lg shadow-lg flex overflow-hidden">
                    <div className="lg:w-3/5 p-8">
                        <h1 className="text-2xl font-bold mb-2">MedCareHub</h1>
                        <h2 className="text-xl mb-8">Login to your Account</h2>
                        <form onSubmit={handleLogin} className="space-y-6">
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
                                    User Password
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                    placeholder="User password"
                                    type="password" name='password'
                                />
                            </div>
                            <button className="btn bg-[#0360D9] text-white w-full">Log in</button>
                        </form>


                        <div className="mt-6 flex flex-col space-y-2">
                            <a className="text-sm" href="#">
                                Don't have an account?<Link to='/registerr'> Register here</Link>
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
                    <div className="w-2/5 bg-blue-50 p-8  items-center justify-center lg:block hidden">
                        <Lottie animationData={loginAnimation}></Lottie>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;