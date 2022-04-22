import React from "react"
import loginService from '../services/login'
import Logged from './Logged'
import blogService from '../services/blogs'

const UsernameForm = ({username, setUsername}) => (
    <div>
        username
        <input type='text'
        value={username}
        name='Username'
        onChange={(e) => setUsername(e.target.value)}
        ></input>
    </div>
)

const PasswordForm = ({password, setPassword}) => (
    <div>
        password
        <input type='password'
        value={password}
        name='Password'
        onChange={(e) => setPassword(e.target.value)}
        ></input>
    </div>
)



const LoginForm = (
    {username, password, setUsername, 
    setPassword, user, setUser,
    setNotification}) => {

    const handlelogin = async (e) => {
        e.preventDefault()
        console.log('loggin with ', username, password)

        try{
            const user = await loginService.login({
                username, password
            })

            //saving token to LS
            window.localStorage.setItem(
                'loggedUser', JSON.stringify(user)
            )
            //set token and user
            blogService.setToken(user.token)
            setUser(user)
            //empty the fields
            setUsername('')
            setPassword('')
        } catch(e) {
            //TODO: refactor notification?
            console.log('wrong ', e)
            setNotification('wrong username or password')
            setTimeout(() => {
                setNotification(null)
            }, 5000)
        }
    }
    if(user){
        console.log('user is ', user)
        return(
            <Logged user={user} setUser={setUser}></Logged>
        )
    }
    return(
        <form onSubmit={handlelogin}>
            <UsernameForm
            username={username}
            setUsername={setUsername}
            ></UsernameForm>
            <PasswordForm
            password={password}
            setPassword={setPassword}
            ></PasswordForm>
            <button type="submit">login</button>
        </form>
    )

}

export default LoginForm