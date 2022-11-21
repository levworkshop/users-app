import { useState } from "react";

interface Props {
    text: string;
    type: 'warning' | 'success' | 'info'; // ...
    showMode?: boolean;
}

function Message({ text, type, showMode = true }: Props) {
    const [show, setShow] = useState(showMode);

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

    function handleShow(): string {
        return show ? 'd-block' : 'd-none';
    }

    return (
        <div
            className={`alert ${getCssByType()} my-2 ${handleShow()} alert-dismissible`}
            role="alert"
        >
            {text}
            <button
                onClick={() => setShow(false)}
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
            ></button>
        </div>
    );
}

export default Message;