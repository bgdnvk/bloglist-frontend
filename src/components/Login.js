import React from "react"

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

const LoginForm = ({username, password, setUsername, setPassword}) => {

    const handlelogin = (e) => {
        e.preventDefault()
        console.log('loggin with ', username, password)
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