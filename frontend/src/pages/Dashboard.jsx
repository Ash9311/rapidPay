import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import { useLocation } from "react-router-dom";

export const Dashboard = () => {
    const { state } = useLocation();
    const username = state && state.username;
    return (
        <div>
            <Appbar username={username} />
            <div className="m-8 flex justify-center balance-container">

                <Balance value={"xxx"} username={username} />
                <Users />
            </div>
        </div>
    )
}