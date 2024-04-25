import { useContext, useState } from "react";
import logo from "../assets/codeveloper-logo.png";
import { NavLink } from "react-router-dom";
import AuthContexts from "../contexts/AuthProvider";
import { openNavbar, closeNavbar, logoutIcon } from "../helper/icons";
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

const Navbar = () => {
  const [show, setShow] = useState();
  // const {user} = useContext(AuthContexts)
  return (
    <div className=" w-screen bg-yellow-500 flex-col items-center justify-start gap-12 md:flex-row">
      <a href="www.google.come" className="flex justify-center items-center">
        <img src={logo} alt="Co-Developers" className="w-[110px] h-[75px]" />
        <span className="hidden md:inline-block pt-5 ms-3 font-monserrat text-lg">
          Co-Developers
        </span>
      </a>
      <div>
        <button onClick={() => setShow(!show)}>
          {show ? closeNavbar : openNavbar}
        </button>
      </div>
      <div className="bg-red-100 m-auto">
        <ul className=" flex flex-col justify-center items-center gap-3 font-medium mt-5">
          {navigation.map((item) => {
            return (
              <li key={item.title} className="text-grey-500">
                <NavLink to={item.path}>{item.title}</NavLink>
              </li>
            );
          })}
        </ul>
        <div className="bg-red-200">
          <button className="flex items-center gap-2">
            logOut{logoutIcon}
          </button>
        </div>
      </div>
      <div>{/* <button>{user ? "logOut" : "Login"}</button> */}</div>
    </div>
  );
};

export default Navbar;
