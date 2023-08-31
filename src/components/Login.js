import { useState } from "react"
// import axios from "axios"

const LOGIN_URL="http://localhost:3001/login"

function Login({setToken}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function loginUser(credentials) {
        return fetch(LOGIN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials)
        })
        .then(data => data.json())

        // axios.post(LOGIN_URL, credentials)
        // .then(response => response.json())
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const token = await loginUser({
            email,
            password
        })
        setToken(token)
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>Email: </label>
                    <input 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        name='email' id='email' 
                        type="email"
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password: </label>
                    <input 
                        value={password} 
                        onChange={e=>setPassword(e.target.value)} 
                        name='password' 
                        id='password' 
                        type="password" 
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login