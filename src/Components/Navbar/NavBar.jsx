import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-[#E1EEFF] py-5 lg:px-[120px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            <Link className="hover:text-[#0360D9]">Home</Link>
                            <Link className="hover:text-[#0360D9]">About Us</Link>
                            <Link className="hover:text-[#0360D9]">Application</Link>
                            <Link className="hover:text-[#0360D9]">History</Link>


                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl ">
                        <p className="text-3xl font-bold">E-<span className="text-[#0360D9] text-3xl font-bold">sheba</span></p>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-5 text-xl px-1">

                        <Link to='/' className="hover:text-[#0360D9] hover:underline">Home</Link>
                        <Link className="hover:text-[#0360D9] hover:underline">About Us</Link>
                        <Link className="hover:text-[#0360D9] hover:underline">Application</Link>
                        <Link className="hover:text-[#0360D9] hover:underline">History</Link>


                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <Link to='/login' className="btn rounded-full lg:px-10 font-semibold lg:text-xl bg-[#E1EEFF] hover:bg-[#0360D9] text-[#0360D9] hover:text-white border-2 border-[#0360D9]">Log in</Link>
                    <Link to='/register' className="btn rounded-full lg:px-10 font-semibold lg:text-xl bg-[#E1EEFF] hover:bg-[#0360D9] text-[#0360D9] hover:text-white border-2 border-[#0360D9]">Sign up</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;