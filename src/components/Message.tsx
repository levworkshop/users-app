import { useState } from "react";
import { IUser } from "./Table";

interface Props {
    type: 'warning' | 'success' | 'info'; // ...
    children?: React.ReactNode;
}

function Message({ type, children }: Props) {
    // const [show, setShow] = useState(showMode);

    function getCssByType(): string {
        switch (type) {
            case 'warning':
                return 'alert-warning';
            case 'success':
                return 'alert-success';
            default:
                return 'alert-secondary';
        }
    }

    // function handleShow(): string {
    //     return show ? 'd-block' : 'd-none';
    // }

    return (
        <div
            className={`alert ${getCssByType()} my-2 alert-dismissible`}
            role="alert"
        >
            {children}

            {/* <button
                onClick={() => setShow(false)}
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
            ></button> */}
        </div>
    );
}

export default Message;