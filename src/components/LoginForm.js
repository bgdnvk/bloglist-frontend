import React from "react"
import loginService from '../services/login'
import Logged from './Logged'

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
    {username, password, setUsername, setPassword, user, setUser}) => {

    const handlelogin = async (e) => {
        e.preventDefault()
        console.log('loggin with ', username, password)

        try{
            const user = await loginService.login({
                username, password
            })
            setUser(user)
            setUsername('')
            setPassword('')
        } catch(e) {
            //TODO: implement error
            console.log('wrong ', e)
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