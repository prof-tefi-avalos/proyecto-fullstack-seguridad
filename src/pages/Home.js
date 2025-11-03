import {useState, useEffect} from 'react'

export default function Home(){
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch("http://localhost:5001/api/tasks", {
            headers: {Authorization: "Bearer " + localStorage.getItem("token")}
        })
        .then(r => r.json())
        .then(data => setTasks([data.message]))
    }, [])
    //esto no va a traer las tareas, porque no hicimos. sus esquemas y porque lo que hacemos en back es:
    //res.json({message: "Info privada del usuario:" + req.userId})
    //Solo está para probar que funciona
    return(
        <div>
            {tasks}
        </div>
    )
}