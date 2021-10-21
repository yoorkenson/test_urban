import React, { FC } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const UserPage: FC = () => {
    const {logout} = useActions()
    const {user} = useTypedSelector(state => state.auth)

    return (
        <>
            <button onClick={logout}>
                Выйти
            </button>
            <h1>
                {user.username}
            </h1>
        </>
    );


};

export default UserPage;