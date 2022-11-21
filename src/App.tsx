import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Message from './components/Message';
import Table, { IUser } from './components/Table';

export enum StatusEnum {
    active = 'active',
    expired = 'expired',
    banned = 'banned'
}

function App() {
    const [users, setUsers] = useState<Array<IUser>>([]);

    function addUser(newUser: IUser) {
        newUser.id = (new Date()).getTime();
        const updated = [...users, newUser];
        setUsers(updated);
    }

    function deleteUser(userId: number) {
        const updated = users.filter(user => user.id !== userId);
        setUsers(updated);
    }

    return (
        <>
            <Header updateUsers={addUser} />
            {
                users.length === 0 &&
                <Message
                    text="No users to display"
                    type="warning"
                />

            }
            {/* {
                users.length === 0 ?
                    (
                        <p>No users to display</p>
                    ) :
                    (
                        <Table users={users} deleteUser={deleteUser} />
                    )
            } */}
            <Table users={users} deleteUser={deleteUser} />
        </>
    );
}

export default App;
