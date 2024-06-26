import { useContext, useState } from "react";
import logo from "../assets/codeveloper-logo.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import AuthContexts from "../contexts/AuthProvider";
import { openNavbar, closeNavbar, logoutIcon } from "../helper/icons";
import Login from "../pages/Login";
const navigation = [
  {
    title: "Home",
    path: "/dashboard",
  },
  {
    title: "About",
    path: "/dashboard/About",
  },
  {
    title: "Products",
    path: "/dashboard/products",
  },
];

const AppNav = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState();
  // const {user} = useContext(AuthContexts)
  console.log(show);
  const location = useLocation()
  console.log(location.pathname)

  const handleLogOut = () => {
    sessionStorage.removeItem("user")
  }
  return (
    <div className=" m-full bg-yellow-200 justify-start md:flex px-5">
      <div className="flex justify-between px-2 md:w-3/6">
        <a href="www.google.come" className="flex justify-center items-center">
          <img src={logo} alt="Co-Developers" className="w-[110px] h-[75px]" />
          <span className="hidden md:inline-block pt-5 ms-3 font-monserrat text-lg">
            Co-Developers
          </span>
        </a>
        <div className="flex items-center md:hidden">
          <button onClick={() => setShow(!show)}>
            {show ? closeNavbar : openNavbar}
          </button>
        </div>
      </div>

      <div className={`${show ? "flex flex-col gap-3 border-yellow-500" : "hidden"} md:flex md:flex-row md:gap-3 items-center md:justify-between md:w-full`}>
        <ul className={`flex flex-col md:flex-row`}>
          {navigation.map((item) => {
            return (
              <li key={item.title} className={`text-grey-500 text-center w-24 py-1 hover:bg-yellow-500 rounded-md ${location.pathname === item.path ? "bg-yellow-400" : ""}`}>
                <NavLink to={item.path}>{item.title}</NavLink>
              </li>
            );
          })}
        </ul>
        <div className="">
          <Link to="/" className="flex items-center justify-center gap-2 w-24 py-1 hover:bg-yellow-500 rounded-md" onClick={handleLogOut}>
            logOut{logoutIcon}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppNav;
