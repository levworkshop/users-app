import Joi from "joi";
import { useState } from "react";
import { StatusEnum } from "../App";

interface Props {
    addUser: Function;
}

function Header({ addUser }: Props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(StatusEnum.active);
    const [error, setError] = useState<string>();

    const statusList = Object.values(StatusEnum);

    function clearFields() {
        setName('');
        setEmail('');
        setStatus(StatusEnum.active);
    }

    function handleClick() {
        //data validation
        const schema = Joi.object().keys({
            name: Joi.string().required().min(2),
            email: Joi.string().required().email({ tlds: { allow: false } })
        });

        const { error } = schema.validate({ name, email });

        if (error) {
            setError(error.message);
            return;
        }

        setError('');

        addUser({
            name,
            email,
            status
        });

        clearFields();
    }

    return (
        <>
            <div className="bg-light d-flex p-4 justify-content-between align-items-center">
                <h5 className="m-0">Users</h5>
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

            {
                error &&
                <div className="text-danger">
                    {error}
                </div>
            }
        </>
    );
}

export default Header;