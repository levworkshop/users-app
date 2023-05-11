import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import AddUserForm from './components/AddUserForm';
import Table from './components/Table';
import Message from './components/Message';

export enum StatusEnum {
    active = 'active',
    expired = 'expired',
    banned = 'banned'
}

export interface UserTypes {
    id: number;
    fullName: string;
    status: StatusEnum;
    email: string;
}


function App() {
    const [users, setUsers] = useState<Array<UserTypes>>([]);

    function addUser(newUser: UserTypes) {
        setUsers([
            ...users,
            {
                ...newUser,
                id: users.length,
            }
        ]);
    }

    function deleteUser(userId: number) {
        const updated = users.filter(user => user.id !== userId);
        setUsers([...updated]);
    }

    return (
        <div className="bg-light m-4">
            <AddUserForm
                onAdd={addUser}
            />

            <Message />

            <Table
                users={users}
                onDelete={deleteUser}
            />
        </div>
    );
}

export default App;
