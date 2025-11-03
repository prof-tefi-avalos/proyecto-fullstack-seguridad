import { useState, useEffect } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsAuth(true);
  }, []);

  function logout() {
    localStorage.removeItem("token");
    setIsAuth(false);
  }

  return (
    <div className="App">
      {isAuth ? (
        <>
          <button onClick={logout}>Logout</button>
          <Home></Home>
        </>
      ) : (
        <>
          <Login setIsAuth={setIsAuth}></Login>
          <Register></Register>
        </>
      )}
    </div>
  );
}

export default App;
