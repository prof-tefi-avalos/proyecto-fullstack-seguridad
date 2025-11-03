import {useState} from 'react'

export default function Login({setIsAuth}){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async() => {
        const res = await fetch('http://localhost:5001/api/auth/login',{
            method: 'POST',
            headers: {"Content-type":"application/json"},
            body: JSON.stringify({email, password})
        })

        const data = await res.json()
        localStorage.setItem("token", data.token)
        setIsAuth(true)
    }

    return(
        <div>
            <input onChange={e => setEmail(e.target.value)} placeholder='email'></input>
            <input onChange={e => setPassword(e.target.value)} placeholder='password' type='password'></input>
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}