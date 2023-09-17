import { useState } from "react";
import Link from "../Link/Link";
import { HiAdjustmentsHorizontal, HiXMark } from 'react-icons/hi2';

const NavBar = () => {

    const [open, setOpen] = useState (false)

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Products', path: '/products' },
        { id: 5, name: 'Not Found', path: '/not-found' },
      ];
       


    return (
        <nav className="p-6">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? 
                    <HiXMark className="text-2xl"></HiXMark>
                    : <HiAdjustmentsHorizontal className="text-2xl"></HiAdjustmentsHorizontal>
                }
            
            </div>
            <ul className={`md:flex absolute md:static duration-1000
             bg-yellow-300 px-6 ${open ? "top-12" : "-top-60"}`}>
            {
                routes.map(route => <Link key = {route.id} route = {route}></Link> )
            }
            </ul>
        </nav>
    );
};

export default NavBar;