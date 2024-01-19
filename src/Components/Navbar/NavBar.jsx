import { Link, NavLink } from "react-router-dom";
import logo from '/1.png'
import UseAuth from "../Hook/UseAuth";



const NavBar = () => {
    const { user, logoutUser } = UseAuth()




    const handleLogOut = () => {
        logoutUser()
            .then(() => console.log("You logged out successfully"))
            .catch(error => console.error(error))
    }

    return (
        <div>

            <header className="p-7 bg-[#E1EEFF] ">
                <div className="container flex lg:justify-between h-16 mx-auto">

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            <Link to='/' className="hover:text-[#0360D9]">Home</Link>
                            <Link className="hover:text-[#0360D9]">About Us</Link>
                            <Link className="hover:text-[#0360D9]">Application</Link>
                            <Link className="hover:text-[#0360D9]">History</Link>
                            <Link to='/login' className="hover:text-[#0360D9]">Log in</Link>
                            <Link to='/register' className="hover:text-[#0360D9]">Sign up</Link>


                        </ul>
                    </div>


                    <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                        <img className="lg:w-[200px] w-[150px]" src={logo} alt="" />
                    </a>

                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 text-xl hover:text-[#0360D9] hover:underline">Home</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 text-xl hover:text-[#0360D9] hover:underline">About Us</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 text-xl hover:text-[#0360D9] hover:underline ">Doctor's</a>
                        </li>



                    </ul>
                    <div className="items-center gap-5 flex-shrink-0 hidden lg:flex">
                        {user ?
                            <>
                                <div className="flex gap-5 items-center">
                                    <img className="rounded-full w-7 lg:w-14" src={user.photoURL}
                                        alt="" />
                                    <p className="lg:text-2xl lg:block hidden font-medium" >
                                        <span>{user.displayName}</span>
                                    </p>
                                    <li className="lg:p-2 p-1 mr-2 lg:text-xl text-sm rounded-lg bg-red text-white hover:bg-hoverclr bg-redclr lg:block">
                                        <NavLink className="btn rounded-full lg:px-10 font-semibold lg:text-xl bg-[#E1EEFF] hover:bg-[#0360D9] text-[#0360D9] hover:text-white border-2 border-[#0360D9]" onClick={handleLogOut}> Log Out</NavLink>
                                    </li>
                                </div>
                            </>
                            :
                            <div className="flex">
                                <Link to='/login' className="btn rounded-full lg:px-10 font-semibold lg:text-xl bg-[#E1EEFF] hover:bg-[#0360D9] text-[#0360D9] hover:text-white border-2 border-[#0360D9]">Log in</Link>
                                <Link to='/register' className="btn rounded-full lg:px-10 font-semibold lg:text-xl bg-[#E1EEFF] hover:bg-[#0360D9] text-[#0360D9] hover:text-white border-2 border-[#0360D9]">Sign up</Link>
                            </div>
                        }

                    </div>

                </div>


            </header>


        </div>
    );
};

export default NavBar;





