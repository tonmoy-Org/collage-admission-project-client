import { Link, useNavigate, } from 'react-router-dom';
import logo from '../../../assets/logo/Logo.png'
import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    const navigate = useNavigate();
    const { user, logOut } = useAuth();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("black");
        } else {
            setTheme("light");
        }
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);


    const handleSearch = (event) => {
        event.preventDefault();
        const searchValue = event.target.search.value;
        console.log(searchValue)
        fetch(`https://collage-admission-project-server.vercel.app/collage?college_name=${searchValue}`)
            .then((res) => res.json())
            .then((data) => {
                navigate(`/search?results=${encodeURIComponent(JSON.stringify(data))}`);

            });
    };

    return (
        <div className='lg:pb-20' data-theme="light">
            <div className="navbar shadow-lg bg-[#FFFFFFCC] lg:px-6 fixed z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/profile'>Profile</Link></li>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/collages'>Colleges</Link></li>
                            <li><Link to='/admission'>Admission</Link></li>
                            <li><Link to='/my-collage'>My College</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <img className='w-11' src={logo} alt="" />
                        <p className='uppercase font-bold'>Mentoring</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu font-semibold menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/collages'>Colleges</Link></li>
                        <li><Link to='/admission'>Admission</Link></li>
                        <li><Link to='/my-collage'>My College</Link></li>
                    </ul>
                </div>
                <div className="navbar-end ps-16">
                    <div className="flex items-center mx-auto font-semibold">
                        <div className="lg:flex items-center form-control me-3 hidden md:block">
                            <form onSubmit={handleSearch}>
                                <input type="text" name="search" placeholder="Search" className="py-1 bg-base-300 ps-2 me-3 lg:w-60" required />
                                <input className="py-1 bg-primary text-white px-3" type="submit" value="Search" />
                            </form>
                        </div>
                        {user &&
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <div>
                                            <img src={user?.photoURL}
                                            />
                                        </div>
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-72">
                                    <li>
                                        <p className="justify-between">
                                            {user?.displayName} <br />
                                            {user?.email}
                                            <span className="badge">New</span>
                                        </p>
                                    </li>
                                    <li><Link to='/profile'>Profile</Link></li>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link onClick={handleLogOut}>Logout</Link></li>
                                </ul>
                            </div>
                        }
                        <div>
                            {
                                user ?
                                    <></>
                                    : <Link to='/login' className='lg:me-3 text-[#1890ff]'>Login</Link>
                            }
                        </div>
                        <label className="swap swap-rotate lg:ms-3 ps-5 lg:ps-0">

                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox"
                                onChange={handleToggle}
                                checked={theme === "light" ? false : true}
                            />

                            {/* sun icon */}
                            <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                    </div>
                </div>
            </div>
            <div className="form-control pe-4 px-8 py-3 lg:hidden bg-slate-600">
                <form onSubmit={handleSearch} className="tems-center flex gap-2">
                    <input type="text" name="search" placeholder="Search" className="input input-bordered w-full" required />
                    <input className="btn btn-outline btn-info md:mt-0 md:ms-2" type="submit" value="Search" />
                </form>
            </div>
        </div>
    );
};

export default Navbar;