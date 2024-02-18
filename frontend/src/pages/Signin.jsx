import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Heading } from "../components/Heading";
import axios from "axios";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";

export const Signin = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 customized-container">
                    <Heading label={"Sign In"} />
                    <SubHeading label={"Enter your credentials to access your account"} />
                    <InputBox onChange={e => { setUserName(e.target.value) }} label={"Email"} placeholder="johndoe" />
                    <InputBox onChange={e => setPassword(e.target.value)} label={"Password"} placeholder={"1234"} />
                    <div className="pt-4">
                        <Button label={"Sign in"}
                            onClick={async () => {
                                const reponse = await axios.post("https://rapid-pay.vercel.app/api/v1/user/signin", {
                                    username,
                                    password
                                });
                                localStorage.setItem("token", reponse.data.token);
                                navigate("/dashboard", {
                                    state: { username }
                                });
                            }}
                        />
                    </div>
                    <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"} />
                </div>

            </div>

        </div>
    )
}