import { UserTypes } from "../App";
import Status from "./Status";

interface Props {
    users: Array<UserTypes>,
    onDelete: Function;
}

function Table({ users, onDelete }: Props) {
    return (
        <table className="table w-50 border border-dark table-hover">
            <thead>
                <tr>
                    <th scope="col">Full Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user: UserTypes) =>
                        <tr key={user.id}>
                            <td>{user.fullName}</td>
                            <td><Status type={user.status} /></td>
                            <td>{user.email}</td>
                            <td>
                                <button
                                    className="btn btn-light"
                                    onClick={() => onDelete(user.id, user.fullName)}
                                >
                                    <i className="bi bi-trash"></i>
                                </button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}

export default Table;