import { useState, useEffect, useContext } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { AuthProvider, useAuth } from "./context/AuthContext";

function AppInner() {
  const { isAuth, logout, setIsAuth } = useAuth()

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

export default function App() {
  return(
    <AuthProvider>
      <AppInner></AppInner>
    </AuthProvider>
  )
}