import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import { useLocation } from "react-router-dom";

export const Dashboard = ({ user }) => {
    const { state } = useLocation();
    const username = state && state.username;
    return (
        <div>
            <Appbar />
            <div className="m-8">

                <Balance value={"10,000"} username={username} />
                <Users />
            </div>
        </div>
    )
}