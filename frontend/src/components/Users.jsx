import { useEffect, useState } from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    const [authToken, setAuthToken] = useState(null);
    //const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWM0NzlkNjMxYjZkNDBlZGNmOWY0OTYiLCJpYXQiOjE3MDczNzY5NTZ9.Ps8oG-m6c-NwilPja8pf98p01yXUGTYUq46IRuoMOcI';
    useEffect(() => {
        const token = localStorage.getItem('token');
        setAuthToken(token);
    })
    useEffect(() => {
        if (authToken) {
            const headers = {
                Authorization: `Bearer ${authToken}`
            };
            axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`, { headers })
                .then(response => {
                    setUsers(response.data.users);
                })
        }
    }, [authToken, filter])
    return (
        <div>
            <div className="font-bold mt-6 text-lg">
                Users
            </div>
            <div>
                <input onChange={(e) => { setFilter(e.target.value) }} type="text" placeholder="Search users..." className="w-full border rounded border-slate-200" />
            </div>
            <div>
                {users.map(user => <User user={user} />)}
            </div>
        </div>
    )

    function User({ user }) {
        const navigate = useNavigate();
        return (
            <div className="justify-between">
                <div className="flex">
                    <div className="flex flex-col rounded-full">{user.firstName[0]}</div>

                    <div>{user.firstName} {user.lastName}</div>
                </div>
                <div>
                    <Button onClick={(e) => { navigate("/send?id=" + user._id + "&name=" + user.firstName) }} label={"Send Money"}></Button>
                </div>
            </div>
        )
    }
}