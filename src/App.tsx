import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import Status from './components/Status';

export interface UserTypes {
    fullName: string;
    status: "Active" | "Expired" | "Banned";
    email: string;
}

const data: Array<UserTypes> = [
    {
        fullName: "Leeav",
        status: 'Active',
        email: "lee@getMaxListeners.com"
    },
    {
        fullName: "Itai",
        status: "Active",
        email: "itai@getMaxListeners.com"
    },
    {
        fullName: "Einat",
        status: "Expired",
        email: "Einat@getMaxListeners.com"
    },
    {
        fullName: "Nati",
        status: "Banned",
        email: "nati@getMaxListeners.com"
    }
];

function App() {
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
                            <tr>
                                <td>{user.fullName}</td>
                                <td><Status /></td>
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
