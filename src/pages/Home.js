import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const {fetchWithAuth} = useAuth()

  useEffect(() => {
    async function getTasks() {
      const res = await fetchWithAuth("http://localhost:5001/api/tasks");
      if (!res.ok) {
        console.log("error al traer la task");
      }

      const data = res.json();
      setTasks(data.tasks ?? []);
    }

    getTasks();
  }, []);
  //esto no va a traer las tareas, porque no hicimos. sus esquemas y porque lo que hacemos en back es:
  //res.json({message: "Info privada del usuario:" + req.userId})
  //Solo está para probar que funciona
  return <div>{tasks}</div>;
}
