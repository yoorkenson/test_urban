import React, { FC, FormEvent, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const LoginForm: FC = () => {

    const {error, isLoading} = useTypedSelector(state => state.auth)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const un = 'developer21'
    const pw = '123456'

    const {login} = useActions()

    const submit = (e: FormEvent) => {
        e.preventDefault()
        login(username, password)
    }

    return (
        <div>
            <h1>Авторизация</h1>
            { error && <div style={{color: 'red'}}>
                {error}
            </div>}
            <form>
                <input required value={username} 
                    onChange={e => setUsername(e.target.value)} 
                    type="text" placeholder='username'/>
                <input required value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    type="password"/>
                <button onClick={submit} disabled={username === un && password === pw ? false : true}>
                    {isLoading ? 'Загрузка' : 'Войти'}
                </button>
            </form>
        </div>
    );
};

export default LoginForm;