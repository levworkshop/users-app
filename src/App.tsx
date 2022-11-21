import { useState } from 'react';
import './App.css';
import Header from './components/Header';
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

    return (
        <>
            <Header setUsers={addUser} />
            <Table users={users} />
        </>
    );
}

export default App;
