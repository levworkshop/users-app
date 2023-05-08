import { useState } from "react";
import { StatusEnum } from "../App";

interface Props {
    onAdd: Function;
}

function AddUserForm({ onAdd }: Props) {
    const statusList = Object.values(StatusEnum); // ['active', 'expired', 'banned']
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [statusField, setStatusField] = useState(StatusEnum.active);
    const [error, setError] = useState('');

    function validate(): boolean {
        if (!name || name.length < 2 && !email || email.length === 0) {
            setError('name and email are required, name must be at least 2 characters');
            return false;
        }

        const emailRe = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/;
        if (!emailRe.test(email)) {
            setError('invalid email');
            return false;
        }

        setError('');
        return true;
    }

    function handleClick() {
        if (!validate()) {
            return;
        }

        const newUser = {
            fullName: name,
            status: statusField,
            email,
        }

        onAdd(newUser);

        setName('');
        setEmail('');
        setStatusField(StatusEnum.active);
    }

    return (
        <>
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
                    onClick={handleClick}
                >
                    Add
                </button>
            </div>
            {
                error && <div className="text-danger">{error}</div>
            }
        </>
    );
}

export default AddUserForm;