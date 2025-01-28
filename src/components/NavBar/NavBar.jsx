// import { Link } from "react-router";

import { Link } from "react-router";

// const NavBar = () => {
//     return (
//         <div>
//             <Link></Link>
            
//  <Link to='/'>home</Link>
//  <Link to='/about'>about</Link>
//         </div>
//     );
// };

// export default NavBar;



const NavBar = () => {
    return (
        
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li>
          <a>Listed Books</a>
        
        </li>
        <li><a>Pages to Read</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a><Link to='/'>Home</Link>
        
        </a></li>
        <li>
          <a><Link to="/listBook">Listed Books</Link>
            </a>
        
        </li>
        <li><a>Pages to Read</a></li>
    </ul>
  </div>
  <div className="navbar-end flex gap-2">
  <button className="btn btn-success">Sign In</button>
  <button className="btn btn-info">Sign up</button>

  </div>
</div>
        
    );
};

export default NavBar;