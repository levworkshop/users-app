import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import Status from './components/Status';
import { useState } from 'react';

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

const data: Array<UserTypes> = [
    {
        id: 1,
        fullName: "Leeav",
        status: StatusEnum.active,
        email: "lee@getMaxListeners.com"
    },
    {
        id: 2,
        fullName: "Itai",
        status: StatusEnum.active,
        email: "itai@getMaxListeners.com"
    },
    {
        id: 3,
        fullName: "Einat",
        status: StatusEnum.expired,
        email: "Einat@getMaxListeners.com"
    },
    {
        id: 4,
        fullName: "Nati",
        status: StatusEnum.banned,
        email: "nati@getMaxListeners.com"
    }
];

function App() {
    const statusList = Object.values(StatusEnum); // ['active', 'expired', 'banned']
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [statusField, setStatusField] = useState(StatusEnum.active);

    function handleClick(user: UserTypes) {
        console.log(`${user.fullName} ${user.status}`);
    }

    return (
        <div className="bg-light m-4">
            <div className="d-flex justify-content-between align-items-center p-4">
                <h5>Users</h5>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    className="form-control"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <select
                    className="form-select"
                    value={statusField}
                    onChange={(e) => setStatusField(e.target.value as StatusEnum)}
                >
                    {statusList.map(status =>
                        <option
                            key={status}
                            value={status}
                        >
                            {status}
                        </option>
                    )}
                </select>

                <button
                    className="btn btn-info ms-3"
                >
                    Add
                </button>
            </div>


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
                        data.map(user =>
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
