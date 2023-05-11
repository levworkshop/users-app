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

type Action = 'add' | 'delete';

function App() {
    const [users, setUsers] = useState<Array<UserTypes>>([]);
    const [userName, setUserName] = useState('');
    const [lastAction, setLastAction] = useState<Action | undefined>();

    function addUser(newUser: UserTypes) {
        setUsers([
            ...users,
            {
                ...newUser,
                id: users.length,
            }
        ]);

        setUserName(newUser.fullName);
        setLastAction('add');
    }

    function deleteUser(userId: number, name: string) {
        const updated = users.filter(user => user.id !== userId);
        setUsers([...updated]);
        setUserName(name);
        setLastAction('delete');
    }

    function resetAction() {
        setUserName('');
        setLastAction(undefined);
    }

    return (
        <div className="bg-light m-4">
            <AddUserForm
                onAdd={addUser}
            />

            {
                users.length === 0 &&
                <Message type="warning">
                    No users to display.
                </Message>
            }
            {
                userName &&
                <Message type="success" onClose={resetAction}>
                    {
                        lastAction === 'add' &&
                        <>
                            New user: <span className="fw-bold">{userName}</span>
                            , has been added successfully.
                        </>
                    }
                    {
                        lastAction === 'delete' &&
                        <>
                            User <span className="fw-bold">{userName}</span>,
                            has been deleted.
                        </>
                    }
                </Message>
            }

            <Table
                users={users}
                onDelete={deleteUser}
            />
        </div>
    );
}

export default App;
