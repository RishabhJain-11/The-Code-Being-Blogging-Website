import { useState } from "react"

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function register(ev) {
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.status === 200) {
            alert('registration successful');
        } else {
            alert('registration failed');
        }
    }
    return (
        <form className="register" onSubmit={register}>
            <h1 className="mb-5 underline underline-offset-8">Register</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={ev => setUsername(ev.target.value)}
            />
            <input type="password"
                placeholder="password"
                value={password}
                onChange={ev => setPassword(ev.target.value)}
            />
            <button className="text-red-100 bg-red-700">Register</button>
        </form>
    )
}