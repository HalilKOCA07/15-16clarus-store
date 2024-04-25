

const Login = () => {
    return(
        <div className="loginStyle">
            <div className="h-[500px] w-11/12 sm:w-[475px] bg-white rounded-2xl flex flex-col p-5">
                <div className="flex gap-3 justify-center items-center mt-2">
                    <div className="rounded-lg w-[8px] h-[45px] bg-yellow-500"></div>
                    <h1 className=" font-monserrat text-4xl uppercase">Co-Developer Stores</h1>
                </div>
                <div>
                    <h3 className="uppercase text-center mt-3 font-semibold text-2xl">Sign in</h3>
                    <p className="text-center mt-2">Enter yoru credentials to access your account</p>
                </div>
                <form className="flex flex-col ms-5">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email"/>
                </form>
            </div>
        </div>
    )
}

export default Login