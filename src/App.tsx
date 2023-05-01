import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import Status from './components/Status';

export type StatusType = "Active" | "Expired" | "Banned";

export interface UserTypes {
    id: number;
    fullName: string;
    status: StatusType;
    email: string;
}

const data: Array<UserTypes> = [
    {
        id: 1,
        fullName: "Leeav",
        status: 'Active',
        email: "lee@getMaxListeners.com"
    },
    {
        id: 2,
        fullName: "Itai",
        status: "Active",
        email: "itai@getMaxListeners.com"
    },
    {
        id: 3,
        fullName: "Einat",
        status: "Expired",
        email: "Einat@getMaxListeners.com"
    },
    {
        id: 4,
        fullName: "Nati",
        status: "Banned",
        email: "nati@getMaxListeners.com"
    }
];

function App() {
    function handleClick(user: UserTypes) {
        console.log(`${user.fullName} ${user.status}`);
    }

    return (
        <div className="bg-light m-4">
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
                                    <button onClick={() => handleClick(user)}>
                                        {user.fullName}
                                    </button>
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
