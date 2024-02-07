import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export const Dashboard = () => {

    return (
        <div>
            <Appbar />
            <div className="m-8">

                <Balance value={"10,000"} />
                <Users />
            </div>
        </div>
    )
}