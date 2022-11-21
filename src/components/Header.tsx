import { useState } from "react";
import { StatusEnum } from "../App";

interface Props {
    updateUsers: Function;
}

function Header({ updateUsers }: Props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(StatusEnum.active);

    const statusList = Object.values(StatusEnum);

    function clearFields() {
        setName('');
        setEmail('');
        setStatus(StatusEnum.active);
    }

    function handleClick() {
        updateUsers({
            name,
            email,
            status
        });

        clearFields();
    }

    return (
        <div className="bg-light d-flex p-4 justify-content-between">
            <h5>Users</h5>
            <div className="d-flex">
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Full Name"
                />

                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control mx-3"
                    type="text"
                    placeholder="Email"
                />

                <select
                    className="form-select"
                    value={status}
                    onChange={(e) => setStatus(e.target.value as StatusEnum)}
                >
                    {
                        statusList.map(status =>
                            <option
                                key={status}
                                value={status}>
                                {status}
                            </option>
                        )
                    }
                </select>

                <button
                    onClick={handleClick}
                    className="btn btn-info ms-3"
                >
                    Add
                </button>
            </div>
        </div>
    );
}

export default Header;