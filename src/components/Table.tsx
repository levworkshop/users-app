import { StatusEnum } from "../App";
import Status from "./Status";

export interface IUser {
    id: number;
    name: string;
    status: StatusEnum;
    email: string;
}

interface Props {
    users: Array<IUser>;
}

function Table({ users }: Props) {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th className="w-25">Full Name</th>
                    <th className="w-25">Status</th>
                    <th className="w-50">Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user =>
                        <tr key={user.id} className="bg-light">
                            <td>{user.name}</td>
                            <td>
                                <Status type={user.status} />
                            </td>
                            <td>{user.email}</td>
                            <td>
                                <button className="btn btn-light">
                                    <i className="bi-trash"></i>
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