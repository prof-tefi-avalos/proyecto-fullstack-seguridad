import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(() => localStorage.getItem('token') ?? null)
    const [isAuth, setIsAuth] = useState(() => !!localStorage.getItem('token'))
    const [loading, setLoading] = useState(false)

    const login = (newToken) => {
        localStorage.setItem('token', newToken)
        setToken(newToken)
        setIsAuth(true)
    }

    const logout = () => {
        localStorage.removeItem('token')
        setToken(null)
        setIsAuth(false)
    }

    const fetchWithAuth = async (url, opts = {}) => {
        const headers = opts.headers ? { ...opts.headers } : {}

        if (token) headers.Authorization = "Bearer " + token
        const res = await fetch(url, {...opts, headers})

        return res
    } 

    const value = {
        token,
        isAuth,
        loading,
        login,
        logout,
        fetchWithAuth,
        setLoading
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}