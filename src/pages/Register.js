import {useState} from 'react'

export default function Register(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [success, setSuccess] = useState(false)

const handleSubmit = async () => {
  try {
    const res = await fetch('http://localhost:5001/api/auth/register', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    console.log("STATUS:", res.status);

    if (!res.ok) {
      const errorData = await res.json();
      console.log("Error desde backend:", errorData);
      return;
    }

    setSuccess(true);

  } catch (error) {
    console.log("Error de red:", error);
  }
}


    return(
        <div>
            <input onChange={e => setEmail(e.target.value)} placeholder='email'></input>
            <input onChange={e => setPassword(e.target.value)} placeholder='password' type='password'></input>
            <button onClick={handleSubmit}>Registrar</button>
            {success && <p>Exito</p>}
        </div>
    )
}