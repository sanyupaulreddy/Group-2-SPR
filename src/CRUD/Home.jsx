import React, { useEffect, useState } from 'react';
import "./Home.css";
import axios from 'axios';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/users") // Update with your correct API endpoint
        .then(res => {
            setUsers(res.data);
        })
        .catch(err => console.error("Error fetching users:", err));
    }, []);

    return (
        <section id="homeBlock">
            <article>
                <h1>List of Users</h1>
                <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone No</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => (
                                <tr key={i}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </article>
        </section>
    );
}

export default Home;
