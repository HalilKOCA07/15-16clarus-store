import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContexts } from "../contexts/AuthProvider";


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {login, user} = useContext(AuthContexts)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
            e.preventDefault()
            if(email === "codeveloper@cw.com" && password === "admin"){
                login({email, password})
            }else{
                alert("Kullanıcı bilgileri yanlış.")
            }

    }

  return (
    <div className="loginStyle">
      <div className="h-[500px] w-11/12 sm:w-[475px] bg-white rounded-2xl flex flex-col p-5">
        <div className="flex gap-3 justify-center items-center mt-2">
          <div className="rounded-lg w-[8px] h-[45px] bg-yellow-500"></div>
          <h1 className=" font-monserrat text-4xl uppercase">
            Co-Developer Stores
          </h1>
        </div>
        <div>
          <h3 className="uppercase text-center mt-3 font-semibold text-2xl">
            Sign in
          </h3>
          <p className="text-center mt-2">
            Enter yoru credentials to access your account
          </p>
        </div>
        <form className="flex flex-col ms-5 mt-12 " onSubmit={handleSubmit}>
          <label htmlFor="email" className="hover:after:content-['codeveloper@cw.com'] hover:after:text-gray-400 hover:after:ms-3">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className=" border border-gray-300 p-2 rounded-lg mt-2"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="mt-3 hover:after:content-['admin'] hover:after:text-gray-400 hover:after:ms-3">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className=" border border-gray-300 p-2 rounded-lg mt-2  "
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className=" w-full bg-orange-400 mt-5 h-12 rounded-lg"
          >
            SIGN IN
          </button>
          <div className="w-full flex justify-center mt-3">
            <span className="">Forget your Password?</span>
            <button className="text-orange-600 font-semibold ms-2 underline"> Reset Password</button>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
