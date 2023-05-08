import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import Status from './components/Status';
import { useState } from 'react';
import AddUserForm from './components/AddUserForm';

// export type StatusType = "Active" | "Expired" | "Banned";
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

// const data: Array<UserTypes> = [
//     {
//         id: 1,
//         fullName: "Leeav",
//         status: StatusEnum.active,
//         email: "lee@getMaxListeners.com"
//     },
//     {
//         id: 2,
//         fullName: "Itai",
//         status: StatusEnum.active,
//         email: "itai@getMaxListeners.com"
//     },
//     {
//         id: 3,
//         fullName: "Einat",
//         status: StatusEnum.expired,
//         email: "Einat@getMaxListeners.com"
//     },
//     {
//         id: 4,
//         fullName: "Nati",
//         status: StatusEnum.banned,
//         email: "nati@getMaxListeners.com"
//     }
// ];

function App() {
    const [users, setUsers] = useState<Array<UserTypes>>([]);

    // function handleClick(user: UserTypes) {
    //     console.log(`${user.fullName} ${user.status}`);
    // }

    function addUser(newUser: UserTypes) {
        setUsers([
            ...users,
            {
                ...newUser,
                id: users.length,
            }
        ]);
    }

    return (
        <div className="bg-light m-4">
            <AddUserForm
                onAdd={addUser}
            />

            <table className="table w-50 border border-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">Full Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user: UserTypes) =>
                            <tr key={user.id}>
                                <td>
                                    {/* <button
                                        onClick={() => handleClick(user)}
                                    > */}
                                    {user.fullName}
                                    {/* </button> */}
                                </td>
                                <td><Status type={user.status} /></td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default App;
