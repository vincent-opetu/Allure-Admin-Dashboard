import { useState } from "react"
import TextInput from "./TextInput"
import LabelField from "./LabelField"
import Button from "./Button"
import { Logo2 } from "./Logo"
import { Link } from 'react-router-dom'
import { adminLogin } from "../redux/apiCalls.js/user.js"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const LoginForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.user?.currentUser)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = (e) => {
        e.preventDefault();
        adminLogin(dispatch, { email, password })
        if (user?.success === 1) {
            navigate("/overview")
            toast.success("Login successfull")
        }
    }

    return (
        <div className="mt-28">
        <Logo2 />
        <form className="grid items-center border border-gray-400 py-7 px-10 shadow-lg mt-5" onSubmit={handleLogin}>
            <h4 className="text-3xl font-light pb-5 uppercase">Admin Login</h4>
            <div className="grid">
                <LabelField title="Email"/>
                <TextInput name="email" type="email" placeholder="Email Address" handleclick={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="grid pt-4">
                <LabelField title="Password"/>
                <TextInput name="password" type="password" placeholder="Password" handleclick={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="flex justify-between items-center pt-4">
                {/* <div className="flex space-x-2 items-center">
                    <input type="checkbox" className="w-4 h-4 shadow-md"/>
                    <span className="text-sm font-light">Remember me</span>
                </div> */}
                <Link to="/" className="text-sm font-light text-[#C3129B]">Forgot password?</Link>
            </div>
            <div className="pt-5">
                <Button title="Submit" type="submit"/>
            </div>
        </form>
        </div>
    )
}

export default LoginForm