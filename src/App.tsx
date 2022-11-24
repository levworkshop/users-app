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
    const [newUser, setNewUser] = useState<IUser>();
    const [deletedUser, setDeletedUser] = useState<IUser>();

    function addUser(newUser: IUser) {
        newUser.id = (new Date()).getTime();
        const updated = [...users, newUser];
        setNewUser(newUser);
        setUsers(updated);
    }

    function deleteUser(userDel: IUser) {
        const updated = users.filter(user => user.id !== userDel.id);
        setUsers(updated);
        setDeletedUser(userDel);
    }

    return (
        <>
            <Header addUser={addUser} />
            {
                users.length === 0 &&
                <Message
                    type="warning"
                >
                    <div>
                        No users to display
                    </div>
                </Message>
            }
            {
                newUser &&
                <Message
                    type="success"
                >
                    New user: <span className="fw-bold">
                        {newUser?.name}
                    </span>, has been added successfully.
                </Message>
            }
            {
                deletedUser &&
                <Message
                    type="success"
                >
                    User <span className="fw-bold">
                        {deletedUser?.name}
                    </span>, has been deleted.
                </Message>
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
