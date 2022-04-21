import React from "react"
import BlogForm from "./BlogForm"

const LogOutButton = ({setUser}) => {
    const logout = () => setUser(null)

    return(
        <button onClick={logout}>logout</button>
    )
}

const LoggedAs = ({user}) => <div> <p>logged in as {user.name}</p></div>

const Logged = ({user, setUser}) => {
    if(!user) return null
    return(
        <div>
            <LoggedAs user={user}></LoggedAs>
            <LogOutButton setUser={setUser}></LogOutButton>
        </div>

    )
}

export default Logged
